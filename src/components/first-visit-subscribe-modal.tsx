"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const modalStateKey = "cryptocoin-site-subscribe-modal-state";
const defaultEmailOctopusFormAction =
  "https://eocampaign1.com/form/477f6b8e-6d52-11f1-bc9a-17c7d72d96de";
const defaultEmailOctopusEmailFieldName = "field_0";
const defaultEmailOctopusHoneypotName =
  "hpc4b27b6e-eb38-11e9-be00-06b4694bee2a";

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
  const openTimerRef = useRef<number | null>(null);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const emailOctopusFormAction =
    process.env.NEXT_PUBLIC_EMAILOCTOPUS_FORM_ACTION?.trim() ||
    defaultEmailOctopusFormAction;
  const emailOctopusEmailFieldName =
    process.env.NEXT_PUBLIC_EMAILOCTOPUS_EMAIL_FIELD_NAME?.trim() ||
    defaultEmailOctopusEmailFieldName;
  const emailOctopusHoneypotName =
    process.env.NEXT_PUBLIC_EMAILOCTOPUS_HONEYPOT_NAME?.trim() ||
    defaultEmailOctopusHoneypotName;
  const hiddenFields = useMemo(
    () =>
      parseHiddenFields(
        process.env.NEXT_PUBLIC_EMAILOCTOPUS_HIDDEN_FIELDS_JSON,
      ),
    [],
  );
  const isEmailOctopusConfigured = Boolean(emailOctopusFormAction);

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

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen && submitState !== "success") {
      saveModalState("dismissed");
    }

    setOpen(nextOpen);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    if (!isValidEmail(trimmedEmail)) {
      setError("Введите корректный email для подписки.");
      return;
    }

    setError("");
    setSubmitState("submitting");

    try {
      const formData = new FormData();
      formData.set(emailOctopusEmailFieldName, trimmedEmail);
      formData.set(emailOctopusHoneypotName, "");

      hiddenFields.forEach(([fieldName, fieldValue]) => {
        formData.set(fieldName, fieldValue);
      });

      const response = await fetch(emailOctopusFormAction, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: formData,
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: { code?: string };
      };

      if (result.success) {
        saveModalState("subscribed");
        setSubmitState("success");
        setEmail("");
        return;
      }

      setSubmitState("idle");
      setError("Подписка не прошла. Проверьте email и попробуйте снова.");
    } catch (submitError) {
      console.error("EmailOctopus subscribe failed", submitError);
      setSubmitState("idle");
      setError("Не удалось отправить форму. Попробуйте ещё раз.");
    }
  };

  if (!isEmailOctopusConfigured) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-[calc(100%-2rem)] border-white/10 bg-[rgba(10,14,24,0.98)] p-6 text-white sm:max-w-[400px]">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl tracking-[-0.04em] text-white">
            Подписка на обновления
          </DialogTitle>
          <DialogDescription className="text-sm leading-7 text-white/70">
            Оставьте email, чтобы получать новости проекта и будущие анонсы.
          </DialogDescription>
        </DialogHeader>

        {submitState === "success" ? (
          <div className="space-y-4">
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-4 text-sm leading-7 text-emerald-50">
              Спасибо. Подписка оформлена успешно.
            </div>
            <DialogFooter>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/92 sm:w-auto"
              >
                Закрыть
              </button>
            </DialogFooter>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block space-y-2">
              <span className="text-sm font-medium text-white/82">Email</span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-white/12 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-[rgba(243,217,161,0.42)]"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </label>

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
                  : "Подписаться"}
              </button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
