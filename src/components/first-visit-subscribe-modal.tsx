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
    console.error("Failed to parse NEXT_PUBLIC_BREVO_HIDDEN_FIELDS_JSON", error);
    return [];
  }
}

export function FirstVisitSubscribeModal() {
  const iframeName = useId().replace(/:/g, "");
  const openTimerRef = useRef<number | null>(null);
  const submitStartedRef = useRef(false);
  const fallbackTimerRef = useRef<number | null>(null);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const brevoFormAction = process.env.NEXT_PUBLIC_BREVO_FORM_ACTION?.trim() ?? "";
  const brevoEmailFieldName =
    process.env.NEXT_PUBLIC_BREVO_EMAIL_FIELD_NAME?.trim() || "EMAIL";
  const hiddenFields = useMemo(
    () => parseHiddenFields(process.env.NEXT_PUBLIC_BREVO_HIDDEN_FIELDS_JSON),
    [],
  );
  const isBrevoConfigured = Boolean(brevoFormAction);

  useEffect(() => {
    if (!isBrevoConfigured || readSavedModalState()) {
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
  }, [isBrevoConfigured]);

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

  if (!isBrevoConfigured) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader className="space-y-3">
          <span className="section-kicker mb-0 w-fit self-center sm:self-start">
            Project updates
          </span>
          <DialogTitle className="text-2xl tracking-[-0.04em] sm:text-3xl">
            Получайте обновления проекта на email
          </DialogTitle>
          <DialogDescription className="text-sm leading-7 text-white/70 sm:text-base">
            Подпишитесь один раз, чтобы узнавать о новых этапах проекта, запуске
            обновлений и будущих анонсах напрямую на почту.
          </DialogDescription>
        </DialogHeader>

        {submitState === "success" ? (
          <div className="space-y-4">
            <div className="rounded-[1.5rem] border border-emerald-400/30 bg-emerald-400/10 px-4 py-4 text-sm leading-7 text-emerald-50">
              Подписка сохранена. Теперь этот адрес можно использовать в Brevo для
              будущих рассылок и welcome-письма в следующей итерации.
            </div>
            <DialogFooter>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/92 sm:w-auto"
              >
                Продолжить
              </button>
            </DialogFooter>
          </div>
        ) : (
          <>
            <form
              action={brevoFormAction}
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
                  name={brevoEmailFieldName}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-2xl border border-white/12 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-[rgba(243,217,161,0.42)]"
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
                После настройки welcome-автоматизации в Brevo новые подписчики будут
                автоматически получать приветственное письмо.
              </p>

              {error ? <p className="text-sm text-red-300">{error}</p> : null}

              <DialogFooter>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-full rounded-2xl border border-white/12 bg-white/5 px-5 py-3 text-sm font-medium text-white/76 transition hover:bg-white/10 sm:w-auto"
                >
                  Позже
                </button>
                <button
                  type="submit"
                  disabled={submitState === "submitting"}
                  className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/92 disabled:cursor-not-allowed disabled:bg-white/70 sm:w-auto"
                >
                  {submitState === "submitting"
                    ? "Отправляем..."
                    : "Подписаться на обновления"}
                </button>
              </DialogFooter>
            </form>

            <iframe
              title="Brevo subscription target"
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
