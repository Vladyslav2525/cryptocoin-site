"use client";

import { useEffect, useRef } from "react";

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
  const scriptHostRef = useRef<HTMLDivElement | null>(null);

  const emailOctopusEmbedScriptSrc =
    process.env.NEXT_PUBLIC_EMAILOCTOPUS_EMBED_SCRIPT_SRC?.trim() ||
    defaultEmailOctopusEmbedScriptSrc;
  const emailOctopusEmbedFormId =
    process.env.NEXT_PUBLIC_EMAILOCTOPUS_EMBED_FORM_ID?.trim() ||
    defaultEmailOctopusEmbedFormId;

  useEffect(() => {
    if (!scriptHostRef.current || hasSubscribed()) {
      return;
    }

    const scriptHost = scriptHostRef.current;
    if (scriptHost.querySelector(`script[data-form="${emailOctopusEmbedFormId}"]`)) {
      return;
    }

    const successObserver = new MutationObserver(() => {
      const successMessage = document.querySelector(
        `[data-form="${emailOctopusEmbedFormId}"] .emailoctopus-success-message`,
      );

      if (
        successMessage instanceof HTMLElement &&
        (successMessage.textContent ?? "").trim().length > 0
      ) {
        markSubscribed();
      }
    });

    successObserver.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = emailOctopusEmbedScriptSrc;
    script.dataset.form = emailOctopusEmbedFormId;
    scriptHost.appendChild(script);

    return () => {
      successObserver.disconnect();
    };
  }, [emailOctopusEmbedFormId, emailOctopusEmbedScriptSrc]);

  return <div ref={scriptHostRef} className="hidden" aria-hidden="true" />;
}
