import type { user } from "./user.ts";
import type { chat } from "./chat.ts";

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

interface link_preview_options {
    is_disabled?: boolean;
    url?: string;
    prefer_small_media?: boolean;
    prefer_large_media?: boolean;
    show_above_text?: boolean;
}

interface photo_size {
    file_id: string;
    file_unique_id: string;
    width: number;
    height: number;
    file_size?: number;
}

interface animation {
    file_id: string;
    file_unique_id: string;
    width: number;
    height: number;
    duration: number;
    thumbnail?: photo_size;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
}

interface audio {
    file_id: string;
    file_unique_id: string;
    duration: number;
    performer?: string;
    title?: string;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
    thumbnail?: photo_size;
}

interface document {
    file_id: string;
    file_unique_id: string;
    thumbnail?: photo_size;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
}

interface video {
    file_id: string;
    file_unique_id: string;
    width: number;
    height: number;
    duration: number;
    thumbnail?: photo_size;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
}

interface video_note {
    file_id: string;
    file_unique_id: string;
    length: number;
    duration: number;
    thumbnail?: photo_size;
    file_size?: number;
}

interface voice {
    file_id: string;
    file_unique_id: string;
    duration: number;
    mime_type?: string;
    file_size?: number;
}

interface contact {
    phone_number: string;
    first_name: string;
    last_name?: string;
    user_id?: number;
    vcard?: string;
}

interface dice {
    emoji: string;
    value: number;
}

interface poll_option {
    text: string;
    text_entities?: message_entity[];
    voter_count: number;
}

interface poll {
    id: string;
    question: string;
    question_entities?: message_entity[];
    options: poll_option[];
    total_voter_count: number;
    is_closed: boolean;
    is_anonymous: boolean;
    type: string;
    allows_multiple_answers: boolean;
    correct_option_id?: number;
    explanation?: string;
    explanation_entities?: message_entity[];
    open_period?: number;
    close_date?: number;
}

interface location {
    latitude: number;
    longitude: number;
    horizontal_accuracy?: number;
    live_period?: number;
    heading?: number;
    proximity_alert_radius?: number;
}

interface venue {
    location: location;
    title: string;
    address: string;
    foursquare_id?: string;
    foursquare_type?: string;
    google_place_id?: string;
    google_place_type?: string;
}

interface message {
    message_id: number;
    message_thread_id?: number;
    from?: user;
    sender_chat?: chat;
    sender_boost_count?: number;
    sender_business_bot?: user;
    date: number;
    business_connection_id?: string;
    chat: chat;
    forward_origin?: any; // TODO: Define MessageOrigin interface
    is_topic_message?: true;
    is_automatic_forward?: true;
    reply_to_message?: message;
    external_reply?: any; // TODO: Define ExternalReplyInfo interface
    quote?: any; // TODO: Define TextQuote interface
    reply_to_story?: any; // TODO: Define Story interface
    reply_to_checklist_task_id?: number;
    via_bot?: user;
    edit_date?: number;
    has_protected_content?: true;
    is_from_offline?: true;
    is_paid_post?: true;
    media_group_id?: string;
    author_signature?: string;
    paid_star_count?: number;
    text?: string;
    entities?: message_entity[];
    link_preview_options?: link_preview_options;
    suggested_post_info?: any; // TODO: Define SuggestedPostInfo interface
    effect_id?: string;
    animation?: animation;
    audio?: audio;
    document?: document;
    paid_media?: any; // TODO: Define PaidMediaInfo interface
    photo?: photo_size[];
    sticker?: any; // TODO: Define Sticker interface
    story?: any; // TODO: Define Story interface
    video?: video;
    video_note?: video_note;
    voice?: voice;
    caption?: string;
    caption_entities?: message_entity[];
    show_caption_above_media?: true;
    has_media_spoiler?: true;
    checklist?: any; // TODO: Define Checklist interface
    contact?: contact;
    dice?: dice;
    game?: any; // TODO: Define Game interface
    poll?: poll;
    venue?: venue;
    location?: location;
    new_chat_members?: user[];
    left_chat_member?: user;
    new_chat_title?: string;
    new_chat_photo?: photo_size[];
    delete_chat_photo?: true;
    group_chat_created?: true;
    supergroup_chat_created?: true;
    channel_chat_created?: true;
    message_auto_delete_timer_changed?: any; // TODO: Define MessageAutoDeleteTimerChanged interface
    migrate_to_chat_id?: number;
    migrate_from_chat_id?: number;
    pinned_message?: any; // TODO: Define MaybeInaccessibleMessage interface
    invoice?: any; // TODO: Define Invoice interface
    successful_payment?: any; // TODO: Define SuccessfulPayment interface
    users_shared?: any; // TODO: Define UsersShared interface
    chat_shared?: any; // TODO: Define ChatShared interface
    connected_website?: string;
    write_access_allowed?: any; // TODO: Define WriteAccessAllowed interface
    passport_data?: any; // TODO: Define PassportData interface
    proximity_alert_triggered?: any; // TODO: Define ProximityAlertTriggered interface
    boost_added?: any; // TODO: Define ChatBoostAdded interface
    chat_background_set?: any; // TODO: Define ChatBackgroundSet interface
    forum_topic_created?: any; // TODO: Define ForumTopicCreated interface
    forum_topic_edited?: any; // TODO: Define ForumTopicEdited interface
    forum_topic_closed?: any; // TODO: Define ForumTopicClosed interface
    forum_topic_reopened?: any; // TODO: Define ForumTopicReopened interface
    general_forum_topic_hidden?: any; // TODO: Define GeneralForumTopicHidden interface
    general_forum_topic_unhidden?: any; // TODO: Define GeneralForumTopicUnhidden interface
    giveaway_created?: any; // TODO: Define GiveawayCreated interface
    giveaway?: any; // TODO: Define Giveaway interface
    giveaway_winners?: any; // TODO: Define GiveawayWinners interface
    giveaway_completed?: any; // TODO: Define GiveawayCompleted interface
    video_chat_scheduled?: any; // TODO: Define VideoChatScheduled interface
    video_chat_started?: any; // TODO: Define VideoChatStarted interface
    video_chat_ended?: any; // TODO: Define VideoChatEnded interface
    video_chat_participants_invited?: any; // TODO: Define VideoChatParticipantsInvited interface
    web_app_data?: any; // TODO: Define WebAppData interface
    reply_markup?: any; // TODO: Define InlineKeyboardMarkup interface
}

export type { message };
