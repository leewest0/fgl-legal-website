# FGL LEGAL (Adullam Chambers) — Project Progress

_Last updated: 2026-07-13_

Status tracker for the firm website. Check items off as they're completed.

---

## ✅ Done

- [x] Next.js 16 (App Router) + TypeScript + Tailwind v4 project scaffolded
- [x] Editorial design system — warm-paper + forest-green + muted-gold, Fraunces/Inter
      type pairing, `{ }` brace motif (tokens in `app/globals.css`)
- [x] All 5 pages built: Home, About, Practice Areas (8 areas), Team, Contact
- [x] Reusable components: Header (sticky nav + mobile menu), Footer, Logo (SVG
      recreation of the mark), PageHero, Button/Section/SectionHeading, ContactForm,
      FAQAccordion
- [x] All copy centralized in `lib/content.ts` (taken verbatim from the client's
      content document)
- [x] Contact form + API route (`app/api/contact/route.ts`) with server-side
      validation, honeypot, and graceful degradation when no API key is set
- [x] SEO metadata + Open Graph, SVG favicon
- [x] README with local-run + Vercel deploy instructions, `.env.example`
- [x] Verified: `npm run build` + `npm run lint` pass clean; every page screenshotted
      at desktop + mobile; contact API tested (valid/invalid/honeypot cases)
- [x] Committed and pushed to branch `claude/ghana-law-firm-site-jyrt70`
- [x] Empty `main` base branch created and pushed (so a PR is possible)

---

## ⏳ In progress / handed to client

- [x] **Site published to `main`** — the full site now lives on the `main` branch and
      is ready to deploy. (We skipped a review PR: `main` and the working branch had
      unrelated git histories, so GitHub wouldn't compare/merge them. The site was
      fast-forwarded onto `main` instead — same code, no force-push.)
- [ ] **Set `main` as the default branch** (optional but tidy): GitHub → Settings →
      Branches → switch default to `main`. The old working branch
      `claude/ghana-law-firm-site-jyrt70` can then be deleted.
- [ ] **Deploy to Vercel** — import the repo, framework auto-detected, no config
      needed. Set the **Production Branch** to `main` (Vercel → Settings → Git).

---

## 🔜 To do LAST — Resend email setup (deliberately deferred)

The contact form works today without this — it validates input and logs
submissions server-side instead of erroring. Email delivery is switched on by
completing the steps below. **We are doing this properly at the end.**

Key provided (store in env vars only — NEVER commit): `re_cNFfn6HU_…`

1. [ ] In Resend → **Domains**, add and verify `fgllegalac.com` (add the DNS records
       Resend provides). Required before the form can email `info@fgllegalac.com` and
       send from an `@fgllegalac.com` address. Without a verified domain, Resend only
       allows sending to the Resend account owner's email (test mode).
2. [ ] In **Vercel → Settings → Environment Variables**, add:
       - `RESEND_API_KEY` = the Resend key
       - `CONTACT_TO` = `info@fgllegalac.com`
       - `CONTACT_FROM` = `FGL LEGAL <no-reply@fgllegalac.com>` (address on verified domain)
3. [ ] **Redeploy** on Vercel so the env vars take effect.
4. [ ] Submit the live form and confirm the email arrives.
5. [ ] (Optional) Roll the API key if the value shared in chat should be retired.

---

## 🎨 Client assets to finalize before launch

- [ ] Drop the official logo file at `public/logo.png` and swap `<LogoMark>` for an
      `<Image>` in `components/Logo.tsx` (currently a faithful SVG recreation)
- [ ] Replace the monogram portrait plates on `/team` with real partner photos
- [ ] Review all copy in `lib/content.ts`
- [ ] Add a custom domain in Vercel (Settings → Domains → `fgllegalac.com`)

---

## Reference

- **Repo:** `leewest0/fgl-legal-website`
- **Working branch:** `claude/ghana-law-firm-site-jyrt70`
- **Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · lucide-react · Resend
- **All copy:** `lib/content.ts`
- **Design tokens:** `app/globals.css`
