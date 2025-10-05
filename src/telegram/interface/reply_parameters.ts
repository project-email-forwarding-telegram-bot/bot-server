interface message_entity {
    type: string;
    offset: number;
    length: number;
    url?: string;
    user?: any; // TODO: Import user interface
    language?: string;
    custom_emoji_id?: string;
}

interface reply_parameters {
    message_id: number;
    chat_id?: number | string;
    allow_sending_without_reply?: boolean;
    quote?: string;
    quote_parse_mode?: string;
    quote_entities?: message_entity[];
    quote_position?: number;
    checklist_task_id?: number;
}

export type { reply_parameters };