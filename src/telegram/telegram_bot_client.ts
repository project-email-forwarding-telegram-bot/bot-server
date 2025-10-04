import type { i_telegram_bot_client_request_base } from "./i_telegram_bot_client_request_base.ts";

const enum_response_status = {
    SUCCESS: 0,
    FAILURE: 1,
    EXCEPTION: 2,
} as const;

type telegram_bot_client_response_type =
    | { status: typeof enum_response_status.SUCCESS; body: unknown }
    | { status: typeof enum_response_status.FAILURE; body: unknown }
    | { status: typeof enum_response_status.EXCEPTION };

class telegram_bot_client {
    constructor(public telegram_api_base_url: string, public bot_token: string) {
    }

    async request(
        request: i_telegram_bot_client_request_base,
    ): Promise<telegram_bot_client_response_type> {
        try {
            const url = new URL(this.telegram_api_base_url + "/bot" + this.bot_token + request.path);
            const params = request.params;

            if (params != null) {
                for (const [key, value] of Object.entries(params)) {
                    url.searchParams.append(key, value);
                }
            }

            const response = await fetch(url, {
                method: request.method,
            });

            try {
                const body = await response.json();

                if (200 <= response.status && response.status <= 299) {
                    return {
                        status: enum_response_status.SUCCESS,
                        body,
                    };
                } else {
                    return {
                        status: enum_response_status.FAILURE,
                        body,
                    };
                }
            } catch {
                return { status: enum_response_status.EXCEPTION };
            }
        } catch {
            return { status: enum_response_status.EXCEPTION };
        }
    }
}

export { enum_response_status, telegram_bot_client };
