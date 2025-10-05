import type { user } from "./user.ts";
import type { chat } from "./chat.ts";

interface chat_photo {
    small_file_id: string;
    small_file_unique_id: string;
    big_file_id: string;
    big_file_unique_id: string;
}

interface birthdate {
    day: number;
    month: number;
    year?: number;
}

interface business_intro {
    title?: string;
    message?: string;
    sticker?: any; // TODO: Define sticker interface
}

interface business_location {
    address: string;
    location?: any; // TODO: Define location interface
}

interface business_opening_hours {
    time_zone_name: string;
    opening_hours: business_opening_hours_interval[];
}

interface business_opening_hours_interval {
    opening_minute: number;
    closing_minute: number;
}

interface reaction_type {
    type: string;
    emoji?: string;
    custom_emoji_id?: string;
}

interface chat_permissions {
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
    can_change_info?: boolean;
    can_invite_users?: boolean;
    can_pin_messages?: boolean;
    can_manage_topics?: boolean;
}

interface accepted_gift_types {
    stars?: boolean;
    custom?: boolean;
}

interface chat_location {
    location: any; // TODO: Define location interface
    address: string;
}

interface chat_full_info {
    id: number;
    type: "private" | "group" | "supergroup" | "channel";
    title?: string;
    username?: string;
    first_name?: string;
    last_name?: string;
    is_forum?: true;
    is_direct_messages?: true;
    accent_color_id: number;
    max_reaction_count: number;
    photo?: chat_photo;
    active_usernames?: string[];
    birthdate?: birthdate;
    business_intro?: business_intro;
    business_location?: business_location;
    business_opening_hours?: business_opening_hours;
    personal_chat?: chat;
    parent_chat?: chat;
    available_reactions?: reaction_type[];
    background_custom_emoji_id?: string;
    profile_accent_color_id?: number;
    profile_background_custom_emoji_id?: string;
    emoji_status_custom_emoji_id?: string;
    emoji_status_expiration_date?: number;
    bio?: string;
    has_private_forwards?: true;
    has_restricted_voice_and_video_messages?: true;
    join_to_send_messages?: true;
    join_by_request?: true;
    description?: string;
    invite_link?: string;
    pinned_message?: any; // TODO: Define message interface fully
    permissions?: chat_permissions;
    accepted_gift_types?: accepted_gift_types;
    can_send_paid_media?: true;
    slow_mode_delay?: number;
    unrestrict_boost_count?: number;
    message_auto_delete_time?: number;
    has_aggressive_anti_spam_enabled?: true;
    has_hidden_members?: true;
    has_protected_content?: true;
    has_visible_history?: true;
    sticker_set_name?: string;
    can_set_sticker_set?: true;
    custom_emoji_sticker_set_name?: string;
    linked_chat_id?: number;
    location?: chat_location;
}

export type { chat_full_info };