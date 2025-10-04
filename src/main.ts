import "./webhook/listen.ts";
import { global } from "./global.ts";
import { set_webhook_request } from "./telegram/api/webhook/set_webhook.ts";
import { enum_response_status } from "./telegram/telegram_bot_client.ts";
// import { telegram_bot_client } from "./telegram/telegram_bot_client.ts";

/*
const REDIS_REST_TOKEN = Deno.env.get("REDIS_REST_TOKEN");

if (REDIS_REST_TOKEN == null) {
    console.error("Environment variable `REDIS_REST_TOKEN` not present");
    Deno.exit(-2);
}

*/

// Set webhook
const webhook_secret = await global.global_kv_store.get("WEBHOOK");

if (webhook_secret == null) {
    console.log("webhook_secret is null");
    const new_webhook_secret_key = Date.now().toString();
    console.log("new_webhook_secret_key:", new_webhook_secret_key);
    const response = await global.telegram_bot_client.request(new set_webhook_request(global.HOSTNAME));

    if (response.status == enum_response_status.SUCCESS) {
        console.log("telegram_bot_client_response:", response);
        global.global_kv_store.set("WEBHOOK", { secret: new_webhook_secret_key });
    }
}
