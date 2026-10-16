# w3rise Studio

> *"Where strategy, design, and code converge into complete digital mastery."*

An editorial, light-canvas website for **w3rise Studio** — an integrated brand,
product and engineering atelier. Built with Vite, vanilla ES modules and a
hand-written design system. No UI framework, no CSS framework.

## The idea: an inverted hierarchy

The studio's earlier design was a dark, glassy canvas. This build flips the
spatial hierarchy while keeping the exact same brand triad — the palette stays
locked, but the three colours swap roles:

| Token | Colour | Role |
| --- | --- | --- |
| `--chocopie` | `#432f2e` | **Ink** — type, hairlines, rules, dark punctuation bands |
| `--blue` | `#c4dae8` | **The canvas itself** — airy, light, editorial |
| `--butter` | `#feefb8` | **Marker** — highlights, active states, focus, CTA accent |

No colour outside the triad is introduced. Every tint in `tokens.css` is an
`rgba()` of one of the three brand colours.

## Structure

A single-page home plus one dedicated Studio page, both served from the same
Vite build.

```
w3rise_studio/
├── index.html            # Home: hero, ticker, work ledger, capabilities, process, contact
├── studio.html           # Studio: principles, story, capability matrix, team, careers
├── vite.config.js        # Multi-page build (index + studio)
├── assets/               # Favicon + case-study artwork
├── src/
│   ├── shared.js         # Progress bar, header state, overlay nav, reveal, marquee, spy
│   ├── main.js           # Home entry — work ledger, accordion, contact form
│   └── studio.js         # Studio entry
└── styles/
    ├── tokens.css        # Design tokens (palette, type, space, motion)
    ├── base.css          # Reset, typography, buttons, forms, marquee, utilities
    ├── layout.css        # Header, overlay nav, footer
    ├── home.css          # Home sections
    └── studio.css        # Studio page sections
```

## Pages & behaviour

**Home (`index.html`)**

- **Hero** — asymmetric editorial split with a "studio dossier" panel.
- **Ticker** — seamless infinite marquee (pauses on hover).
- **Selected work** — a numbered *ledger* rather than a card grid, filterable by
  discipline, with a cursor-following artwork preview on desktop and inline
  thumbnails on mobile.
- **Capabilities** — an exclusive accordion; one discipline open at a time,
  animated with the `grid-template-rows: 0fr → 1fr` technique.
- **Process** — five-stage editorial timeline.
- **Contact** — validated brief form with inline success/error feedback.

**Studio (`studio.html`)** — the separate page linked from the *Studio* nav item:
principles, studio history, capability matrix, team, recognition and careers.

Shared across both: scroll progress bar, sticky header state, full-screen mobile
overlay navigation, IntersectionObserver reveal-on-scroll and scroll-spy, plus a
skip link and full `prefers-reduced-motion` support.

## Scripts

```bash
npm install     # install dependencies
npm run dev     # local dev server
npm run build   # production build to dist/ (both pages)
npm run preview # preview the production build
```

## Accessibility

Semantic landmarks, a skip link, `aria-expanded`/`aria-controls` on every
disclosure, `aria-pressed` on filters, `aria-current` on the active nav item,
visible focus rings in ink, live regions on the form, and all motion disabled
under `prefers-reduced-motion: reduce`.
