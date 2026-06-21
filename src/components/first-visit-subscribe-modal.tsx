"use client";

import { useEffect, useRef, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const modalStateKey = "cryptocoin-site-subscribe-modal-state";
const defaultEmailOctopusEmbedScriptSrc =
  "https://eocampaign1.com/form/477f6b8e-6d52-11f1-bc9a-17c7d72d96de.js";
const defaultEmailOctopusEmbedFormId = "477f6b8e-6d52-11f1-bc9a-17c7d72d96de";

function hasSubscribed() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem(modalStateKey) === "subscribed";
}

function markSubscribed() {
  window.localStorage.setItem(modalStateKey, "subscribed");
}

export function FirstVisitSubscribeModal() {
  const preloadHostRef = useRef<HTMLDivElement | null>(null);
  const visibleHostRef = useRef<HTMLDivElement | null>(null);
  const mountedFormRef = useRef<HTMLDivElement | null>(null);
  const openTimerRef = useRef<number | null>(null);
  const [open, setOpen] = useState(false);
  const [formReady, setFormReady] = useState(false);

  const emailOctopusEmbedScriptSrc =
    process.env.NEXT_PUBLIC_EMAILOCTOPUS_EMBED_SCRIPT_SRC?.trim() ||
    defaultEmailOctopusEmbedScriptSrc;
  const emailOctopusEmbedFormId =
    process.env.NEXT_PUBLIC_EMAILOCTOPUS_EMBED_FORM_ID?.trim() ||
    defaultEmailOctopusEmbedFormId;
  const isEmailOctopusConfigured = Boolean(
    emailOctopusEmbedScriptSrc && emailOctopusEmbedFormId,
  );

  useEffect(() => {
    if (!isEmailOctopusConfigured || hasSubscribed()) {
      return;
    }

    openTimerRef.current = window.setTimeout(() => {
      setOpen(true);
    }, 0);

    return () => {
      if (openTimerRef.current !== null) {
        window.clearTimeout(openTimerRef.current);
      }
    };
  }, [isEmailOctopusConfigured]);

  useEffect(() => {
    if (!isEmailOctopusConfigured || !preloadHostRef.current) {
      return;
    }

    const preloadHost = preloadHostRef.current;
    const findPreparedForm = () => {
      const preparedForm = preloadHost.querySelector(
        `[data-form="${emailOctopusEmbedFormId}"] .eo-form-wrapper`,
      );

      if (preparedForm instanceof HTMLDivElement) {
        mountedFormRef.current = preparedForm;
        setFormReady(true);

        const successMessage = preparedForm.querySelector(
          ".emailoctopus-success-message",
        );

        if (successMessage instanceof HTMLElement) {
          const successObserver = new MutationObserver(() => {
            if ((successMessage.textContent ?? "").trim().length > 0) {
              markSubscribed();
            }
          });

          successObserver.observe(successMessage, {
            childList: true,
            subtree: true,
            characterData: true,
          });

          return () => successObserver.disconnect();
        }
      }

      return undefined;
    };

    const cleanupPreparedForm = findPreparedForm();
    if (cleanupPreparedForm) {
      return cleanupPreparedForm;
    }

    const observer = new MutationObserver(() => {
      const cleanup = findPreparedForm();
      if (cleanup) {
        observer.disconnect();
      }
    });

    observer.observe(preloadHost, { childList: true, subtree: true });

    if (!preloadHost.querySelector(`script[data-form="${emailOctopusEmbedFormId}"]`)) {
      const script = document.createElement("script");
      script.async = true;
      script.src = emailOctopusEmbedScriptSrc;
      script.dataset.form = emailOctopusEmbedFormId;
      preloadHost.appendChild(script);
    }

    return () => {
      observer.disconnect();
    };
  }, [
    emailOctopusEmbedFormId,
    emailOctopusEmbedScriptSrc,
    isEmailOctopusConfigured,
  ]);

  useEffect(() => {
    const preparedForm = mountedFormRef.current;
    const visibleHost = visibleHostRef.current;
    const preloadHost = preloadHostRef.current;

    if (!open || !preparedForm || !visibleHost || !preloadHost) {
      return;
    }

    visibleHost.appendChild(preparedForm);

    return () => {
      preloadHost.appendChild(preparedForm);
    };
  }, [formReady, open]);

  if (!isEmailOctopusConfigured) {
    return null;
  }

  return (
    <>
      <div ref={preloadHostRef} className="hidden" aria-hidden="true" />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[calc(100%-2rem)] border-white/10 bg-[rgba(10,14,24,0.98)] p-6 text-white sm:max-w-[400px]">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-2xl tracking-[-0.04em] text-white">
              Подписка на обновления
            </DialogTitle>
            <DialogDescription className="text-sm leading-7 text-white/70">
              Оставьте email, чтобы получать новости проекта и будущие анонсы.
            </DialogDescription>
          </DialogHeader>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            {!formReady ? (
              <div className="flex min-h-[120px] items-center justify-center">
                <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-white/70" />
              </div>
            ) : null}
            <div ref={visibleHostRef} className={formReady ? "" : "hidden"} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
