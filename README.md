# $100 Job Post

A responsive full-stack-ready MVP for fixed-price, small blue-collar jobs. The demo includes job posting, browsing and filters, job details, claiming, role-based dashboards, status progression, worker profiles, reviews, messaging/payment placeholders, authentication UI, and basic admin moderation.

## Run locally

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production check:

```bash
npm run build
npm start
```

## Routes

- `/` — homepage
- `/post` — post a fixed-price job
- `/jobs` and `/jobs/[id]` — browse and view jobs
- `/dashboard` — worker/customer job management
- `/profile` — worker profile and skills
- `/login` — authentication placeholder
- `/admin` — moderation view

## MVP architecture

This version intentionally uses seeded demo data plus `localStorage`, making it usable without credentials. State persists in the current browser. The status lifecycle is Posted → Claimed → In Progress → Completed → Reviewed.

For production, replace the store in `components/AppProvider.tsx` with Supabase Postgres and Storage, connect Supabase Auth or Clerk at `/login`, create a Stripe PaymentIntent for exactly 10,000 cents when a worker claims a job, and release funds after customer approval. Use Stripe Connect for worker payouts. Add row-level security so customers can edit only their listings and workers can update only jobs they claimed.

## Suggested data tables

`profiles`, `jobs`, `job_photos`, `claims`, `messages`, `payments`, and `reviews`. Store money as integer cents and constrain each job price to `10000` at the database level.

## Deploy

Push to a Git provider and import into Vercel. No environment variables are needed for the demo. Add service credentials only when connecting production integrations.
