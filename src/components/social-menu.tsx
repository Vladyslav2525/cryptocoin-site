"use client";

import { useEffect, useRef, useState } from "react";
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

interface SocialMenuProps {
  triggerClassName: string;
  triggerLabel: string;
  align?: "left" | "right";
}

export function SocialMenu({ triggerClassName, triggerLabel, align = "right" }: SocialMenuProps) {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={triggerClassName}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {triggerLabel}
      </button>

      <div
        role="menu"
        className={`absolute top-[calc(100%+0.75rem)] z-40 w-72 origin-top rounded-2xl border border-white/12 bg-[rgba(6,7,11,0.98)] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.65)] backdrop-blur-xl transition-all duration-200 ease-out ${
          align === "right" ? "right-0" : "left-0"
        } ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-95 opacity-0"
        }`}
      >
        <div className="mb-3 px-1">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            {t.social.menuTitle}
          </div>
          <div className="mt-0.5 text-[11px] text-white/45">{t.social.menuSubtitle}</div>
        </div>

        <div className="flex flex-col gap-1.5">
          {SOCIAL_ORDER.map((key, index) => {
            const Icon = ICONS[key];
            return (
              <a
                key={key}
                href={SOCIAL_HREFS[key]}
                target="_blank"
                rel="noreferrer noopener"
                role="menuitem"
                onClick={() => setOpen(false)}
                className={`group flex items-center gap-3 rounded-xl border border-white/12 bg-white/[0.07] px-3 py-2.5 text-sm text-white/78 transition-all duration-200 hover:bg-white/[0.12] ${ACCENTS[key]} ${
                  open ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${index * 40}ms` : "0ms" }}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 transition-transform duration-200 group-hover:scale-110">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="font-medium">{t.social[key]}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
