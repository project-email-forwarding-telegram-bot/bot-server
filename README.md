# Email Forwarding Telegram Bot Server

A Telegram bot server that forwards emails based on user-defined regex patterns. Users can subscribe to email patterns and receive forwarded emails directly in their Telegram chat.

## Bot Interface

The bot provides the following commands for users:

### Core Commands

#### `/start`
Welcome message and introduction to the bot functionality.

#### `/help`
Display all available commands and their descriptions.

#### `/subscribe <email-regex>`
Subscribe to emails that match the specified regex pattern.

**Example:**
```
/subscribe .*@company\.com
/subscribe noreply@.*
/subscribe .*newsletter.*
```

#### `/list`
List all your currently subscribed email regex patterns.

#### `/unsubscribe <email-regex>`
Unsubscribe from a specific email regex pattern.

**Example:**
```
/unsubscribe .*@company\.com
```

### Management Commands

#### `/unsubscribe_all`
Unsubscribe from all email patterns at once.

#### `/pause`
Temporarily pause all email forwarding without removing subscriptions.

#### `/resume`
Resume email forwarding for all active subscriptions.

#### `/status`
Show current subscription status, active/paused state, and subscription count.

### Utility Commands

#### `/test <email-regex>`
Test if a given email address would match your regex pattern before subscribing.

**Example:**
```
/test .*@company\.com john@company.com
```

#### `/stats`
Display statistics about your email forwarding activity:
- Total emails forwarded
- Most active patterns
- Recent activity summary

#### `/settings`
Configure notification and forwarding preferences:
- Message format options
- Time-based filtering
- Maximum emails per day
- Notification quiet hours

## Regex Pattern Examples

Here are some useful regex patterns for email subscriptions:

- `.*@domain\.com` - All emails from a specific domain
- `noreply@.*` - All no-reply emails
- `.*newsletter.*` - Emails containing "newsletter"
- `support@.*|help@.*` - Support or help emails from any domain
- `.*urgent.*|.*important.*` - Emails marked as urgent or important
- `.*invoice.*|.*billing.*` - Billing and invoice related emails

## Technical Details

- **Runtime**: Deno
- **Database**: Redis (Upstash)
- **Port**: 8443
- **Health Check**: `/health` endpoint

## Environment Variables

- `REDIS_REST_TOKEN` - Redis authentication token (required)
- `COMMIT_SHA` - Git commit SHA for version tracking

## Development

```bash
# Run in development mode
deno task dev
```

## Docker

The project includes Docker configuration for containerized deployment.

## API Endpoints

- `GET /health` - Health check endpoint returning version and commit SHA
- `POST /webhook` - Telegram webhook endpoint for receiving bot messages