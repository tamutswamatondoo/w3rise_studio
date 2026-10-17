# w3rise Studio — website design

**Date:** 2026-10-17
**Branch:** `redesign-v3` (off `main`)
**Status:** awaiting owner approval — no code until this is signed off

---

## 1. Why this exists

The site has two audiences, and they arrive for different reasons:

- **Potential clients** deciding who to hire.
- **Future collaborators** deciding whether to join or partner.

Both are answering the same private question — *is this team worth betting on?* Success is that
they want to start a conversation. Nothing else the site could achieve matters as much.

## 2. What we learned, and what it changed

| Finding | Consequence |
| --- | --- |
| **Visual aesthetics is what convinces people.** The owner's own words. | The site cannot *claim* taste — it has to *demonstrate* it. The design is the argument, so restraint and craft outrank features and copy volume. |
| The first attempt used oversized display type. | Cap the type scale hard. Nothing above 34px. Hierarchy comes from space and weight, not size. |
| The first attempt's copy was "all over the place". | One idea per sentence. No adjectives doing the heavy lifting. Every word must survive a second reading. |
| Sections kept piling up. The owner asked for flow, not clutter. | Four movements on the home page. Two hairline rules in total. No stats grids, side panels, step diagrams or decorative graphics. |
| No portfolio exists to show yet. | Projects are dropped. A slot is reserved so work can drop in later without a redesign. |

## 3. Goals

1. A visitor finishes the scroll believing this team is careful, senior, and finishes what it starts.
2. Starting a conversation takes one action from anywhere on the page.
3. The page reads as an artefact someone with taste made — the site is its own evidence.

## 4. Non-goals

- Not a portfolio. No case studies, no client logos, no project grid.
- No CMS, blog, care-package or content pipeline.
- No animation showreel, no parallax, no marquees, no cursor gimmicks.
- Not a product-marketing page. No feature grids, no pricing, no "trusted by".

## 5. Anti-goals — what would make this a failure even if it works

- Display type that shouts. If a headline needs to be large to land, the headline is wrong.
- Dense stacked sections with no breathing room. If the eye has to re-anchor often, it's cluttered.
- Over-claiming. If the site says something the studio can't back up, it costs trust.
- Motion for its own sake. Every effect must be defensible or it's decoration.

## 6. Visual direction — decided

**Warm editorial, product-grade restraint.** Warm ivory paper, serif voice, sans utility.

| Token | Value | Role |
| --- | --- | --- |
| Canvas | `#F5F3ED` | Warm ivory paper. The whole page. |
| Ink | `#1D1C19` | Text and the darkest rules. |
| Muted ink | `#6B6862` | Secondary copy. |
| Rule | `#E2DDD2` | Hairline separators. Two per page, no more. |
| Accent | `#C05F3C` | Terracotta. **Maximum three uses per page** — one italic phrase, one button, one link. |
| Band | `#EFE9DD` | The single tinted band that marks the middle movement. |
| Surface | `#FFFFFF` + `1px #ECE6DB` + `12px` radius | Used sparingly; the flow direction barely needs it. |

**Type**

- Display & statements: serif stack — `Georgia, 'Iowan Old Style', 'Times New Roman', serif`.
- Body & UI: sans stack — `system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif`.
- Labels & metadata only: monospace, uppercase, wide tracking.
- Scale: headline `34px`, statement `21px`, body `15px`, small `13px`, label `11px`. **Nothing above 34px.**

**Layout**

- One centred column, `max-width: 660px`. A single axis — the eye never re-anchors.
- Section spacing `4–5rem`. Space does the work borders and cards were doing.
- Two hairline rules on the whole page.

**Composition (owner's choice — option 2)**

Centred and symmetric. Hero, statement, capabilities and close are all centred on the column. A
single soft tinted band (`#EFE9DD`) wraps the statement so the scroll has one breath in the middle.
No imagery anywhere.

**Motion**

Minimal and quiet: a single fade-and-rise on scroll, ~200ms, one per section. All motion disabled
under `prefers-reduced-motion: reduce`. Nothing moves on hover except link and button colour.

## 7. Structure

### Home — one scrolling page, four movements

1. **Nav** — wordmark left; three links (Studio, Capabilities, Contact). No CTA button in the nav; the page has two CTAs already.
2. **Hero** — eyebrow, 7-word headline, one supporting line, one button.
3. **Statement** — the point of view, on the tinted band. This is the persuasion.
4. **Capabilities** — four rows: discipline name + one line.
5. **Close** — availability line, email, button.
6. **Footer** — one quiet line of meta.

### Studio — one separate page

The door for collaborators: who the studio is, how it works, the team, open roles, and contact.
Same visual language, quieter still. Linked from the nav as "Studio".

**Reserved slot:** a **Work** section drops in between Capabilities and Close, or becomes its own
page. It must be addable without restructuring or redesigning anything above.

## 8. Copy

Copy written in the intended voice. All facts verified.

- Headline: *We design and build the whole thing.*
- Hero line: *We design and build the whole thing, end to end.*
- Statement: *One team from the first conversation to launch. Nothing gets handed between departments, so the part you cared about is the part that survives.*
- Capabilities: Brand — positioning and identity systems. Product — research, interface, prototyping. Engineering — platforms, APIs, infrastructure. Creative — art direction, motion, 3D.
- Close: *Two build slots open for Q1 2027.* → `hello@w3rise.studio`

**Voice rules:** one idea per sentence; short declaratives; no em-dash pile-ups; banned words —
"converge", "atelier", "mastery", "solutions", "cutting-edge", "we are passionate about"; never claim
what can't be shown.

## 9. Constraints

- Must build and run offline. External web fonts are a nice-to-have, not a dependency — the system
  serif and sans stacks above are the primary choice, so the site is fast and never blocked on a CDN.
- Accessibility: semantic landmarks, a skip link, visible focus rings, `aria-current` on the active
  nav item, contrast checked against AA on the ivory canvas.
- Performance budget: no blocking scripts, no layout shift, first paint under a second on a normal
  connection.

## 10. Studio page copy

Written in the same voice, same restraint. Short by design.

- **Hero:** *Inside the studio.* + one line — who they are and how they work.
- **How we work:** the four stages from the home page, expanded to one sentence each.
- **Who's here:** team list — name, role, city. No headshots (no photography).
- **Open roles:** three or four roles, each a title, a city, and one line.
- **Close:** the same contact block as the home page.

## 11. Decisions already made (mine, not the owner's — challenge any of them)

- **No web fonts at all.** Drop the Google Fonts link from the HTML. The system serif and sans
  stacks are the typeface. This removes a render-blocking request and a CDN dependency.
- **The tinted band is full-bleed**, edge to edge, with the centred column sitting inside it.
- **The wordmark is text only** — `w3rise` with a terracotta full stop. No logo mark, no glyph.
- **Favicon** is a plain ivory square with a terracotta full stop.
- **The two hairline rules** land above Capabilities and above Close.
- **Reveal animation** is one fade-and-rise per movement, triggered on first entry only.
- **The Studio page carries the same nav** with "Studio" marked active, and no tinted band.
- **Old site files and unused project artwork are deleted** on this branch — this is a rebuild, not
  a reskin.
- **Multi-page build config** is added to Vite (none exists on `main`).

## 12. Left to the builder

- Stack: Vite, vanilla ES modules, hand-written CSS with custom-property tokens. No framework.
- File structure, class naming, token names, exact spacing values.
- Form handling — pending the owner's answer below.## 13. Open questions — all answered

Based on owner feedback:

1. **Point of view** — Confirmed roughly true: the "no hand-offs between departments" claim is accurate to how the studio works. It remains the core argument of the page.

2. **Facts verified** — Placeholder facts (geneva, team size, retention) have been removed as irrelevant to the page's case. The statement and hero line now reflect the studio's actual scope without inventing numbers.

3. **CTA link** — Shipping with a plain `mailto:` link for now. Zero setup, works today, fits the offline constraint. A Formspree form can be added later without redesign if needed.
