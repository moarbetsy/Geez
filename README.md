<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This project is a Vite + React dashboard generated from the Google AI Studio starter. It now includes a Supabase-backed "Community Messages" page and is ready to publish on GitHub Pages.

View your app in AI Studio: https://ai.studio/apps/drive/14sjHxmSf8e6r10ODiBHmreB_jlcedxWB

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values before running locally:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
| --- | --- |
| `GEMINI_API_KEY` | Optional. Only needed when calling Gemini locally. Never commit this value. |
| `VITE_SUPABASE_URL` | Your Supabase project URL (e.g. `https://xyzcompany.supabase.co`). |
| `VITE_SUPABASE_ANON_KEY` | The Supabase anon public key. Safe for browser use when RLS policies are in place. |

## Supabase setup

1. Create (or reuse) a Supabase project and note the project URL + anon key (Settings → API).
2. In the SQL editor, create the `messages` table and policies:

```sql
create table if not exists public.messages (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  content text not null check (char_length(content) between 1 and 500),
  user_id uuid
);

alter table public.messages enable row level security;

-- Option A: public guestbook
create policy "Public read messages" on public.messages for select to anon using (true);
create policy "Public add messages" on public.messages for insert to anon with check (true);
```

> ⚠️ Only use the anon key in the browser. Keep the service-role key private.

3. Create a `dashboard_state` table that stores the shared dataset seen by every visitor:

```sql
create table if not exists public.dashboard_state (
  id text primary key,
  payload jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.dashboard_state enable row level security;

create policy "Dashboard read" on public.dashboard_state
  for select to anon using (id = 'main');

create policy "Dashboard insert" on public.dashboard_state
  for insert to anon with check (id = 'main');

create policy "Dashboard update" on public.dashboard_state
  for update to anon using (id = 'main') with check (id = 'main');
```

> The app uses a single row with `id = 'main'` to persist the latest clients, products, orders, expenses, and logs. Make sure the table exists before deploying so that everyone shares the same data.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000 and sign in. The "Community Messages" page reads/writes to Supabase once the environment variables are provided. Run `npm run build` to verify the production build.

## Deploy to GitHub Pages

1. Push the repository to GitHub under `moarbetsy/Geez` (or your fork).
2. In repository settings add two GitHub Actions secrets:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Ensure **Settings → Pages → Build and deployment** is set to "GitHub Actions".
4. On the next push to `main`, the workflow at `.github/workflows/pages.yml` builds the site and deploys to `https://<username>.github.io/Geez/`.

For single-page routing support on GitHub Pages, the workflow copies `index.html` to `404.html` during deployment.

## Security checklist

- Rotate any OAuth secrets that were shared publicly.
- Keep Row Level Security enabled on every table exposed to the client.
- Do not ship `GEMINI_API_KEY` or Supabase service keys to the browser—use server-side storage for secrets.
