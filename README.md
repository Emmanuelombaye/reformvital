# Reform Vital — Telehealth Weight Management

Next.js website for **Reform Vital Health LLC** — clinician-guided Semaglutide and Tirzepatide weight-management programs with licensed medical oversight, AI coaching, and compounding pharmacy delivery.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Key routes

- `/` — Homepage funnel
- `/treatments/semaglutide` · `/treatments/tirzepatide`
- `/terms` · `/privacy` · `/provider-network` — Legal pages (self-hosted)
- `/start` — Assessment intake

## Legal content

Legal copy lives in `content/legal/` and is rendered on-site. Footer legal links route to internal pages — no Google Docs links.
