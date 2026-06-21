# CryptoCoin Site

Premium static landing page for the CryptoCoin concept:

- animated Three.js dotted background,
- rotating typewriter hero copy,
- large adaptive YouTube live stream area,
- philosophy section,
- animated closed-loop growth model,
- temporary password gate for restricted public preview,
- GitHub Pages deployment via Actions.

## Local preview

```bash
npm install
npm run build
npx serve out -l 3000
```

Preview password: `goldbridge2026`

## Environment

Copy `.env.example` if you want to override defaults:

- `NEXT_PUBLIC_YOUTUBE_EMBED_URL`
- `NEXT_PUBLIC_SITE_PASSWORD_HASH`
- `NEXT_PUBLIC_BASE_PATH`
- `NEXT_PUBLIC_EMAILOCTOPUS_EMBED_SCRIPT_SRC`
- `NEXT_PUBLIC_EMAILOCTOPUS_EMBED_FORM_ID`
- `NEXT_PUBLIC_EMAILOCTOPUS_FORM_ACTION`
- `NEXT_PUBLIC_EMAILOCTOPUS_EMAIL_FIELD_NAME`
- `NEXT_PUBLIC_EMAILOCTOPUS_HIDDEN_FIELDS_JSON`

## First-visit subscription modal

The site can show an EmailOctopus-powered subscription modal on the first visit
after the password gate is passed.

Because this project is exported as a static site for GitHub Pages, the
EmailOctopus integration now uses a **static-safe direct form POST**:

1. Open the EmailOctopus embed script or hosted form config.
2. Use the direct form action URL, email field name and honeypot field name.
3. If the form includes extra hidden fields, copy them into JSON.
4. Set the matching environment variables before building:

```bash
NEXT_PUBLIC_EMAILOCTOPUS_FORM_ACTION="https://eocampaign1.com/form/your-form-id"
NEXT_PUBLIC_EMAILOCTOPUS_EMAIL_FIELD_NAME="field_0"
NEXT_PUBLIC_EMAILOCTOPUS_HONEYPOT_NAME="hpxxxxxxxx"
NEXT_PUBLIC_EMAILOCTOPUS_HIDDEN_FIELDS_JSON='{}'
```

Notes:

- The modal appears only once per browser via `localStorage`.
- Email addresses are sent directly to EmailOctopus, so no private API key is
  exposed in the static frontend.
- Do **not** place a private EmailOctopus API key into `NEXT_PUBLIC_*`
  variables or commit it into the repository.
- Welcome email automation can be added later inside EmailOctopus after the
  signup form and list are connected.

## Deployment

Push to `main` to trigger the GitHub Pages workflow in `.github/workflows/deploy-pages.yml`.
