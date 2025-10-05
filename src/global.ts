import config from "../deno.json" with { type: "json" };
import { secret_manager } from "./utils/secret_manager.ts";
import { telegram_bot_client } from "./telegram/telegram_bot_client.ts";
import { enum_secret_manager_key } from "./utils/secret_manager.ts";
import { enum_environment } from "./enum.ts";
import { kv_store } from "./utils/kv_store.ts";
import { ExistsCommand } from "@upstash/redis";

const environment = Deno.env.get("ENVIRONMENT");

if (environment == null) {
    console.error(`Environment variable \`ENVIRONMENT\` not present`);
    Deno.exit(-10);
}

if (
    environment !== enum_environment.LOCAL && environment !== enum_environment.PRODUCTION &&
    environment !== enum_environment.STAGING
) {
    console.error(
        `Invalid value for environment variable \`ENVIRONMENT\` | Expected ${enum_environment.LOCAL} or ${enum_environment.PRODUCTION} or ${enum_environment.STAGING} but found ${environment}`,
    );
    Deno.exit(-9);
}

const global_secret_manager = new secret_manager(environment);
const telegram_bot_token = global_secret_manager.get(enum_secret_manager_key.TELEGRAM_BOT_TOKEN);
const telegram_bot_api_base_url = "https://api.telegram.org";

/*
if(telegram_bot_api_base_url) {
    console.error(`Missing config ${}`)
}
    */

if (telegram_bot_token == null) {
    console.error(`Missing secret ${enum_secret_manager_key.TELEGRAM_BOT_TOKEN}`);
    Deno.exit(-10);
}

const upstash_url = "https://special-racer-10669.upstash.io";
const upstash_redis_rest_token = global_secret_manager.get(enum_secret_manager_key.REDIS_REST_TOKEN);

if (upstash_redis_rest_token == null) {
    console.error(`Missing secret \`${enum_secret_manager_key.REDIS_REST_TOKEN}\``);
    Deno.exit(-10);
}

let commit_sha: string;

if (environment == "local") {
    const command = new Deno.Command("git", { "args": ["rev-parse", "HEAD"] });
    const command_output = command.outputSync();

    if (command_output.success) {
        const data = command_output.stdout;
        const decoder = new TextDecoder("utf-8");
        commit_sha = decoder.decode(data).trim();
    } else {
        console.error(`Failed to run command \`git rev-parse HEAD\``);
        Deno.exit(-10);
    }
} else {
    const commit_sha_env = Deno.env.get("COMMIT_SHA");

    if (commit_sha_env == null) {
        console.error(`Env variable \`COMMIT_SHA\` not found`);
        Deno.exit(-10);
    }

    commit_sha = commit_sha_env;
}

export const global = {
    WEBHOOK_PORT: 8443,
    commit_sha,
    version: config.version,
    HOSTNAME: "bot-server.email-forwarding-telegram-bot.cfd",
    environment,
    config,
    global_secret_manager,
    telegram_bot_client: new telegram_bot_client(telegram_bot_api_base_url, telegram_bot_token),
    global_kv_store: new kv_store(upstash_url, upstash_redis_rest_token),
    // token: Deno.env.get("REDIS_REST_TOKEN"),
};
