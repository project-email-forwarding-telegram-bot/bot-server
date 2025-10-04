import { i_telegram_bot_client_request_base } from "../../i_telegram_bot_client_request_base.ts";

class set_webhook_request implements i_telegram_bot_client_request_base {
    method = "POST" as const;
    path = "/setWebhook" as const;
    params: { url: string };

    constructor(public webhook_url: string) {
        this.params = { url: webhook_url };
    }
}

export { set_webhook_request };
