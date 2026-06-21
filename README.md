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
EmailOctopus integration must use a **static-safe hosted form flow** or the
official embed script:

1. Create an EmailOctopus hosted or embedded signup form.
2. If you use the official embed script, copy the script `src` and `data-form`
   values.
3. If you use the raw hosted form HTML instead, copy the form `action` URL and
   hidden fields.
4. Set the matching environment variables before building:

```bash
NEXT_PUBLIC_EMAILOCTOPUS_EMBED_SCRIPT_SRC="https://eocampaign1.com/form/your-form-id.js"
NEXT_PUBLIC_EMAILOCTOPUS_EMBED_FORM_ID="your-form-id"
NEXT_PUBLIC_EMAILOCTOPUS_FORM_ACTION="https://emailoctopus.com/lists/.../forms/embedded/..."
NEXT_PUBLIC_EMAILOCTOPUS_EMAIL_FIELD_NAME="email"
NEXT_PUBLIC_EMAILOCTOPUS_HIDDEN_FIELDS_JSON='{"list":"your-list-id"}'
```

Notes:

- The modal appears only once per browser via `localStorage`.
- The project currently includes a working fallback to the provided
  EmailOctopus embed script for immediate testing.
- Email addresses are sent directly to EmailOctopus, so no private API key is
  exposed in the static frontend.
- Do **not** place a private EmailOctopus API key into `NEXT_PUBLIC_*`
  variables or commit it into the repository.
- Welcome email automation can be added later inside EmailOctopus after the
  signup form and list are connected.

## Deployment

Push to `main` to trigger the GitHub Pages workflow in `.github/workflows/deploy-pages.yml`.
