import config from "../deno.json" with { type: "json" };

export const global = {
    WEBHOOK_PORT: 8443,
    COMMIT_SHA: Deno.env.get("COMMIT_SHA"),
    VERSION: config.version,
    config,
};
