import { i_telegram_bot_client_request_base } from "../../i_telegram_bot_client_request_base.ts";

class set_webhook_request implements i_telegram_bot_client_request_base {
    method = "POST" as const;
    path = "/setWebhook" as const;
    params: { url: string; max_connections: number };

    constructor(public webhook_url: string) {
        this.params = { url: webhook_url, max_connections: 100 };
    }
}

export { set_webhook_request };
