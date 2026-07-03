"use client";

import { useTranslations } from "@/lib/language-context";
import { SOCIAL_HREFS, SOCIAL_ORDER, type SocialKey } from "@/lib/social-links";
import {
  MailIcon,
  RedditIcon,
  TelegramIcon,
  TwitterXIcon,
  YoutubeIcon,
} from "@/components/social-icons";

const ICONS: Record<SocialKey, (props: { className?: string }) => React.JSX.Element> = {
  twitter: TwitterXIcon,
  telegram: TelegramIcon,
  youtube: YoutubeIcon,
  reddit: RedditIcon,
  email: MailIcon,
};

const ACCENTS: Record<SocialKey, string> = {
  twitter: "hover:border-sky-300/50 hover:text-sky-100 hover:shadow-[0_0_24px_rgba(125,211,252,0.28)]",
  telegram: "hover:border-cyan-300/50 hover:text-cyan-100 hover:shadow-[0_0_24px_rgba(103,232,249,0.28)]",
  youtube: "hover:border-red-400/50 hover:text-red-100 hover:shadow-[0_0_24px_rgba(248,113,113,0.28)]",
  reddit: "hover:border-orange-400/50 hover:text-orange-100 hover:shadow-[0_0_24px_rgba(251,146,60,0.28)]",
  email: "hover:border-[var(--gold-soft)]/60 hover:text-[var(--gold-bright)] hover:shadow-[0_0_24px_rgba(212,177,106,0.28)]",
};

export function SocialLinksRow() {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-3">
      <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/50">
        {t.social.menuTitle}
      </div>
      <div className="flex flex-wrap items-center gap-2.5">
        {SOCIAL_ORDER.map((key) => {
          const Icon = ICONS[key];
          return (
            <a
              key={key}
              href={SOCIAL_HREFS[key]}
              target="_blank"
              rel="noreferrer noopener"
              title={t.social[key]}
              aria-label={t.social[key]}
              className={`group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/74 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08] ${ACCENTS[key]}`}
            >
              <Icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
