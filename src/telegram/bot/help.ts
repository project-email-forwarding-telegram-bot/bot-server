async function help(): Promise<string> {
    return `📧 *Email Forwarding Bot Help*

Welcome! I can forward emails to your Telegram based on regex patterns you define.

*Core Commands:*
/start - Welcome message and bot introduction
/help - Show this help message
/subscribe <email-regex> - Subscribe to emails matching a pattern
/list - List your current subscriptions
/unsubscribe <email-regex> - Remove a specific subscription

*Management Commands:*
/unsubscribe_all - Remove all subscriptions
/pause - Temporarily stop email forwarding
/resume - Resume email forwarding
/status - Show your current status and subscription count

*Utility Commands:*
/test <email-regex> <test-email> - Test if an email matches your pattern
/stats - View forwarding statistics
/settings - Configure preferences and filters

*Example Patterns:*
\`.*@company\\.com\` - All emails from company.com
\`noreply@.*\` - All no-reply emails
\`.*newsletter.*\` - Emails containing "newsletter"
\`support@.*|help@.*\` - Support emails from any domain
\`.*urgent.*|.*important.*\` - Urgent or important emails

*Tips:*
• Use \\\\ to escape special regex characters
• Test patterns with /test before subscribing
• Use /pause instead of unsubscribing temporarily

Need help with regex? Visit: https://regex101.com/`;
}

export { help };
