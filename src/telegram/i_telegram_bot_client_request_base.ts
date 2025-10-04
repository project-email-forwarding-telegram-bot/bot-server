interface i_telegram_bot_client_request_base {
    method: "GET" | "POST";
    path: string;
    params?: Record<string, string>;
}

export type { i_telegram_bot_client_request_base };
