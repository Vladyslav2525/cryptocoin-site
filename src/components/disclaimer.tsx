"use client";

import { useTranslations } from "@/lib/language-context";
import { cn } from "@/lib/utils";

type DisclaimerProps = {
  className?: string;
  compact?: boolean;
};

export function Disclaimer({ className, compact = false }: DisclaimerProps) {
  const t = useTranslations();

  if (compact) {
    return (
      <p className={cn("text-xs leading-5 text-white/45", className)}>
        {t.disclaimer.short}
      </p>
    );
  }

  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-2xl border border-[var(--gold-soft)]/25 bg-[var(--gold-soft)]/[0.05] px-5 py-4",
        className,
      )}
    >
      <span aria-hidden className="mt-0.5 text-base text-[var(--gold-bright)]">
        ⚠️
      </span>
      <div className="space-y-1">
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold-bright)]">
          {t.disclaimer.label}
        </div>
        <p className="text-sm leading-6 text-white/72">{t.disclaimer.short}</p>
      </div>
    </div>
  );
}
