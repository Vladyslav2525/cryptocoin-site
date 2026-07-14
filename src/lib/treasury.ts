import type { Locale } from "@/lib/i18n";

// A single asset in the public treasury.
// Media (`photo`, `certificate`, `purchaseDoc`) and document-derived values
// (`serialNumber`, `purchaseDate`, `purchasePrice`, `currentValue`) are `null`
// until the real scans are published. The UI renders honest placeholders for
// every `null`, so filling these in later requires no code changes — just drop
// images into /public and set the strings here.
export type TreasuryAsset = {
  id: string;
  name: Record<Locale, string>;
  kind: Record<Locale, string>;
  status: "owned" | "pending";
  serialNumber: string | null;
  purchaseDate: string | null;
  purchasePrice: string | null;
  currentValue: string | null;
  photo: string | null;
  certificate: string | null;
  purchaseDoc: string | null;
};

export const TREASURY_ASSETS: TreasuryAsset[] = [
  {
    id: "gold-bar-001",
    name: { ru: "Золотой слиток", en: "Gold bar" },
    kind: { ru: "Драгоценный металл · золото", en: "Precious metal · gold" },
    status: "owned",
    serialNumber: null,
    purchaseDate: null,
    purchasePrice: null,
    currentValue: null,
    photo: null,
    certificate: null,
    purchaseDoc: null,
  },
];
