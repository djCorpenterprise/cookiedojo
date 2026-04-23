# Cookie Dojo — v2

Boutique treat website for Cookie Dojo (cookiedojo.com), Jacksonville, FL.

Built by Coastal Digital.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Resend (email delivery)
- Deployed on Vercel

## Architecture

Multi-page marketing site with a quote-request flow. **No cart, no Stripe checkout.**

The flow:

1. Customer fills out the quote form at `/quote`
2. Form POSTs to `/api/quote`
3. API route sends two emails via Resend:
   - Admin email → `cookiedojojax@gmail.com` with full request details
   - Confirmation email → customer
4. Betty reviews and sends a Stripe invoice manually from her Stripe dashboard
5. Customer pays the invoice, order is confirmed

This design keeps the site completely free of payment processing edge cases — Stripe invoicing is handled entirely in Betty's Stripe dashboard, separate from the website.

## Pages

- `/` — Homepage (hero, value props, featured categories, CTA)
- `/menu` — Full menu mirroring Betty's printed pricing sheet
- `/corporate` — Corporate services, branded desserts, ordering terms
- `/quote` — Quote request form (smart dropdowns from menu)
- `/about` — Betty's story
- `/contact` — Contact info

## Environment Variables

Create `.env.local` in the project root (copy from `.env.local.example`):

```
RESEND_API_KEY=re_your_key_here
FROM_EMAIL=quotes@cookiedojo.com
TO_EMAIL=cookiedojojax@gmail.com
```

### Resend setup

1. Sign in to https://resend.com
2. Verify `cookiedojo.com` as a sending domain (add DNS records)
3. Generate an API key
4. Add it to Vercel: Project Settings → Environment Variables → add `RESEND_API_KEY`, `FROM_EMAIL`, `TO_EMAIL`

**Important:** `FROM_EMAIL` must be on a domain you've verified in Resend. If `cookiedojo.com` isn't verified yet, use Resend's default `onboarding@resend.dev` while testing (emails will only go to the verified address during that phase).

## Local Development

```bash
npm install
cp .env.local.example .env.local
# fill in your keys
npm run dev
```

Open http://localhost:3000.

## Deploying to Vercel

### Option A: Replace existing project files

1. In your existing Cookie Dojo Vercel project, swap in this codebase (git push the replacement).
2. Make sure the environment variables (`RESEND_API_KEY`, `FROM_EMAIL`, `TO_EMAIL`) are set in Vercel Project Settings.
3. Redeploy.

### Option B: Fresh deploy

```bash
vercel --prod
```

## Customization Notes

### Images

- Uploaded product photos are in `public/images/`:
  - `menu-printed.png` — the printed menu (reference only)
  - `coconut-macaroons.png` — hero candidate
  - `themed-gift-box.png` — hero candidate / corporate section
- Homepage hero currently uses a placeholder. Drop an image at `public/images/hero.jpg` and update the `<HeroPlaceholder />` section in `app/page.tsx` to use `next/image`.
- You can freely add more photos (strawberries, candy sushi tray, etc.) and reference them in any page.

### Brand colors (defined in `tailwind.config.ts`)

- `cream` — #F5EFE0 (page background)
- `cream-light` — #FAF6EC (hero/section background)
- `espresso` — #3D2817 (headlines, body)
- `sage` — #7A8F5A (accents, divider marks)
- `rose` — #C67B6B (subhead accents, prices)

### Typography

- Playfair Display (serif) for headlines
- Inter (sans-serif) for body and UI

Loaded via `next/font/google` — zero external requests at runtime.

### Menu / Pricing

All menu items and pricing live in:

- `app/menu/page.tsx` — the displayed menu
- `components/QuoteForm.tsx` — the `MENU_ITEMS` and `UPGRADES` arrays used by the dropdowns

Keep these in sync if Betty updates pricing.

### Quote form fields

Edit `components/QuoteForm.tsx` to add/remove/rename fields. The API route (`app/api/quote/route.ts`) destructures the payload — if you add fields, mirror them there so they appear in the admin email.

## Folder Structure

```
app/
├── layout.tsx              # Root layout (fonts, nav, footer)
├── globals.css             # Tailwind + custom styles
├── page.tsx                # Homepage
├── menu/page.tsx
├── corporate/page.tsx
├── quote/page.tsx
├── about/page.tsx
├── contact/page.tsx
└── api/quote/route.ts      # Quote submission + Resend

components/
├── Navbar.tsx
├── Footer.tsx
└── QuoteForm.tsx

public/
└── images/
    ├── menu-printed.png
    ├── coconut-macaroons.png
    └── themed-gift-box.png
```

## TODO / Post-Launch Polish

- [ ] Drop a polished hero photo at `public/images/hero.jpg` and wire it into the homepage
- [ ] Add product gallery photos throughout the site (menu page especially)
- [ ] Verify `cookiedojo.com` domain in Resend so emails send from `quotes@cookiedojo.com`
- [ ] Optional: add a gallery page or Instagram feed embed
- [ ] Optional: add schema.org markup for local business SEO
- [ ] Optional: hook up Google Analytics or Plausible

## Support

Built and maintained by Coastal Digital (https://coastaldigital.co).
