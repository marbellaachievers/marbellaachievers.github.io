# AGENTS.md — Marbella Achievers Toastmasters Website

This file is the canonical brief for any AI agent (or human contributor) picking up work on this repo. It captures the decisions and content requirements gathered during initial planning. Update this file when decisions change; don't let it drift.

---

## 1. Project overview

**Goal:** A fast, static, SEO-optimised marketing site for the **Marbella Achievers Toastmasters Club**. The site's single purpose is **conversion**: turn web visitors into first-time meeting guests.

**Primary audience:** English-speaking expats and professionals in Marbella / Costa del Sol who are searching for public-speaking practice, leadership development, or a welcoming community.

**Primary conversion action:** Guest clicks the **"Visit Club"** button on the official Toastmasters.org directory page and attends a Wednesday meeting. Secondary: message us on WhatsApp or join the WhatsApp group chat.

**Non-goals for v1:** blog/news feed, online member portal, event ticketing, internal club tooling, CMS.

---

## 2. Tech stack & deploy

- **Framework:** [Astro](https://astro.build/) with TypeScript — static site generation, zero client-side JS by default.
- **Styling:** Tailwind CSS (mobile-first utility classes).
- **Content:** Hard-coded in Astro components for v1; all variable data (links, meeting details, costs) lives in **`src/data/site.ts`** as the single source of truth. No CMS.
- **Hosting:** GitHub Pages on `marbellaachievers.github.io`, with the option to serve the same build from a custom domain (e.g. `marbellaachievers.com`) without rebuilding.
- **Portability constraint:** All internal links, image `src`, and fetches must be **relative** (`./foo.png`, `/index.html`, `#meetings`) so the identical build works under both `marbellaachievers.github.io` and a future custom domain. Do **not** hardcode the full origin anywhere in component JSX/HTML.
  - Astro's `site` config in `astro.config.mjs` controls canonical URL and sitemap generation only — set it to the primary public URL and update it if the custom domain is adopted. Components should never import or reference it directly for link targets.
- **Build/deploy:** GitHub Actions workflow at `.github/workflows/deploy.yml` — runs `astro build` on push to `main`, publishes `dist/` to Pages.
- **Repo:** https://github.com/marbellaachievers/marbellaachievers.github.io
- **Node:** LTS (≥ 20).
- **Package manager:** npm (simpler for a tiny project; revisit if a contributor prefers pnpm).

---

## 3. Information architecture

Single-page landing site. Sticky top nav with anchor links; hamburger on mobile.

1. **Hero** — club + Toastmasters logos, strong headline, primary CTA (Visit a meeting) + secondary (Message us on WhatsApp). Background: dark overlay on a meeting photo.
2. **Why join** — 4–6 benefit cards: public speaking confidence, leadership skills, Pathways curriculum, friendly community, international network, English-language practice.
3. **What happens at a meeting** — short explainer of the meeting format: prepared speeches, Table Topics (impromptu), evaluations, roles. Note duration (~90 min) and the reassurance that first-time guests are **never** asked to speak.
4. **Pricing / Value** — three cards (Intl dues, local fee, one-time joining), non-profit note, "≈ $10/month" headline, value anchor against single-session coaching.
5. **About the club** — short history (chartered 2003-02-07, club #00005183, Area E01), values, photo carousel from `assets/images/`.
6. **Meetings** — when & where, Google Maps iframe, guest policy (first visit free, arrive by 19:45), room info (Room 0.7 at Les Roches Marbella), Christmas break note.
7. **How to Join** — numbered 2-step process (see §4.6). Clean, scannable, with the "Visit Club" button as the explicit first action.
8. **FAQ** — cost, language, commitment, first-visit expectations ("will I have to speak?" — **no**), meeting duration, age, Pathways explained, holiday break.
9. **Contact / Join** — restated CTAs: **Visit a meeting** (toastmasters.org), **Message us** (WhatsApp direct), **Join our group chat** (WhatsApp group), then the full social row.
10. **Footer** — social icon row (WhatsApp, Instagram, Facebook, LinkedIn, Toastmasters.org page), copyright, GitHub repo link, Toastmasters brand attribution.

---

## 4. Content — source of truth

All of the following should live in `src/data/site.ts` so a single edit propagates everywhere.

### 4.1 Meeting

- **Day:** Wednesday
- **Start:** 20:00 (8pm) — starts *promptly*
- **Guest arrival:** by 19:45 (7:45pm)
- **Duration:** ~90 minutes (±15). Surface this up-front in "What Happens at a Meeting" and FAQ so prospects can plan.
- **Venue:** Les Roches Marbella (Global Hospitality Education)
- **Room:** Room 0.7 (usually)
- **Annual break:** ~2 weeks around Christmas — meetings pause and resume after **Reyes Magos / Epiphany (6 January)**. Surface this in the Meetings section and FAQ so prospects don't show up to a dark room.
- **Post-meeting tradition:** After most meetings, members head to a nearby café for a drink or bite to eat. Mention this in Why Join (community angle) and What Happens — it's a warm differentiator and a low-pressure way for guests to chat 1:1.
- **Map iframe:**
  ```html
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10214.129818972051!2d-4.94406522296443!3d36.50458208430579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7329d688145a79%3A0x6185ceb940c7c702!2sLes%20Roches%20Marbella%2C%20Spain%2C%20Global%20Hospitality%20Education!5e1!3m2!1sen!2ses!4v1776963443252!5m2!1sen!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  ```
  Use `loading="lazy"`. Make the iframe responsive with a 16:9 or 4:3 wrapper — don't let the fixed `width`/`height` break mobile.

### 4.2 Membership costs

| Fee | Amount | Frequency | Applies to |
|---|---|---|---|
| Toastmasters International dues | **$60 USD** | every 6 months | all members |
| One-time new-member joining fee | **$20 USD** | once | first-time Toastmasters members only |
| Local Achievers Club fee | **€20** | every 6 months | all members |

- First 6 months for a new member: **≈ $100 total** for 26 weekly meetings.
- Renewal: **$60 USD + €20** every 6 months (≈ $14/month).
- Headline framing: **"About $10/month — roughly one coffee a week."**
- Always pair the prices with **"Toastmasters is a registered non-profit"** — dues fund the program, materials, and supplies; nobody profits.

### 4.3 Contact & social links

| Channel | URL / Value | Role on site |
|---|---|---|
| WhatsApp direct | `+34 617 463 826` → `https://wa.me/34617463826` | "Message us" — 1:1 reply |
| WhatsApp group chat | `https://chat.whatsapp.com/JJdolGFERtNDHBYwfQuEu4` | "Join our community" |
| Instagram | `https://www.instagram.com/marbellaachievers/` | Social row |
| Facebook | `https://www.facebook.com/toastmastersmarbella/` | Social row |
| LinkedIn | `https://www.linkedin.com/company/marbella-toastmasters-achievers-club/` | Social row |
| Toastmasters.org directory | `https://www.toastmasters.org/Find-a-Club/00005183-achievers-club` | **Primary CTA target — "Visit Club" button** |
| GitHub repo | `https://github.com/marbellaachievers/marbellaachievers.github.io` | Footer link |

**WhatsApp prefilled text:** `?text=Hi%2C%20I%27d%20like%20to%20visit%20a%20meeting`

### 4.4 CTA copy direction

- **Hero primary:** "Visit a meeting — it's free" → toastmasters.org directory (instructs user to click "Visit Club" there).
- **Hero secondary:** "Message us on WhatsApp" → wa.me direct.
- **Contact section:** restate free-first-visit promise; offer three actions (Visit a meeting / Message us / Join the WhatsApp group chat); then full social row.
- **Tone:** friendly, low-pressure. Use "don't hesitate", "come check us out", "no obligation".
- **Never** minimise the free-first-visit message — it's the conversion lever.
- Always list **WhatsApp first** among contact channels — highest intent for this audience.

### 4.5 Club facts

- **Official name:** Achievers Club
- **Club number:** 5183
- **Chartered:** 2003-02-07
- **Area:** E01
- **Location:** Marbella, Spain
- **Tagline:** **"Where Leaders Are Made"** — use as the hero sub-headline or a recurring motif. This is also Toastmasters International's official tagline, so it reinforces brand alignment.

### 4.6 How to Join (two-step process)

Surface as its own section on the page — numbered cards, mobile-friendly.

1. **Fill out the "Visit Club" form** on the official Toastmasters directory page:
   `https://www.toastmasters.org/Find-a-Club/00005183-achievers-club` — click the **Visit Club** button and submit the short form. This lets our VP Membership know you're coming.
2. **Come to a meeting and ask for the current VP of Membership or the Club President.** They'll walk you through the short application form and answer any questions. No commitment before your first visit. (Names intentionally left out on the site so this copy doesn't break when the committee rotates.)

Reinforce on both steps: first visit is always **free**, and guests are **never** asked to speak on their first visit.

---

## 5. Design direction

### 5.1 Brand

- Follow Toastmasters International brand colours:
  - **Maroon** `#772432` (primary)
  - **Cyan** `#004165` (secondary)
  - **Happy Yellow** `#F2DF74` (accent)
  - **Grey** `#A9B2B1` (neutral)
- Typography: **Montserrat** (headings) + **Source Sans 3** (body). Self-host or use `fonts.bunny.net` (GDPR-friendly Google Fonts proxy) — avoid direct Google Fonts for privacy.
- Use the existing logos from `assets/images/`:
  - `achievers_logo_564.png` — club logo
  - `toastmasters-logo@2x.png` / `toastmasters_logo.png` — international logo (attribution in footer)

### 5.2 Responsive (hard requirement)

- **Mobile-first.** Design for 375px (iPhone SE) first; add `md:` (≥ 768px) and `lg:` (≥ 1024px) overrides only where needed.
- **Test every section at three widths before marking done:** 375px, 768px, 1280px.
- Hamburger navigation on mobile; inline nav on ≥ md.
- Map iframe and hero text must never overflow on 375px.
- Use responsive `<picture>` / `srcset` for the multi-MB meeting photos in `assets/images/`.
- Target **Lighthouse mobile**: Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO = 100.

### 5.3 Accessibility

- WCAG **AA** contrast minimum throughout.
- Semantic HTML: `<header> <nav> <main> <section> <footer>`, proper heading order (`h1` once, then `h2`/`h3`).
- `alt` text on every image; empty `alt=""` only for purely decorative graphics.
- Focus-visible styles on all interactive elements.
- Skip-to-content link.
- Respect `prefers-reduced-motion` for any animation.

---

## 6. SEO requirements

- **Static pre-rendered HTML** for every section — no client-side fetching of primary content.
- `<title>` and `<meta name="description">` on the page — targeted at "Toastmasters Marbella", "public speaking Marbella", "English speaking club Costa del Sol".
- **Open Graph** + **Twitter card** meta tags; OG image = a good meeting photo or the logo on brand background, 1200×630.
- **JSON-LD structured data** embedded in `<head>`:
  - `Organization` (name, logo, url, sameAs list of all socials)
  - `LocalBusiness` or `NonprofitOrganization` (address, geo)
  - `Event` — recurring weekly meeting: `@type: Event`, `eventSchedule` with `byDay: WE`, `startTime: 20:00`, `location` = Les Roches Marbella with address.
- **`sitemap.xml`** via `@astrojs/sitemap`.
- **`robots.txt`** allowing all.
- Clean URLs (no `.html` extensions visible), canonical URL meta.
- Image `alt` text uses keywords naturally, not stuffed.

---

## 7. Repo structure (target)

```
.
├── AGENTS.md                       # this file
├── README.md                        # short human-facing intro
├── LICENSE
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml               # Astro build → GitHub Pages
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── tailwind.config.mjs
├── public/
│   ├── robots.txt
│   ├── favicon.svg                  # derived from club logo
│   └── og-image.jpg                 # 1200x630 share card
├── src/
│   ├── pages/
│   │   └── index.astro              # the single page
│   ├── layouts/
│   │   └── Base.astro               # <html>, <head>, JSON-LD, nav, footer
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── WhyJoin.astro
│   │   ├── WhatHappens.astro
│   │   ├── Pricing.astro
│   │   ├── About.astro
│   │   ├── Meetings.astro
│   │   ├── Faq.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── icons/                   # SVG icons for socials
│   ├── data/
│   │   └── site.ts                  # all variable content (links, costs, meeting, club facts)
│   └── styles/
│       └── global.css
└── assets/images/                   # existing photos (keep)
```

---

## 8. Rollout plan

1. Scaffold Astro + TS + Tailwind. Configure `astro.config.mjs` with `site: "https://marbellaachievers.github.io"`.
2. Build `src/data/site.ts` with all the content from §4.
3. Build `Base.astro` layout (head, JSON-LD, nav, footer).
4. Implement sections in order: Hero → WhyJoin → WhatHappens → Pricing → About → Meetings → Faq → Contact.
5. Add responsive-image `<picture>` wrappers for `assets/images/` heavy photos; generate WebP alongside.
6. Add `@astrojs/sitemap`, `robots.txt`.
7. Add GitHub Actions deploy workflow; enable Pages → GitHub Actions source.
8. Run Lighthouse mobile + desktop; fix regressions until all scores are ≥ 95.
9. Manually walk every section at 375px / 768px / 1280px.
10. Commit in logical chunks — one commit per major step so review is easy.

---

## 9. Content conventions & guardrails

- **Copy voice:** warm, concrete, first-person plural ("we meet", "you're welcome"). Avoid jargon; explain "Pathways" and "Table Topics" the first time they appear.
- **Language variant:** **American English** throughout (e.g. "organization", "color", "program", "center"). Confirmed by Karl 2026-04-23.
- **Patterns borrowed from peer clubs** (worth weaving in — not copy-pasting):
  - **Problem-focused opener** (from marbellatoastmasters.com): lead Why Join with a hook like "Afraid of public speaking? You're in good company." Relatable, then solution.
  - **"No pressure to take the stage"** (from powertalks.info & marbellatoastmasters.com): explicit reassurance for first-timers — repeat in Hero, What Happens, How to Join, and FAQ. This is the single biggest friction remover.
  - **Inclusion statement** (from powertalks.info): "You don't have to be a skilled speaker — we start from wherever you are." Put near Why Join or Hero.
  - **Second-person empowerment** (from powertalks.info): "Your voice matters. Let us help you find it." — good candidate for a pull-quote or hero sub-line.
  - **Relatable objection-handling** (from powertalks.info): "Think you can't become a confident speaker? We've heard that before." — FAQ intro or a hero ribbon.
  - **"Edutaining" positioning** (from powertalks.info): frame meetings as "education in an entertaining, international environment" — distinctive and on-brand.
  - **Meeting duration up-front**: both peer sites surface "~90 minutes" prominently. Do the same in What Happens + FAQ.
  - **WhatsApp group onboarding nudge** (from marbellatoastmasters.com): when linking the group chat, add "introduce yourself when you join — we love knowing who's new."
- **No testimonials** unless the user provides approved quotes with names.
- **No contact form.** WhatsApp + Toastmasters.org + socials are sufficient and lower-friction.
- **No analytics in v1** unless the user asks. If added later, use **Plausible** or **GoatCounter** (no cookie banner needed).
- **No cookie banner** needed for v1 (no tracking scripts, privacy-friendly font host).
- **Images:** always include descriptive `alt` text; prefer existing photos in `assets/images/` over stock.
- **Do not** add features/sections beyond what's in §3 without user approval.

---

## 10. Resolved decisions

Answered by Karl on 2026-04-23. Treat these as binding for v1.

1. **Hosting / URL portability** — build must serve correctly from **both** `marbellaachievers.github.io` and `marbellaachievers.com` (custom domain may be adopted later). Use relative paths everywhere; never hardcode the origin. See §2.
2. **Language variant** — **American English** (organization, color, program, center).
3. **Testimonials** — skip for v1.
4. **Committee / leadership section** — skip for v1.
5. **Photos** — all four images in `assets/images/` are cleared for public web use (no blurring required).
6. **Favicon** — derive from `assets/images/achievers_logo_564.png` (simplified; export SVG + PNG 32/180/512).
7. **Meeting exceptions** — ~2-week break at Christmas; meetings resume after **Reyes Magos (6 January)**. Surface in Meetings and FAQ.
8. **"Pathways" depth** — brief mention in Why Join + dedicated FAQ entry; no standalone section.
9. **Language scope** — English-only v1 confirmed. Spanish deferred.
10. **Analytics** — skip for v1.
11. **Tagline** — **"Where Leaders Are Made"** (Toastmasters International's official tagline). Use as hero sub-headline.

---

## 11. For future agents

- Keep this file **up to date** with every meaningful decision. Stale AGENTS.md is worse than no AGENTS.md.
- When adding a new piece of variable content, add it to `src/data/site.ts` first, reference it from components.
- When adding a new social channel or CTA, update §4.3 / §4.4 of this file + `site.ts` in the same commit.
- Never hardcode URLs or phone numbers in individual components.
- Run Lighthouse mobile before any PR that touches layout, images, or `<head>`.
