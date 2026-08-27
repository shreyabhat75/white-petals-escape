# White Petals Resort

A premium, cinematic hospitality website for White Petals Resort, Bengaluru.

## Tech Stack

- React 19
- JavaScript (JSX)
- TanStack Router + TanStack Start (SSR)
- Tailwind CSS 4
- Motion (animations)
- Lucide React (icons)
- Zod (form validation)

## Getting Started

```sh
npm i
npm run dev
```

Opens at `http://localhost:5173/`.

## Project Structure

```
src/
  routes/
    __root.tsx          Root layout (HTML shell, fonts, meta)
    index.tsx           Homepage — all 12 sections
  components/site/
    Navbar.jsx          Sticky nav with mobile hamburger menu
    Hero.jsx            Full-screen cinematic hero with slow zoom
    Escape.jsx          Split layout — "Leave the rush behind"
    Resort.jsx          Property highlights grid (8 amenities)
    Experiences.jsx     Scrollable experience cards
    Stay.jsx            Accommodation section (2 room types)
    PlanEscape.jsx      Interactive companion + mood selector
    DayAt.jsx           Horizontal timeline — Morning to Night
    Gallery.jsx         Masonry grid with fullscreen lightbox
    Stories.jsx         Testimonial placeholders (no fake reviews)
    Location.jsx        Address, contact, Google Maps embed
    Enquiry.jsx         Validated enquiry form (Zod)
    FinalCta.jsx        Cinematic full-width call to action
    Footer.jsx          Navigation, contact, copyright
    primitives.jsx      Reveal, Button, Section, SectionHeading, Figure
  lib/
    resort-media.js     Image imports, alt text, gallery data, contact info
    utils.js            cn() utility (clsx + tailwind-merge)
  hooks/
    use-mobile.jsx      Mobile breakpoint hook
  images/               Resort photographs (local)
  styles.css            Design system — dark luxury theme
```

## Design

- Deep black background, warm white typography, muted gold accents
- Cormorant Garamond (serif headlines) + Jost (sans-serif body)
- `prefers-reduced-motion` fully supported
- Responsive: desktop, tablet, mobile with sticky CTA

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |
