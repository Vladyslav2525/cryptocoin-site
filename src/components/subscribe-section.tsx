"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { useTranslations } from "@/lib/language-context";

const defaultEmbedScriptSrc =
  "https://eocampaign1.com/form/477f6b8e-6d52-11f1-bc9a-17c7d72d96de.js";
const defaultEmbedFormId = "477f6b8e-6d52-11f1-bc9a-17c7d72d96de";

/**
 * Permanent subscribe block.
 *
 * Collecting the email is now the site's primary action — the token is not
 * launched, so there is nothing to buy. The EmailOctopus embed renders itself
 * into the container below; EmailOctopus owns validation, double opt-in and
 * unsubscribe, so no address is ever handled by this static site.
 */
export function SubscribeSection() {
  const t = useTranslations();
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const scriptSrc =
    process.env.NEXT_PUBLIC_EMAILOCTOPUS_EMBED_SCRIPT_SRC?.trim() ||
    defaultEmbedScriptSrc;
  const formId =
    process.env.NEXT_PUBLIC_EMAILOCTOPUS_EMBED_FORM_ID?.trim() ||
    defaultEmbedFormId;

  // The EmailOctopus form is configured as a pop-up, so the embed renders it
  // into its own modal wrapper. Move that node into this section instead: the
  // form keeps EmailOctopus's own listeners, validation and reCAPTCHA (which a
  // hand-built form could not satisfy), but lives on the page permanently
  // rather than appearing once per browser.
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let stop = false;
    const started = Date.now();

    const adopt = () => {
      if (stop || host.childElementCount > 0) return;

      const modal = document.querySelector<HTMLElement>(
        `[data-form="${formId}"].modal-container`,
      );
      const form = modal?.querySelector<HTMLElement>("form");
      if (form) {
        host.appendChild(form.closest(".form-container") ?? form);
        modal!.style.display = "none";
        setReady(true);
        return;
      }

      if (Date.now() - started < 12000) {
        window.setTimeout(adopt, 400);
      }
    };

    adopt();
    return () => {
      stop = true;
    };
  }, [formId]);

  return (
    <section id="subscribe" className="relative py-20 sm:py-24 lg:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[var(--gold-soft)]/30 bg-[linear-gradient(160deg,rgba(212,177,106,0.10),rgba(255,255,255,0.02))] p-7 shadow-[0_28px_90px_rgba(212,177,106,0.10)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
              <div>
                <span className="section-kicker">{t.subscribe.kicker}</span>
                <h2 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                  {t.subscribe.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
                  {t.subscribe.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {t.subscribe.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm leading-6 text-white/70"
                    >
                      <span aria-hidden className="mt-0.5 text-[var(--gold-bright)]">
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 sm:p-5">
                {/* data-form keeps EmailOctopus's own scoped CSS (field and
                    button colours, spacing) applying to the moved form */}
                <div
                  ref={hostRef}
                  data-form={formId}
                  className="eo-host min-h-[92px]"
                />
                {!ready ? (
                  <div className="flex min-h-[92px] items-center justify-center text-xs text-white/35">
                    …
                  </div>
                ) : null}
                <Script
                  id={`emailoctopus-form-${formId}`}
                  async
                  src={scriptSrc}
                  data-form={formId}
                  strategy="afterInteractive"
                />
                <p className="mt-3 text-[11px] leading-5 text-white/40">
                  🔒 {t.subscribe.privacy}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
