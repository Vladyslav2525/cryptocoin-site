/**
 * Central place for social/contact links.
 * Replace the placeholder "#" hrefs with the real URLs once available.
 */
export type SocialKey = "twitter" | "telegram" | "youtube" | "reddit" | "email";

export const SOCIAL_HREFS: Record<SocialKey, string> = {
  twitter: "#", // TODO: paste real X / Twitter profile URL
  telegram: "#", // TODO: paste real Telegram channel URL
  youtube: "#", // TODO: paste real YouTube live-stream URL
  reddit: "#", // TODO: paste real subreddit URL
  email: "#", // TODO: replace with mailto:yourname@gmail.com
};

export const SOCIAL_ORDER: SocialKey[] = [
  "twitter",
  "telegram",
  "youtube",
  "reddit",
  "email",
];
