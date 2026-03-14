# Masala & Miso

A minimal, elegant editorial-style food blog. Luxury culinary travel magazine online—cross-cultural cuisine, travel storytelling, and elevated food journalism.

## Tech stack

- **Next.js 14** (App Router)
- **Tailwind CSS** (custom design tokens)
- **TypeScript**

## Design system

- **Typography:** Playfair Display (brand, hero), Libre Baskerville (subheadings, articles), Inter (body)
- **Colors:** Deep Midnight `#16202b`, Ocean `#114665`, Burgundy `#720f32`, Muted Wine `#7b445a`, Neutral `#d1d1d6`
- **Layout:** Max width 1200px, article reading width 720px, 12-column grid, 80px section spacing

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Site structure

| Route | Description |
|-------|-------------|
| `/` | Home — full-screen hero, featured articles (1 large + 2 small), story grid with city tags |
| `/blog` | Blog index — all articles in a grid |
| `/blog/[slug]` | Article page — hero image, title, author/date, body, pull quote |
| `/restaurants` | Restaurants (placeholder) |
| `/recipes` | Recipes (placeholder) |
| `/cities` | Cities (placeholder) |
| `/guides` | Guides (placeholder) |
| `/about` | About — brand and philosophy |
| `/newsletter` | Newsletter (placeholder) |

## Components

- **Navbar** — Floating; transparent at top, `#d1d1d6` + shadow on scroll. Brand (MASALA & MISO) + Restaurants, Recipes, Cities, Guides, About.
- **Hero** — Full-screen with Unsplash image overlay, center title + subheading, primary CTA “Explore Articles”.
- **FeaturedArticles** — 1 large + 2 smaller cards; image zoom 105% on hover, soft shadow.
- **StoryGrid** — 3 columns (2 on tablet, 1 on mobile); category pills (Tokyo, Mumbai, Kyoto, etc.); card lift + image zoom on hover.
- **ArticlePage** — Hero image, 720px reading width, Libre Baskerville title, metadata, body, optional pull quote (burgundy, centered).
- **Footer** — Dark `#16202b`, description + links (Recipes, Restaurants, Cities, Newsletter), copyright.
- **SectionDivider** — 1px wine color, 40% opacity.
- **FadeInSection** — Sections fade in on scroll.

## Interactions

- Links: Ocean color, hover → burgundy with underline animation.
- Primary button: Ocean background, hover → burgundy, 200ms ease.
- Cards: Image scale 105%, shadow/lift on hover.
- Nav: Background and text color transition on scroll.
