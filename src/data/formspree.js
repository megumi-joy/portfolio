/**
 * Contact form — dual-channel delivery:
 *   Primary:  api.voicydroid.com/api/contact  (VPS, rate-limited, server-side TG notify)
 *   Fallback: Telegram Bot API direct from browser (if VPS is down)
 *
 * Security note: TG_BOT_TOKEN is visible in the JS bundle (public repo).
 * Acceptable tradeoff: bot can only sendMessage → one private chat.
 * Worst case: someone spams your Telegram. Rate-limited by Telegram itself.
 */
export const CONTACT_VPS_URL = 'https://api.voicydroid.com/api/contact';

// Fallback: direct Telegram (used only if VPS returns error/timeout)
// Fill in your bot token and chat ID from @BotFather / @userinfobot
export const TG_BOT_TOKEN = 'REPLACE_WITH_BOT_TOKEN';   // e.g. '7123456789:AAF...'
export const TG_CHAT_ID   = 'REPLACE_WITH_CHAT_ID';     // e.g. '123456789'

// Legacy alias kept for import compatibility
export const FORMSPREE_ENDPOINT = CONTACT_VPS_URL;
