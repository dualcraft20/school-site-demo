# Master Prompt: Keymead School — Frontend Demo Site

## Role & Objective
You are a senior frontend engineer building a **frontend-only visual demo** of a private school marketing website for **Keymead School**, located in **Tennessee, United States**. This is a client-pitch demo to win project approval — it must look polished, animated, and production-quality, but requires **NO backend, NO CMS, NO forms that submit anywhere, and NO database**. All content is placeholder/AI-generated for now and will be replaced after the client signs off.

## Tech Stack (strict)
- **Next.js 14+ (App Router)**
- **Tailwind CSS** for styling
- **Framer Motion** for scroll-reveal, hover, and page-load animations
- **GSAP + ScrollTrigger** for the more complex scroll-pinned/parallax sequences (flying image cards, marquee)
- Deploy target: static export or Vercel — no server actions, no API routes, no env vars
- Use `next/image` with placeholder/AI-generated images (see Image Plan below)
- Single-page long-scroll demo (no real routing needed yet — just anchor sections). If multiple pages are wanted, stub them as static pages with the same nav/footer.

## Brand Direction
- School name: **Keymead School**
- Location: Tennessee, USA
- Tone: warm, confident, modern private-school energy — same emotional register as "As You Are And Will Be," but written fresh for Keymead (do NOT reuse Berkeley Carroll's exact copy — write original tagline/copy in a similar spirit)
- Color system: pick a **bold multi-section color-blocking palette** (e.g., a deep charcoal/black hero, a warm cream/off-white section, one saturated accent color like a rich plum, teal, or amber for "identity" sections, and a deep jewel-tone footer). Define these as Tailwind theme colors.
- Typography: one heavy/condensed display sans for big headline statements (e.g., similar weight to Anton/Archivo Black) + one clean readable sans for body text. Pull both from Google Fonts.

## Page Structure & Section-by-Section Animation Spec

### 1. Sticky Header
- Logo left, "LOGIN" pill button + search icon + circular "MENU" button on right
- On menu click: full-screen color-block overlay slides/fades in with a large vertical nav list (Who We Are, Learning & Discovery, Student Life, Admissions, Community/Give, etc.)
- Hovering/clicking a nav item reveals a sub-list flying in from the right (staggered fade+slide-in using Framer Motion `staggerChildren`)
- "CLOSE" button replaces menu button while open

### 2. Hero Section
- Full-bleed background image/video (placeholder image of students for now) with dark overlay
- Giant two-line bold headline, second word/phrase in accent color (e.g., "AS YOU ARE / AND [ACCENT]WILL BE[/ACCENT]") — write Keymead's own version
- Thin underline stroke beneath, animates drawing in (SVG stroke-dashoffset animation) on load
- Vertical rotated tab on the right edge ("NEWS & EVENTS") fixed while scrolling hero

### 3. Intro Statement Section (scroll transition hero → cream bg)
- Background crossfades from dark hero to a light grain-textured cream background as user scrolls (Framer Motion `useScroll` + `useTransform` on background color/opacity)
- Repeats the headline in dark plum text over the cream background
- Below: two-column layout — left: short mission paragraph; right: circular-cropped photo with a small hand-drawn-style annotation label + arrow (e.g., "Future Engineer" with a squiggly arrow) positioned absolutely, animates in with a slight delay after the photo

### 4. Full-Bleed Editorial Photo
- One large full-width photo (school/community placeholder image), subtle Ken Burns zoom-in on scroll using GSAP ScrollTrigger `scrub`

### 5. "This Is A School That Reflects..." Parallax Section
- Solid saturated accent-color background
- Large centered headline stack (3 lines, increasing emphasis)
- Multiple images AND hand-drawn line-art doodle icons (tree, landmark outline, map/globe outline) positioned around the text, each individually animating in on scroll with GSAP ScrollTrigger — staggered entrance: fade + slide + slight rotation, at different scroll depths (parallax feel), some overlapping the text
- Use `will-change: transform` and `rotate-[-6deg]`/`rotate-[4deg]` utility classes for the "tossed photo" look (rounded corners + drop shadow on each image card)

### 6. "Be Excited By School" Statement Section
- Centered bold headline + underline + short supporting paragraph, on the same accent color family (lighter shade), decorative concentric circle/ring outlines behind text (SVG, low opacity)

### 7. Horizontal Scroll Card Carousel
- 3–4 large rotated photo cards ("Love What You Learn," "Create a Masterpiece," "Compete at the Highest Level," etc. — write Keymead-relevant equivalents) each with a bold title + short description overlaid on a photo
- Cards are alternately rotated (`-rotate-3`, `rotate-2`) and overlap slightly, revealing via horizontal scroll-linked animation (GSAP horizontal scroll pinning, or simple Framer Motion drag-scroll row as a simpler fallback)

### 8. "What Learning Looks Like Here" — Divisions Section
- Light cream background, small icon/emblem at top
- Headline with one word in accent color
- Repeating row pattern (image left, text right, alternating or consistent) for **Lower School / Middle School / Upper School** — each with a grade-range label, one-line description, thin divider rule between rows
- Rows fade+slide up individually on scroll into view

### 9. "Learn From Caring, Passionate, Educators" — Staff Spotlight Deck
- Centered headline
- 3+ overlapping "fanned playing card" style photo cards (each rotated at a different angle, staggered z-index), each with staff name label and a colored circular badge/photo
- On scroll further, cards animate/settle into a cleaner row layout with title + arrow button ("Read More")

### 10. "Be Confident In Who You Will Become" — Dark Statement Section
- Deep navy/charcoal background
- Huge display text where one letter or word is replaced/overlaid by a circular photo mask (e.g., the "O" in a word is a circular student photo) — achievable via absolute-positioned circular image sitting between two text spans
- Dotted background pattern (radial-gradient dot grid via CSS)

### 11. Bento-Style Achievement Grid
- Asymmetric grid of photo cards + colored solid-shape cards (rounded rects, blob/organic shapes using `clip-path` or SVG masks) of varying sizes, each labeled (e.g., "Writers and Scholars," "Creators and Designers," "Community Builders") with small hand-drawn-style arrow/label annotations pointing at specific cards
- Staggered fade/scale-in on scroll

### 12. CTA Banner + Marquee
- Pill-shaped CTA button ("Learn More" / "Portrait of a Learner" equivalent)
- Full-width horizontally scrolling marquee text strip (infinite CSS/Framer Motion translateX loop) reading something like "JOYFUL. RIGOROUS. MEANINGFUL." in giant bold type, alternating background color bands

### 13. Footer
- Dark jewel-tone background (deep maroon/plum equivalent)
- Left: logo + one-line school description + contact info + campus address blocks (placeholder Tennessee address)
- Right: big closing headline ("A School That Reflects All of You" equivalent) + "Inquire" / "Apply Now" pill buttons + quick links list
- Below: social icons row, legal links, non-discrimination statement (placeholder text), "Site Map"

### 14. Latest News / Upcoming Events Strip (near footer)
- Two-column: horizontally-scrollable news card row (image + title + date) on the left, vertical upcoming-events list with date badges on the right, both with prev/next arrow buttons

## Animation Principles To Apply Throughout
- Every section's content should **enter on scroll**, not all be visible on load — use `whileInView` (Framer Motion) or ScrollTrigger with generous thresholds
- Stagger children (words, cards, list items) by 0.05–0.15s
- Photos consistently use: rounded-2xl or rounded-full crops, slight rotation, drop shadows, and occasional overlapping z-index stacking for a "collage" feel
- Keep motion snappy (300–600ms) with `ease: [0.22, 1, 0.36, 1]`-style custom easing, not linear

## Image Plan (placeholder phase — no real client photos yet)
Since real photos/content will come after the deal closes, use **AI-generated placeholder images** for now:
- Generate/insert placeholder images depicting: diverse school-age students in classroom/outdoor/sports/arts settings, a Tennessee-style campus building exterior, a teacher-student interaction, a theater/performance scene, a library scene
- Style: bright, natural, editorial photography look (not stock-photo stiff) — warm tones fitting the brand palette
- Where you cannot generate images inline, use styled colored placeholder blocks with a label (e.g., `[STUDENT PHOTO — LOWER SCHOOL]`) so the layout/animation is demoable even before real images are dropped in
- All copy (headlines, mission statements, staff names, news items) should be **original placeholder copy** written for Keymead School — not copied from any reference site

## Explicit Constraints
- NO backend, NO API routes, NO database, NO real form submission logic (forms can exist visually with disabled/no-op submit handlers)
- NO CMS integration yet — all content hardcoded in components/data files for easy swap-out later
- Fully responsive (mobile: stack sections, simplify parallax to basic fade/slide since heavy parallax is desktop-appropriate)
- Clean component structure: one component per section, a shared `data/content.ts` file holding all placeholder text/image references so content swap-out later is fast

## Deliverable
A single scrollable Next.js page (`app/page.tsx`) composed of the section components above, fully animated, mobile-responsive, using only placeholder Keymead content and AI-generated/placeholder imagery — ready to screen-record or live-demo to the client.
