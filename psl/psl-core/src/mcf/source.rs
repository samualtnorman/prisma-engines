use tsify::Tsify;

use crate::configuration::{self, StringFromEnvVar};

#[derive(Debug, serde::Serialize)]
#[serde(rename_all = "camelCase")]
#[derive(Tsify)]
#[tsify(into_wasm_abi)]
pub struct SourceConfig {
    pub name: String,

    #[tsify(
        type = "'mysql' | 'mongodb' | 'postgresql' | 'postgres' | 'sqlite' | 'sqlserver' | 'cockroachdb' | 'jdbc:sqlserver'"
    )]
    pub provider: String,

    #[tsify(
        type = "'mysql' | 'mongodb' | 'postgresql' | 'postgres' | 'sqlite' | 'sqlserver' | 'cockroachdb' | 'jdbc:sqlserver'"
    )]
    pub active_provider: String,
    pub url: StringFromEnvVar,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub direct_url: Option<StringFromEnvVar>,
    pub schemas: Vec<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub documentation: Option<String>,
}

pub fn render_sources_to_json_value(sources: &[configuration::Datasource]) -> serde_json::Value {
    let res = source_to_serializable_structs(sources);
    serde_json::to_value(res).expect("Failed to render JSON.")
}

pub fn render_sources_to_json(sources: &[configuration::Datasource]) -> String {
    let res = source_to_serializable_structs(sources);
    serde_json::to_string_pretty(&res).expect("Failed to render JSON.")
}

pub fn source_to_serializable_structs(sources: &[configuration::Datasource]) -> Vec<SourceConfig> {
    let mut res: Vec<SourceConfig> = Vec::new();

    for source in sources {
        res.push(source_to_serializable_struct(source));
    }

    res
}

fn source_to_serializable_struct(source: &configuration::Datasource) -> SourceConfig {
    let schemas: Vec<String> = source
        .namespaces
        .iter()
        .map(|(namespace, _)| namespace.clone())
        .collect();

    SourceConfig {
        name: source.name.clone(),
        provider: source.provider.clone(),
        active_provider: source.active_provider.to_string(),
        url: source.url.clone(),
        direct_url: source.direct_url.clone(),
        documentation: source.documentation.clone(),
        schemas,
    }
}
