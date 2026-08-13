"use client";

import Link from "next/link";
import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { DocLightbox, ProtectedDoc } from "@/components/protected-doc";
import { TREASURY_ASSETS, type AssetDocument } from "@/lib/treasury";
import { useLocale, useTranslations } from "@/lib/language-context";

export default function TreasuryPage() {
  const t = useTranslations();
  const { locale } = useLocale();
  const tp = t.treasuryPage;
  const [openDoc, setOpenDoc] = useState<AssetDocument | null>(null);

  const statusColumns = [
    {
      ...tp.status.now,
      accent: "text-emerald-300",
      border: "border-emerald-400/25",
      bg: "bg-emerald-400/[0.05]",
      mark: "✓",
    },
    {
      ...tp.status.notYet,
      accent: "text-amber-300",
      border: "border-amber-400/25",
      bg: "bg-amber-400/[0.05]",
      mark: "○",
    },
    {
      ...tp.status.next,
      accent: "text-sky-300",
      border: "border-sky-400/25",
      bg: "bg-sky-400/[0.05]",
      mark: "→",
    },
  ];

  return (
    <PageShell>
      <section className="section-shell pb-10 pt-14 sm:pt-20">
        <div className="mx-auto max-w-5xl">
          <span className="section-kicker">{tp.kicker}</span>
          <h1 className="headline-gradient mt-2 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            {tp.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
            {tp.description}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.7)]" />
            {tp.liveLabel}
          </div>
        </div>
      </section>

      <section className="section-shell py-8">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {statusColumns.map((col, index) => (
            <Reveal key={col.title} delay={index * 90} className="h-full">
              <div
                className={`h-full rounded-3xl border ${col.border} ${col.bg} p-6`}
              >
                <h3 className={`mb-4 text-base font-semibold ${col.accent}`}>
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-6 text-white/76"
                    >
                      <span aria-hidden className={`mt-0.5 ${col.accent}`}>
                        {col.mark}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            {tp.assetsTitle}
          </h2>

          <div className="space-y-8">
            {TREASURY_ASSETS.map((asset, index) => {
              const fields = [
                { label: tp.fields.serial, value: asset.serialNumber, mono: true },
                {
                  label: tp.fields.purchaseDate,
                  value: asset.purchaseDate?.[locale] ?? null,
                },
                {
                  label: tp.fields.purchasePrice,
                  value: asset.purchasePrice?.[locale] ?? null,
                },
                {
                  label: tp.fields.currentValue,
                  value: asset.currentValue,
                  note: tp.fields.currentValueNote,
                },
                { label: tp.fields.vendor, value: asset.vendor },
              ];

              const [certificate, certificateUv, invoice] = asset.documents;

              return (
                <Reveal key={asset.id} delay={index * 80}>
                  <article className="grid-card space-y-8">
                    <div className="grid gap-6 lg:grid-cols-[minmax(0,300px)_1fr]">
                      {asset.photoDoc ? (
                        <ProtectedDoc
                          doc={asset.photoDoc.doc}
                          caption={asset.photoDoc.caption[locale]}
                          meta={asset.photoDoc.meta}
                          zoomLabel={tp.zoom}
                          onOpen={() => setOpenDoc(asset.photoDoc!)}
                          className="mx-auto w-full max-w-[260px] lg:mx-0 lg:max-w-none"
                        />
                      ) : (
                        <div className="shimmer relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                          <div className="flex h-full items-center justify-center px-4 text-center text-xs text-white/40">
                            {tp.photoPlaceholder}
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col gap-5">
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                            {asset.name[locale]}
                          </h3>
                          <span className="rounded-full border border-[var(--gold-soft)]/40 bg-[var(--gold-soft)]/[0.08] px-3 py-1 text-xs text-[var(--gold-bright)]">
                            {asset.status === "owned"
                              ? tp.statusValues.owned
                              : tp.statusValues.pending}
                          </span>
                        </div>
                        <p className="-mt-1 text-sm text-white/60">
                          {asset.kind[locale]}
                        </p>

                        <dl className="grid grid-cols-2 gap-x-5 gap-y-4">
                          {fields.map((field) => (
                            <div key={field.label}>
                              <dt className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                                {field.label}
                              </dt>
                              <dd
                                className={`mt-1 text-sm ${
                                  field.value ? "text-white/85" : "text-white/35"
                                } ${field.mono ? "font-mono" : ""}`}
                              >
                                {field.value ?? "—"}
                              </dd>
                              {field.note ? (
                                <dd className="mt-0.5 text-[11px] text-white/35">
                                  {field.note}
                                </dd>
                              ) : null}
                            </div>
                          ))}
                        </dl>
                      </div>
                    </div>

                    <div className="border-t border-white/8 pt-8">
                      <h4 className="text-lg font-semibold tracking-[-0.02em] text-white">
                        {tp.proofsTitle}
                      </h4>
                      <p className="mt-2 max-w-3xl text-sm leading-6 text-white/62">
                        {tp.proofsIntro}
                      </p>

                      {/* two 16:9 certificates stacked on the left, the tall
                          invoice running alongside them on the right */}
                      <div className="mt-6 grid gap-5 lg:grid-cols-[3.4fr_1fr]">
                        <div className="flex flex-col gap-5">
                          {[certificate, certificateUv].map((entry) =>
                            entry ? (
                              <ProtectedDoc
                                key={entry.doc.id}
                                doc={entry.doc}
                                caption={entry.caption[locale]}
                                meta={entry.meta}
                                zoomLabel={tp.zoom}
                                onOpen={() => setOpenDoc(entry)}
                              />
                            ) : null,
                          )}
                        </div>

                        {invoice ? (
                          <ProtectedDoc
                            doc={invoice.doc}
                            caption={invoice.caption[locale]}
                            meta={invoice.meta}
                            zoomLabel={tp.zoom}
                            onOpen={() => setOpenDoc(invoice)}
                            className="mx-auto w-full max-w-[220px] lg:mx-0 lg:max-w-none"
                          />
                        ) : null}
                      </div>

                      <div className="mt-6 space-y-2">
                        <p className="text-[11px] leading-5 text-white/45">
                          🔒 {tp.redactedNote}
                        </p>
                        <p className="text-[11px] leading-5 text-white/45">
                          🛡️ {tp.protectedNote}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="text-sm text-white/60 transition hover:text-white"
            >
              ← {tp.backHome}
            </Link>
          </div>
        </div>
      </section>

      <DocLightbox
        doc={openDoc?.doc ?? null}
        caption={openDoc?.caption[locale] ?? ""}
        meta={openDoc?.meta}
        closeLabel={tp.close}
        onClose={() => setOpenDoc(null)}
      />
    </PageShell>
  );
}
