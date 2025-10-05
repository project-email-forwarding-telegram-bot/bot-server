import type { message } from "./message.ts";
import type { user } from "./user.ts";
import type { chat } from "./chat.ts";

interface business_connection {
    id: string;
    user: user;
    user_chat_id: number;
    date: number;
    can_reply: boolean;
    is_enabled: boolean;
}

interface business_messages_deleted {
    business_connection_id: string;
    chat: chat;
    message_ids: number[];
}

interface message_reaction_updated {
    chat: chat;
    message_id: number;
    user?: user;
    actor_chat?: chat;
    date: number;
    old_reaction: reaction_type[];
    new_reaction: reaction_type[];
}

interface message_reaction_count_updated {
    chat: chat;
    message_id: number;
    date: number;
    reactions: reaction_count[];
}

interface reaction_type {
    type: "emoji" | "custom_emoji" | "paid";
    emoji?: string;
    custom_emoji_id?: string;
}

interface reaction_count {
    type: reaction_type;
    total_count: number;
}

interface inline_query {
    id: string;
    from: user;
    query: string;
    offset: string;
    chat_type?: "sender" | "private" | "group" | "supergroup" | "channel";
    location?: location;
}

interface location {
    latitude: number;
    longitude: number;
    horizontal_accuracy?: number;
    live_period?: number;
    heading?: number;
    proximity_alert_radius?: number;
}

interface chosen_inline_result {
    result_id: string;
    from: user;
    location?: location;
    inline_message_id?: string;
    query: string;
}

interface callback_query {
    id: string;
    from: user;
    message?: any; // TODO: Define MaybeInaccessibleMessage
    inline_message_id?: string;
    chat_instance: string;
    data?: string;
    game_short_name?: string;
}

interface shipping_query {
    id: string;
    from: user;
    invoice_payload: string;
    shipping_address: shipping_address;
}

interface shipping_address {
    country_code: string;
    state: string;
    city: string;
    street_line1: string;
    street_line2: string;
    post_code: string;
}

interface pre_checkout_query {
    id: string;
    from: user;
    currency: string;
    total_amount: number;
    invoice_payload: string;
    shipping_option_id?: string;
    order_info?: order_info;
}

interface order_info {
    name?: string;
    phone_number?: string;
    email?: string;
    shipping_address?: shipping_address;
}

interface paid_media_purchased {
    from: user;
    paid_media_payload: string;
}

interface poll {
    id: string;
    question: string;
    question_entities?: message_entity[];
    options: poll_option[];
    total_voter_count: number;
    is_closed: boolean;
    is_anonymous: boolean;
    type: "regular" | "quiz";
    allows_multiple_answers: boolean;
    correct_option_id?: number;
    explanation?: string;
    explanation_entities?: message_entity[];
    open_period?: number;
    close_date?: number;
}

interface message_entity {
    type:
        | "mention"
        | "hashtag"
        | "cashtag"
        | "bot_command"
        | "url"
        | "email"
        | "phone_number"
        | "bold"
        | "italic"
        | "underline"
        | "strikethrough"
        | "spoiler"
        | "blockquote"
        | "expandable_blockquote"
        | "code"
        | "pre"
        | "text_link"
        | "text_mention"
        | "custom_emoji";
    offset: number;
    length: number;
    url?: string;
    user?: user;
    language?: string;
    custom_emoji_id?: string;
}

interface poll_option {
    text: string;
    text_entities?: message_entity[];
    voter_count: number;
}

interface poll_answer {
    poll_id: string;
    voter_chat?: chat;
    user?: user;
    option_ids: number[];
}

interface chat_member_updated {
    chat: chat;
    from: user;
    date: number;
    old_chat_member: chat_member;
    new_chat_member: chat_member;
    invite_link?: chat_invite_link;
    via_join_request?: boolean;
    via_chat_folder_invite_link?: boolean;
}

interface chat_member {
    status: "creator" | "administrator" | "member" | "restricted" | "left" | "kicked";
    user: user;
    is_anonymous?: boolean;
    custom_title?: string;
    can_be_edited?: boolean;
    can_manage_chat?: boolean;
    can_delete_messages?: boolean;
    can_manage_video_chats?: boolean;
    can_restrict_members?: boolean;
    can_promote_members?: boolean;
    can_change_info?: boolean;
    can_invite_users?: boolean;
    can_post_messages?: boolean;
    can_edit_messages?: boolean;
    can_pin_messages?: boolean;
    can_post_stories?: boolean;
    can_edit_stories?: boolean;
    can_delete_stories?: boolean;
    can_manage_topics?: boolean;
    is_member?: boolean;
    can_send_messages?: boolean;
    can_send_audios?: boolean;
    can_send_documents?: boolean;
    can_send_photos?: boolean;
    can_send_videos?: boolean;
    can_send_video_notes?: boolean;
    can_send_voice_notes?: boolean;
    can_send_polls?: boolean;
    can_send_other_messages?: boolean;
    can_add_web_page_previews?: boolean;
    until_date?: number;
}

interface chat_invite_link {
    invite_link: string;
    creator: user;
    creates_join_request: boolean;
    is_primary: boolean;
    is_revoked: boolean;
    name?: string;
    expire_date?: number;
    member_limit?: number;
    pending_join_request_count?: number;
    subscription_period?: number;
    subscription_price?: number;
}

interface chat_join_request {
    chat: chat;
    from: user;
    user_chat_id: number;
    date: number;
    bio?: string;
    invite_link?: chat_invite_link;
}

interface chat_boost_updated {
    chat: chat;
    boost: chat_boost;
}

interface chat_boost {
    boost_id: string;
    add_date: number;
    expiration_date: number;
    source: chat_boost_source;
}

interface chat_boost_source {
    source: "premium" | "gift_code" | "giveaway";
    user?: user;
    giveaway_message_id?: number;
    is_unclaimed?: boolean;
}

interface chat_boost_removed {
    chat: chat;
    boost_id: string;
    remove_date: number;
    source: chat_boost_source;
}

interface update {
    update_id: number;
    message?: message;
    edited_message?: message;
    channel_post?: message;
    edited_channel_post?: message;
    business_connection?: business_connection;
    business_message?: message;
    edited_business_message?: message;
    deleted_business_messages?: business_messages_deleted;
    message_reaction?: message_reaction_updated;
    message_reaction_count?: message_reaction_count_updated;
    inline_query?: inline_query;
    chosen_inline_result?: chosen_inline_result;
    callback_query?: callback_query;
    shipping_query?: shipping_query;
    pre_checkout_query?: pre_checkout_query;
    purchased_paid_media?: paid_media_purchased;
    poll?: poll;
    poll_answer?: poll_answer;
    my_chat_member?: chat_member_updated;
    chat_member?: chat_member_updated;
    chat_join_request?: chat_join_request;
    chat_boost?: chat_boost_updated;
    removed_chat_boost?: chat_boost_removed;
}

export type { update };