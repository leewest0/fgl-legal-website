# FGL LEGAL (Adullam Chambers) — Website

Marketing website for **FGL LEGAL (Adullam Chambers)**, a new-generation law
firm based in Kaneshie, Accra, Ghana. Built with **Next.js (App Router)**,
**TypeScript**, and **Tailwind CSS v4**.

The design is intentionally editorial — warm-paper background, deep forest
green, muted gold accents, a Fraunces/Inter type pairing, and the firm's `{ }`
brace mark used as a recurring motif.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (tokens in `app/globals.css`)
- **next/font** — Fraunces (display) + Inter (body), self-hosted
- **lucide-react** — icons
- **Resend** — contact-form email (optional; see below)

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build   # production build (what Vercel runs)
npm run lint    # eslint
```

## Project structure

```
app/
  layout.tsx            fonts, metadata, Header/Footer
  page.tsx              Home
  about/page.tsx        About · Vision/Mission · Values · Differentiators
  practice-areas/page.tsx   All 8 practice areas
  team/page.tsx         Partner bios
  contact/page.tsx      Contact details, form, map, FAQ
  api/contact/route.ts  Contact form handler (Resend)
  globals.css           Design tokens & utilities
components/             Header, Footer, Logo, PageHero, ui (Button/Section/…),
                        ContactForm, FAQAccordion
lib/content.ts          All site copy in one place
public/                 favicon + logo fallback
```

All copy lives in **`lib/content.ts`** — edit there to update text across the
site.

## Contact form & email (Resend)

The form posts to `app/api/contact/route.ts`.

- **Without `RESEND_API_KEY`** the endpoint still returns success and logs the
  submission to the server console — so the build and deploy never break.
- **With a key**, it emails the submission to `CONTACT_TO`.

Setup:

1. Create a free account at <https://resend.com> and copy an API key.
2. Copy `.env.example` → `.env.local` and set `RESEND_API_KEY`.
3. (Production) Verify your domain in Resend and set `CONTACT_FROM` to an
   address on it, e.g. `FGL LEGAL <no-reply@fgllegalgh.com>`.

| Variable          | Purpose                     | Default                 |
| ----------------- | --------------------------- | ----------------------- |
| `RESEND_API_KEY`  | Enables email delivery      | _(unset → logs only)_   |
| `CONTACT_TO`      | Recipient inbox             | `info@fgllegalgh.com`   |
| `CONTACT_FROM`    | Verified sender             | `onboarding@resend.dev` |

### Prefer zero backend?

Swap the `fetch("/api/contact")` call in `components/ContactForm.tsx` for a
[Formspree](https://formspree.io) form endpoint (`https://formspree.io/f/…`)
and delete `app/api/contact/route.ts`. No environment variables needed.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com), **Add New → Project** and import the repo.
   Framework preset (Next.js) is detected automatically — no config needed.
3. Under **Settings → Environment Variables**, add `RESEND_API_KEY` (and
   optionally `CONTACT_TO` / `CONTACT_FROM`).
4. **Deploy.** Push to the default branch to trigger future deploys.

## To finish before launch (client)

- Drop the official logo file at `public/logo.png`. The header/footer currently
  render a faithful SVG recreation of the mark (`components/Logo.tsx`); swap in
  an `<Image>` there if you'd rather use the raster artwork.
- Replace the monogram portrait plates on `/team` with real partner photos.
- Confirm the Resend API key (or Formspree endpoint) so the form delivers mail.
- Review all copy in `lib/content.ts`.
