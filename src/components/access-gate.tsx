"use client";

import type { FormEvent, ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";

type AccessGateProps = {
  children: ReactNode;
};

const defaultHash =
  "c884b65443bc6255b50a1582a45480f86b393a80d0b01660ba83734eb3bca45b";
const passwordSalt = "cryptocoin-site";
const storageKey = "cryptocoin-site-access-granted";
const accessEventName = "cryptocoin-site-access-change";

async function hashValue(value: string) {
  const encoded = new TextEncoder().encode(value);
  const digest = await window.crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(digest))
    .map((entry) => entry.toString(16).padStart(2, "0"))
    .join("");
}

export function AccessGate({ children }: AccessGateProps) {
  const expectedHash = useMemo(
    () => process.env.NEXT_PUBLIC_SITE_PASSWORD_HASH ?? defaultHash,
    [],
  );
  const [persistedAccess, setPersistedAccess] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.localStorage.getItem(storageKey) === "true";
  });
  const [sessionUnlocked, setSessionUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const unlocked = sessionUnlocked || persistedAccess === true;

  useEffect(() => {
    const syncAccessState = () => {
      setPersistedAccess(window.localStorage.getItem(storageKey) === "true");
    };

    syncAccessState();

    const handleStorage = (event: StorageEvent) => {
      if (event.key === storageKey) {
        syncAccessState();
      }
    };

    const handleAccessEvent = () => {
      syncAccessState();
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener(accessEventName, handleAccessEvent);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(accessEventName, handleAccessEvent);
    };
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const candidateHash = await hashValue(`${passwordSalt}::${password.trim()}`);
    if (candidateHash !== expectedHash) {
      setError("Неверный пароль доступа. Проверь ключ и попробуй снова.");
      return;
    }

    window.localStorage.setItem(storageKey, "true");
    window.dispatchEvent(new Event(accessEventName));
    setSessionUnlocked(true);
    setPassword("");
  };

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,177,106,0.18),transparent_34%),linear-gradient(180deg,rgba(5,6,10,0.86),rgba(4,5,11,1))]" />
      <div className="section-shell relative flex min-h-screen items-center justify-center py-12">
        <div className="glass-panel w-full max-w-xl rounded-[2rem] p-6 sm:p-8">
          <span className="section-kicker">Restricted preview</span>
          <div className="space-y-5">
            <h1 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Сайт находится в закрытом доступе
            </h1>
            <p className="text-sm leading-7 text-white/70 sm:text-base">
              Сейчас проект открыт только через простую парольную заглушку. Это
              первая временная защита для публичного preview на статическом
              хостинге.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <label className="block space-y-2">
                <span className="text-sm font-medium text-white/80">
                  Пароль доступа
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-2xl border border-white/12 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-[rgba(243,217,161,0.42)]"
                  placeholder="Введите ключ доступа"
                  autoComplete="current-password"
                />
              </label>
              {error ? (
                <p className="text-sm text-red-300">{error}</p>
              ) : (
                <p className="text-xs leading-6 text-white/45">
                  Для первого релиза эту заглушку можно позже заменить на более
                  строгую систему доступа или убрать при открытом запуске.
                </p>
              )}
              <button
                type="submit"
                className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/92"
              >
                Открыть preview
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
