initSidebarItems({"enum":[["BatchDocument",""],["BuildMode","Build mode for schema generation."],["CachedTx",""],["Computation",""],["ComputationResult",""],["Conjuctive",""],["CoreError",""],["EnumType",""],["Expression",""],["ExpressionResult",""],["Flow",""],["InputType",""],["InterpreterError",""],["Item","An IR item that either expands to a subtype or leaf-record."],["Node",""],["Operation",""],["OutputType",""],["ParsedInputValue",""],["Query",""],["QueryDocument",""],["QueryGraphBuilderError",""],["QueryGraphDependency","Stored on the edges of the QueryGraph, a QueryGraphDependency contains information on how children are connected to their parents, expressing for example the need for additional information from the parent to be able to execute at runtime."],["QueryGraphError",""],["QueryParserErrorKind",""],["QueryResult",""],["QueryTag","A `QueryTag` designates a top level query possible with Prisma."],["QueryValue",""],["ReadQuery",""],["ScalarType",""],["SelectionSet",""],["TransactionError",""],["WriteQuery",""]],"fn":[["aggregate",""],["append_opt","Appends an option of type T to a vector over T if the option is Some."],["build",""],["camel_case","Lowercases first letter, essentially. Assumes 1-byte characters, panics otherwise."],["capitalize","Capitalizes first character. Assumes 1-byte characters."],["compound_id_field_name","Computes a compound field name based on a multi-field id."],["compound_index_field_name","Computes a compound field name based on an index."],["db_name",""],["extract_filter","Extracts a regular filter potentially matching many records."],["extract_nested_rel_aggr_selections",""],["extract_query_args","Expects the caller to know that it is structurally guaranteed that query arguments can be extracted, e.g. that the query schema guarantees that required fields are present. Errors occur if conversions fail."],["extract_unique_filter","Extracts a filter for a unique selector, i.e. a filter that selects exactly one record."],["field","Field convenience wrapper function."],["find_first",""],["find_many",""],["find_related",""],["find_unique","Builds a read query from a parsed incoming read query field."],["format",""],["format_expression",""],["group_by",""],["init_input_object_type","Input object type initializer for cases where only the name is known, and fields are computed later."],["input_field","Field convenience wrapper function."],["input_object_type","Input object type convenience wrapper function."],["is_aggr_selection",""],["load","Loads a query executor based on the parsed Prisma schema (datasource)."],["object_type","Object type convenience wrapper function."],["pluralize","Pluralizes given (English) input string. Falls back to appending “s”."],["string_enum_type","Enum type convenience wrapper function."]],"mod":[["error",""],["executor","What the executor module DOES:"],["interpreter",""],["query_ast",""],["query_document","Intermediate representation of the input document that is used by the query engine to build query ASTs and validate the incoming data."],["query_graph",""],["query_graph_builder","Query graph builder module. tbd"],["response_ir","Prisma Response IR (Intermediate Representation)."],["result_ast",""],["schema",""],["schema_builder","Query schema builder. Root for query schema building."]],"static":[["CACHE_EVICTION_SECS",""],["MODEL_NAMESPACE",""],["PRISMA_NAMESPACE",""]],"struct":[["AggregateRecordsQuery",""],["Binding",""],["CompactedDocument",""],["ConnectRecords",""],["ConnectorContext","Connector meta information, to be used in query execution if necessary."],["CreateManyRecords",""],["CreateRecord",""],["DatabaseEnumType",""],["DeleteManyRecords",""],["DeleteRecord",""],["Deprecation",""],["DiffNode",""],["DiffResult","Diff of two identifier vectors A and B: `left` contains all elements that are in A but not in B. `right` contains all elements that are in B but not in A."],["DisconnectRecords",""],["EdgeRef",""],["Env",""],["Expressionista",""],["FieldCountError",""],["FieldPair",""],["FieldRefEnumType",""],["Identifier",""],["In",""],["InputField",""],["InputObjectType",""],["InputObjectTypeConstraints",""],["IrSerializer",""],["List",""],["ManyRecordsQuery",""],["NodeRef",""],["ObjectType",""],["OpenTx",""],["OutputField",""],["ParsedArgument",""],["ParsedField",""],["ParsedObject",""],["QueryDocumentParser",""],["QueryGraph","A graph representing an abstract view of queries and their execution dependencies."],["QueryGraphBuilder",""],["QueryInfo","Designates a specific top-level operation on a corresponding model."],["QueryInterpreter",""],["QueryParserError",""],["QueryPath",""],["QuerySchema","The query schema. Defines which operations (query/mutations) are possible on a database, based on the (internal) data model."],["RawQuery",""],["RecordAggregations",""],["RecordQuery",""],["RecordSelection",""],["RelatedRecordsQuery",""],["RelationViolation",""],["ResponseData",""],["Selection",""],["SelectionBuilder",""],["StringEnumType",""],["TxId",""],["UpdateManyRecords",""],["UpdateRecord",""]],"trait":[["ArgumentListLookup",""],["Builder","Temporary trait for the legacy read builder code."],["FilteredQuery",""],["IntoArc","Since we have the invariant that the weak refs that are used throughout the query schema have to be always valid, we use this simple trait to keep the code clutter low."],["QueryExecutor",""],["QuerySchemaRenderer","Trait that should be implemented in order to be able to render a query schema."],["TransactionManager",""]],"type":[["DataDependencyFn",""],["EnumTypeRef",""],["InputFieldRef",""],["InputObjectTypeStrongRef",""],["InputObjectTypeWeakRef",""],["ItemRef","Convenience type wrapper for Arc."],["Map","A `key -> value` map to an IR item"],["ObjectTypeStrongRef",""],["ObjectTypeWeakRef",""],["OutputFieldRef",""],["OutputTypeRef",""],["ParsedInputList",""],["ParsedInputMap",""],["ProjectedDataDependencyFn",""],["QueryGraphBuilderResult","Query graph builder sub-result type."],["QueryGraphResult",""],["QueryParserResult",""],["QuerySchemaRef",""],["Result","Result type tying all sub-result type hierarchies of the core together."]]});