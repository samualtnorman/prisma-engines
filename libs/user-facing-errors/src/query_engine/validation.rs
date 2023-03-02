use crate::KnownError;
use core::fmt;
use serde::Serialize;
use serde_json::json;
use std::borrow::Cow;
use user_facing_error_macros::*;

#[derive(Debug, UserFacingError, Serialize)]
#[user_facing(
    code = "P2009",
    message = "Failed to validate the query: `{query_validation_error}` at `{query_position}`"
)]
pub struct LegacyQueryValidationFailed {
    /// Error(s) encountered when trying to validate a query in the query engine
    pub query_validation_error: String,

    /// Location of the incorrect parsing, validation in a query. Represented by tuple or object with (line, character)
    pub query_position: String,
}

/// A validation error is a Serializable object that contains the path where the validation error
/// of a certain `kind` ocurred, and an optional and arbitrary piece of `meta`-information.
#[derive(Debug, Serialize)]
pub struct ValidationError {
    kind: ValidationErrorKind,
    #[serde(skip)]
    message: String,
    path: Vec<String>,
    #[serde(flatten)]
    meta: Option<serde_json::Value>,
}

impl fmt::Display for ValidationError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.write_str(&self.message)
    }
}

#[derive(Debug, Serialize)]
pub enum ValidationErrorKind {
    /// See [`ValidationError::empty_selection`]
    EmptySelection,
    /// See [`ValidationError::selection_set_on_scalar`]
    SelectionSetOnScalar,
    /// See [`ValidationError::required_value_not_set`]
    RequiredArgumentMissing,
    /// See [`ValidationError::unkown_argument`]
    UnkownArgument,
    /// See [`ValidationError::unknown_input_field`]
    UnknownInputField,
    /// See [`ValidationError::unkown_selection_field`]
    UnknownSelectionField,
}

impl ValidationErrorKind {
    /// Returns the appropriate code code for the different validation errors.
    ///
    /// TODO: Ideally each all validation errors should have the same error code (P2009), or distinct
    /// type each of them should have an individual error code. For the time being, we keep the
    /// semantics documented in the [error reference][r] as users might be relying on the error
    /// codes when subscribing to error events. Otherwise, we could be introducing a breaking change.
    ///
    /// [r]: https://www.prisma.io/docs/reference/api-reference/error-reference
    fn code(&self) -> &'static str {
        match self {
            ValidationErrorKind::RequiredArgumentMissing => "P2012",
            _ => "P2009",
        }
    }
}

impl From<ValidationError> for crate::KnownError {
    fn from(err: ValidationError) -> Self {
        KnownError {
            message: err.message.clone(),
            meta: serde_json::to_value(&err).expect("Failed to render validation error to JSON"),
            error_code: Cow::from(err.kind.code()),
        }
    }
}

impl ValidationError {
    /// Creates an [`ValidationErrorKind::EmptySelection`] kind of error, which happens when the
    /// selection of fields is empty for a query.
    ///
    /// Example json query:
    ///
    /// {
    ///     "action": "findMany",
    ///     "modelName": "User",
    ///     "query": {
    ///         "selection": {}
    ///     }
    /// }
    pub fn empty_selection(path: Vec<String>, output_type_description: OutputTypeDescription) -> Self {
        let message = String::from("Expected a minimum of 1 field, found 0");
        ValidationError {
            kind: ValidationErrorKind::EmptySelection,
            meta: Some(json!({ "outputType": output_type_description })),
            message,
            path,
        }
    }

    /// Creates an [`ValidationErrorKind::RequiredArgumentMissing`] kind of error, which happens
    /// when the selection of fields is empty for a query.
    ///
    /// Example json query:
    ///
    /// {
    ///     "action": "findMany",
    ///     "modelName": "User",
    ///     "query": {
    ///         "selection": {}
    ///     }
    /// }
    pub fn required_argument_missing(path: Vec<String>) -> Self {
        let message = format!("`{}`: A value is required but not set.", path.join("."));
        ValidationError {
            kind: ValidationErrorKind::RequiredArgumentMissing,
            meta: None,
            message,
            path,
        }
    }

    /// Creates an [`ValidationErrorKind::UnkownArgument`] kind of error, which happens when the
    /// arguments for a query are not congruent with those expressed in the schema
    ///
    /// Example json query:
    ///
    /// {
    ///     "action": "findMany",
    ///     "modelName": "User",
    ///     "query": {
    ///         "arguments": {
    ///             "foo": "123"
    ///         },
    ///         "selection": {
    ///             "$scalars": true
    ///         }
    ///     }
    /// }
    pub fn unknown_argument(
        argument_name: String,
        path: Vec<String>,
        argument_path: Vec<String>,
        arguments: Vec<ArgumentDescription>,
    ) -> Self {
        let message = format!("'{argument_name}' is an invalid argument in path '{}'", path.join("."));
        ValidationError {
            kind: ValidationErrorKind::UnkownArgument,
            meta: Some(json!({"argumentPath": argument_path, "arguments": arguments})),
            message,
            path,
        }
    }

    /// Creates a [`ValidationErrorKind::UnknownInputField`] kind of error, which happens when the
    /// argument value for a query contains a field that does not exist in the schema for the
    /// input type.
    ///
    /// TODO:
    ///   how is this conceptually different from an unknown argument? This used to be a
    ///   FieldNotFoundError (see [old code][c]), but the same FieldNotFoundError was used to
    ///   denote what's now an UnknownSelectionField.
    ///
    /// [c]: https://www.prisma.io/docs/reference/api-reference/error-reference
    ///
    /// Example json query:
    ///
    /// {
    ///     "action": "findMany",
    ///     "modelName": "User",
    ///     "query": {
    ///         "arguments": {
    ///             "where": {
    ///                 "foo": 2
    ///             }
    ///         },
    ///         "selection": {
    ///             "$scalars": true
    ///         }
    ///     }
    /// }
    pub fn unknown_input_field(path: Vec<String>, input_type_description: InputTypeDescription) -> Self {
        let message = String::from("Field does not exist in enclosing type.");

        ValidationError {
            kind: ValidationErrorKind::UnknownInputField,
            meta: Some(json!({ "inputType": input_type_description })),
            message,
            path,
        }
    }

    /// Creates an [`ValidationErrorKind::UnknownSelectionField`] kind of error, which happens when
    /// the selection of fields for a query contains a field that does not exist in the schema for the
    /// enclosing type
    ///
    /// Example json query:
    ///
    /// {
    ///     "action": "findMany",
    ///     "modelName": "User",
    ///     "query": {
    ///         "selection": {
    ///             "notAField": true
    ///         }
    ///     }
    // }
    pub fn unkown_selection_field(
        field_name: String,
        path: Vec<String>,
        output_type_description: OutputTypeDescription,
    ) -> Self {
        let message = format!(
            "Field '{}' not found on enclosing type '{}'",
            field_name, output_type_description.name
        );
        ValidationError {
            kind: ValidationErrorKind::UnknownSelectionField,
            meta: Some(json!({ "outputType": output_type_description })),
            message,
            path,
        }
    }

    /// Creates an [`ValidationErrorKind::SelectionSetOnScalar`] kind of error, which happens when there
    /// is a nested selection block on a scalar field
    ///
    /// Example json query:
    ///
    /// {
    ///     "action": "findMany",
    ///     "modelName": "User",
    ///     "query": {
    ///         "selection": {
    ///             "email": {
    ///                 "selection": {
    ///                     "id": true
    ///                 }
    ///             }
    ///         }
    ///     }
    /// }
    pub fn selection_set_on_scalar(field_name: String, path: Vec<String>) -> Self {
        let message = format!("Cannot select over scalar field '{}'", field_name);
        ValidationError {
            kind: ValidationErrorKind::SelectionSetOnScalar,
            meta: None,
            message,
            path,
        }
    }
}

#[derive(Debug, Serialize)]
pub struct OutputTypeDescription {
    name: String,
    fields: Vec<OutputTypeDescriptionField>,
}

impl OutputTypeDescription {
    pub fn new(name: String, fields: Vec<OutputTypeDescriptionField>) -> Self {
        OutputTypeDescription { name, fields }
    }
}

#[derive(Debug, Serialize)]
pub struct OutputTypeDescriptionField {
    name: String,
    type_name: String,
    is_relation: bool,
}

impl OutputTypeDescriptionField {
    pub fn new(name: String, type_name: String, is_relation: bool) -> Self {
        Self {
            name,
            type_name,
            is_relation,
        }
    }
}
#[derive(Debug, Serialize)]
pub struct InputTypeDescription {
    name: String,
    fields: Vec<InputTypeDescriptionField>,
}

impl InputTypeDescription {
    pub fn new(name: String, fields: Vec<InputTypeDescriptionField>) -> Self {
        Self { name, fields }
    }
}

#[derive(Debug, Serialize)]
pub struct InputTypeDescriptionField {
    name: String,
    type_names: Vec<String>,
    required: bool,
}

impl InputTypeDescriptionField {
    pub fn new(name: String, type_names: Vec<String>, required: bool) -> Self {
        Self {
            name,
            type_names,
            required,
        }
    }
}

#[derive(Debug, Serialize)]
pub struct ArgumentDescription {
    name: String,
    type_names: Vec<String>,
}

impl ArgumentDescription {
    pub fn new(name: String, type_names: Vec<String>) -> Self {
        Self { name, type_names }
    }
}
