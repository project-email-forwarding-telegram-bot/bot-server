import { i_telegram_bot_client_request_base } from "../../i_telegram_bot_client_request_base.ts";

class set_webhook_request implements i_telegram_bot_client_request_base {
    method = "POST" as const;
    path = "/setWebhook" as const;
    constructor(public webhook_url: string) {
    }
}

export { set_webhook_request };
