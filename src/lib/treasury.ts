import type { Locale } from "@/lib/i18n";
import type { ProofDoc } from "@/components/protected-doc";

// A published proof document. Source images are watermarked, redacted, stripped
// of metadata and downscaled, then sliced into tiles under /public/proofs/<id>/.
// See scratchpad/process_proofs.py for the pipeline that generates them.
export type AssetDocument = {
  doc: ProofDoc;
  caption: Record<Locale, string>;
  meta?: string;
};

// A single asset in the public treasury.
// `photo` stays null until a photo of the bar itself is published; the UI renders
// an honest placeholder for every null, so filling it in later needs no code change.
export type TreasuryAsset = {
  id: string;
  name: Record<Locale, string>;
  kind: Record<Locale, string>;
  status: "owned" | "pending";
  serialNumber: string | null;
  purchaseDate: Record<Locale, string> | null;
  purchasePrice: string | null;
  currentValue: string | null;
  vendor: string | null;
  photo: string | null;
  documents: AssetDocument[];
};

export const TREASURY_ASSETS: TreasuryAsset[] = [
  {
    id: "gold-bar-c518680",
    name: {
      ru: "Золотой слиток PAMP Suisse, 1 кг",
      en: "PAMP Suisse gold bar, 1 kg",
    },
    kind: {
      ru: "Драгоценный металл · золото 999,9",
      en: "Precious metal · gold 999.9",
    },
    status: "owned",
    serialNumber: "C518680",
    purchaseDate: { ru: "11 июня 2026", en: "11 June 2026" },
    purchasePrice: "172 020,79 SGD",
    // Left null on purpose: the market price of gold moves, and publishing a
    // stale or invented number would undercut the point of the treasury.
    currentValue: null,
    vendor: "Silver Bullion Pte Ltd, Singapore",
    photo: null,
    documents: [
      {
        doc: { id: "certificate", cols: 4, rows: 3, width: 1440, height: 810 },
        caption: {
          ru: "Сертификат PAMP Suisse",
          en: "PAMP Suisse assay certificate",
        },
        meta: "C518680 · 1000 g · 999,9",
      },
      {
        doc: {
          id: "certificate-uv",
          cols: 4,
          rows: 3,
          width: 1440,
          height: 810,
        },
        caption: {
          ru: "Тот же сертификат в УФ-свете",
          en: "The same certificate under UV light",
        },
        meta: "UV · C518680",
      },
      {
        doc: { id: "invoice", cols: 2, rows: 8, width: 1000, height: 4065 },
        caption: {
          ru: "Документ покупки (инвойс)",
          en: "Purchase document (invoice)",
        },
        meta: "INV-2026-110584",
      },
    ],
  },
];
