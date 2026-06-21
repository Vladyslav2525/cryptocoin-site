"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const modalStateKey = "cryptocoin-site-subscribe-modal-state";
const defaultEmailOctopusEmbedScriptSrc =
  "https://eocampaign1.com/form/477f6b8e-6d52-11f1-bc9a-17c7d72d96de.js";
const defaultEmailOctopusEmbedFormId = "477f6b8e-6d52-11f1-bc9a-17c7d72d96de";

type ModalState = "dismissed" | "subscribed";

function readSavedModalState() {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(modalStateKey);
  return value === "dismissed" || value === "subscribed" ? value : null;
}

function saveModalState(value: ModalState) {
  window.localStorage.setItem(modalStateKey, value);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parseHiddenFields(rawValue: string | undefined) {
  if (!rawValue) {
    return [];
  }

  try {
    const parsedValue = JSON.parse(rawValue) as Record<string, string>;
    return Object.entries(parsedValue).filter(
      (entry): entry is [string, string] =>
        typeof entry[0] === "string" && typeof entry[1] === "string",
    );
  } catch (error) {
    console.error(
      "Failed to parse NEXT_PUBLIC_EMAILOCTOPUS_HIDDEN_FIELDS_JSON",
      error,
    );
    return [];
  }
}

export function FirstVisitSubscribeModal() {
  const iframeName = useId().replace(/:/g, "");
  const embedContainerRef = useRef<HTMLDivElement | null>(null);
  const openTimerRef = useRef<number | null>(null);
  const submitStartedRef = useRef(false);
  const fallbackTimerRef = useRef<number | null>(null);
  const [open, setOpen] = useState(false);
  const [embedLoaded, setEmbedLoaded] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const emailOctopusEmbedScriptSrc =
    process.env.NEXT_PUBLIC_EMAILOCTOPUS_EMBED_SCRIPT_SRC?.trim() ||
    defaultEmailOctopusEmbedScriptSrc;
  const emailOctopusEmbedFormId =
    process.env.NEXT_PUBLIC_EMAILOCTOPUS_EMBED_FORM_ID?.trim() ||
    defaultEmailOctopusEmbedFormId;
  const emailOctopusFormAction =
    process.env.NEXT_PUBLIC_EMAILOCTOPUS_FORM_ACTION?.trim() ?? "";
  const emailOctopusEmailFieldName =
    process.env.NEXT_PUBLIC_EMAILOCTOPUS_EMAIL_FIELD_NAME?.trim() || "email";
  const hiddenFields = useMemo(
    () =>
      parseHiddenFields(
        process.env.NEXT_PUBLIC_EMAILOCTOPUS_HIDDEN_FIELDS_JSON,
      ),
    [],
  );
  const isEmailOctopusEmbedConfigured = Boolean(
    emailOctopusEmbedScriptSrc && emailOctopusEmbedFormId,
  );
  const isEmailOctopusHostedFormConfigured = Boolean(emailOctopusFormAction);
  const isEmailOctopusConfigured =
    isEmailOctopusEmbedConfigured || isEmailOctopusHostedFormConfigured;

  useEffect(() => {
    if (!isEmailOctopusConfigured || readSavedModalState()) {
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
    if (!open || !isEmailOctopusEmbedConfigured || !embedContainerRef.current) {
      return;
    }

    const container = embedContainerRef.current;
    const markReady = () => {
      if ((container.textContent ?? "").trim().length > 0 || container.childElementCount > 1) {
        setEmbedLoaded(true);
      }
    };

    const observer = new MutationObserver(markReady);
    observer.observe(container, { childList: true, subtree: true });

    if (container.childElementCount === 0) {
      const script = document.createElement("script");
      script.async = true;
      script.src = emailOctopusEmbedScriptSrc;
      script.dataset.form = emailOctopusEmbedFormId;
      script.onload = () => {
        window.setTimeout(markReady, 200);
      };
      container.appendChild(script);
    } else {
      markReady();
    }

    return () => {
      observer.disconnect();
    };
  }, [
    emailOctopusEmbedFormId,
    emailOctopusEmbedScriptSrc,
    isEmailOctopusEmbedConfigured,
    open,
  ]);

  useEffect(() => {
    return () => {
      if (fallbackTimerRef.current !== null) {
        window.clearTimeout(fallbackTimerRef.current);
      }
    };
  }, []);

  const markSubscribed = () => {
    if (!submitStartedRef.current) {
      return;
    }

    submitStartedRef.current = false;
    saveModalState("subscribed");
    setSubmitState("success");
    setError("");
  };

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen && submitState !== "success") {
      saveModalState("dismissed");
    }

    setOpen(nextOpen);
  };

  const handleSubmit = () => {
    if (!isValidEmail(email.trim())) {
      setError("Введите корректный email для подписки.");
      return false;
    }

    setError("");
    setSubmitState("submitting");
    submitStartedRef.current = true;

    if (fallbackTimerRef.current !== null) {
      window.clearTimeout(fallbackTimerRef.current);
    }

    fallbackTimerRef.current = window.setTimeout(() => {
      markSubscribed();
    }, 1600);

    return true;
  };

  if (!isEmailOctopusConfigured) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-[calc(100%-2rem)] border-white/10 bg-[rgba(10,14,24,0.97)] text-white sm:max-w-[400px]">
        <DialogHeader className="space-y-3">
          <span className="section-kicker mb-0 w-fit self-center sm:self-start">
            Project updates
          </span>
          <DialogTitle className="text-2xl tracking-[-0.04em] text-white sm:text-3xl">
            Получайте обновления проекта
          </DialogTitle>
          <DialogDescription className="text-sm leading-7 text-white/70 sm:text-base">
            Подпишитесь, чтобы первыми получать новости проекта, обновления и
            будущие анонсы на email.
          </DialogDescription>
        </DialogHeader>

        {submitState === "success" ? (
          <div className="space-y-4">
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-4 text-sm leading-7 text-emerald-50">
              Подписка сохранена. Этот адрес теперь будет доступен в EmailOctopus
              для дальнейших рассылок и welcome-письма.
            </div>
            <DialogFooter>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/92 sm:w-auto"
              >
                Продолжить
              </button>
            </DialogFooter>
          </div>
        ) : isEmailOctopusEmbedConfigured ? (
          <div className="space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-sm leading-7 text-white/68">
              Ниже загружается встроенная форма EmailOctopus с полем для ввода
              email и отправкой подписки.
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              {!embedLoaded ? (
                <div className="pb-3 text-sm text-white/58">
                  Загружаем форму подписки...
                </div>
              ) : null}
              <div ref={embedContainerRef} className="min-h-[120px]" />
            </div>
            <DialogFooter>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-full rounded-xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-medium text-white/76 transition hover:bg-white/10 sm:w-auto"
              >
                Закрыть
              </button>
            </DialogFooter>
          </div>
        ) : (
          <>
            <form
              action={emailOctopusFormAction}
              method="POST"
              target={iframeName}
              className="space-y-4"
              onSubmit={(event) => {
                if (!handleSubmit()) {
                  event.preventDefault();
                }
              }}
            >
              <label className="block space-y-2">
                <span className="text-sm font-medium text-white/82">Email</span>
                <input
                  type="email"
                  name={emailOctopusEmailFieldName}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-xl border border-white/12 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-[rgba(243,217,161,0.42)]"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </label>

              {hiddenFields.map(([fieldName, fieldValue]) => (
                <input
                  key={fieldName}
                  type="hidden"
                  name={fieldName}
                  value={fieldValue}
                />
              ))}

              <p className="text-xs leading-6 text-white/45">
                После настройки welcome-автоматизации в EmailOctopus новые
                подписчики будут автоматически получать приветственное письмо.
              </p>

              {error ? <p className="text-sm text-red-300">{error}</p> : null}

              <DialogFooter>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-full rounded-xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-medium text-white/76 transition hover:bg-white/10 sm:w-auto"
                >
                  Позже
                </button>
                <button
                  type="submit"
                  disabled={submitState === "submitting"}
                  className="w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/92 disabled:cursor-not-allowed disabled:bg-white/70 sm:w-auto"
                >
                  {submitState === "submitting"
                    ? "Отправляем..."
                    : "Подписаться на обновления"}
                </button>
              </DialogFooter>
            </form>

            <iframe
              title="EmailOctopus subscription target"
              name={iframeName}
              className="hidden"
              onLoad={markSubscribed}
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
