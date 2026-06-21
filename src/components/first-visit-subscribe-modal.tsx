"use client";

import Script from "next/script";

const defaultEmailOctopusEmbedScriptSrc =
  "https://eocampaign1.com/form/477f6b8e-6d52-11f1-bc9a-17c7d72d96de.js";
const defaultEmailOctopusEmbedFormId = "477f6b8e-6d52-11f1-bc9a-17c7d72d96de";

export function FirstVisitSubscribeModal() {
  const emailOctopusEmbedScriptSrc =
    process.env.NEXT_PUBLIC_EMAILOCTOPUS_EMBED_SCRIPT_SRC?.trim() ||
    defaultEmailOctopusEmbedScriptSrc;
  const emailOctopusEmbedFormId =
    process.env.NEXT_PUBLIC_EMAILOCTOPUS_EMBED_FORM_ID?.trim() ||
    defaultEmailOctopusEmbedFormId;

  if (!emailOctopusEmbedScriptSrc || !emailOctopusEmbedFormId) {
    return null;
  }

  return (
    <Script
      id={`emailoctopus-form-${emailOctopusEmbedFormId}`}
      async
      src={emailOctopusEmbedScriptSrc}
      data-form={emailOctopusEmbedFormId}
      strategy="afterInteractive"
    />
  );
}
