# 🏫 American School Website — Architecture & Technical Reference

This document provides a comprehensive overview of the website's tech stack, design system, component architecture, section breakdowns, and content management instructions.

---

## 1. Executive Summary & Brand Identity

- **School Name**: American School
- **Wordmark**: `the American School`
- **Location**: Nashville, Tennessee
- **Academic Model**: Pre-K through Grade 12 Independent Day School
- **Core Tagline**: *"Joyful. Rigorous. Meaningful. Unstoppable."*
- **Design Philosophy**: High-end editorial aesthetic inspired by prestigious independent school publications (e.g., Berkeley Carroll), featuring rich jewel tones, cream linen contrast, bold condensed display typography, kinetic scroll choreography (GSAP), and responsive mobile architecture.

---

## 2. Technology Stack & Libraries

| Technology | Version / Tool | Purpose |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14 (App Router)** | Server-side rendering, optimized image routing, static export readiness. |
| **Language** | **TypeScript 5.5+** | Strict type definitions across all site data structures (`SiteContent`). |
| **UI Library** | **React 18** | Modular component composition and custom interactive hooks. |
| **Styling** | **Tailwind CSS 3.4** | Utility-first responsive design tokens, fluid clamp sizing, and custom color utilities. |
| **Animation Engine** | **GSAP 3.12 + ScrollTrigger** | Pinning, timeline scrubs, parallax cards, split-wipes, and circle masks. |
| **Micro-Interactions** | **Framer Motion 11** | Drawer slide-outs, modal fades, and state-driven transitions. |
| **Icons** | **Lucide React** | Clean, lightweight SVG iconography (Search, ArrowRight, Quote, Heart, Socials). |
| **Fonts** | **Google Fonts + Local Fallbacks** | Kensington / Anton condensed display, Cormorant Garamond, Inter, JetBrains Mono. |

---

## 3. Color System & Typography Tokens

### Color Palette

| Token Name | Hex Code | Usage Context |
| :--- | :--- | :--- |
| **Midnight Black** | `#000000` / `#0a0a0a` | Dark Hero Layer 1, modals, high-contrast backgrounds. |
| **Warm Linen Cream** | `#f0e9e2` | Editorial story sections, Academic Divisions, Bento Grid. |
| **Deep Plum / Espresso** | `#371336` | Primary high-contrast text on Linen sections and badge borders. |
| **Crimson Red** | `#d31f3a` | Marquee strip, action badges, headline accents, interactive CTAs. |
| **Deep Maroon / Berry** | `#501031` / `#6E1332` | MegaMenu background, Faculty Spotlight, Footer. |
| **Midnight Navy** | `#13375c` | Horizontal Card Carousel, Letter Mask Statement section. |
| **Royal Purple** | `#8D4685` | Expanding Reflect Sequence iris layer. |
| **Acid Lime Accent** | `#E5F97A` | MegaMenu close button, badge highlights, and secondary accents. |

### Typography Matrix

- **Display Headline Font (`font-kensington` / Condensed Sans)**: Used for massive uppercase impact headlines (`WHERE PURPOSE AND DISCOVERY`, `LOWER SCHOOL`, etc.).
- **Serif Accent Font (`font-serif`)**: Used for the subtle crest wordmark (`the`, `School`).
- **Body Font (`font-body` / Inter)**: Clean, highly legible paragraph copy with high contrast.
- **Monospace Font (`font-mono` / JetBrains Mono)**: Eyebrow tags, category labels, grade pills, timestamps, and button CTA text.

---

## 4. Component & Section Architecture

```
app/
 ├── layout.tsx                # Global layout, SEO metadata, Google Fonts
 ├── page.tsx                  # Main single-page scroll journey & global drawer state
 └── globals.css               # Marquee animations, typography utilities, base styles

components/
 ├── Header.tsx                # Transparent top bar with crest, wordmark, login & menu button
 ├── MegaMenu.tsx              # Fullscreen interactive multi-column navigation overlay
 ├── NewsDrawer.tsx            # Slide-out drawer with announcements, news cards & events
 ├── HeroTransition.tsx        # Pinned Dark Hero → Scrubbed Linen Wipe transition (Pages 1–3)
 ├── ExpandingReflectSequence.tsx # Expanding circle iris → Tossed photo parallax sequence
 ├── HorizontalCarousel.tsx    # Pinned horizontal scroll signature programs card deck
 ├── DivisionsSection.tsx      # Academic divisions (Lower, Middle, Upper School) with large type
 ├── FacultySpotlight.tsx      # Fanned faculty spotlight cards with quotes
 ├── LetterMaskStatement.tsx   # "Be Confident in Who You Will Become" circular mask statement
 ├── BentoGrid.tsx             # 12-column asymmetrical bento grid with statistics & photo cards
 ├── MarqueeBanner.tsx         # Infinite GPU-accelerated animated marquee & Admissions CTA
 └── Footer.tsx                # Multi-column jewel-tone footer, contact details & back-to-top

data/
 ├── content.ts                # Authoritative site data & TypeScript interface (`SiteContent`)
 └── siteContent.ts            # Export forwarder ensuring backward-compatibility
```

---

## 5. Detailed Breakdown of Every Section

### 1. Global Header ([components/Header.tsx](file:///c:/Users/User/Desktop/Keymead/components/Header.tsx))
- **Visuals**: Sits transparently (`absolute top-0`) over the initial dark hero.
- **Left**: School crest seal SVG + `the American School` wordmark.
- **Right**: `LOGIN →` pill button (hidden on extra small mobile screens for optimal spacing), Search icon, and circular solid Crimson `MENU` button.
- **Interactions**: Clicking `MENU` or the Search icon triggers the fullscreen MegaMenu overlay.

### 2. Fullscreen MegaMenu Overlay ([components/MegaMenu.tsx](file:///c:/Users/User/Desktop/Keymead/components/MegaMenu.tsx))
- **Visuals**: Fullscreen deep berry background (`#6E1332`) with a curved photo mask on the left and dot-grid accents.
- **Left**: Active category photo framed in a crescent elliptical clip path with rose gradient glow.
- **Right**: Category list (`ABOUT`, `ACADEMICS`, `ADMISSIONS`, `ARTS`, `ATHLETICS`, `COMMUNITY`). Hovering or clicking any item dynamically updates the left image and reveals the sub-menu links.
- **Top Row**: Family Portal, Community, and Give links with a solid lime-green `CLOSE` button.

### 3. Global Sticky News Tab & Slide-Out Drawer ([app/page.tsx](file:///c:/Users/User/Desktop/Keymead/app/page.tsx) & [components/NewsDrawer.tsx](file:///c:/Users/User/Desktop/Keymead/components/NewsDrawer.tsx))
- **Sticky Tab**: Pinned vertically on the right edge (`fixed right-0 top-1/2 -translate-y-1/2 z-40`) in Crimson Red with uppercase vertical text `NEWS & EVENTS`. Accessible from any scroll position.
- **Drawer**: Smooth slide-out panel featuring:
  - Top announcement banner.
  - 2-column latest news cards with date badges and thumbnail photos.
  - Upcoming events calendar list with date circles (`OCT 24`, `NOV 03`, etc.).

### 4. Hero & Linen Scroll Transition ([components/HeroTransition.tsx](file:///c:/Users/User/Desktop/Keymead/components/HeroTransition.tsx))
- **Layer 1 (Bottom Dark Hero)**: Full-bleed student background photo with dark vignette, massive `WHERE PURPOSE AND DISCOVERY.` headline, and animated SVG underline stroke.
- **Layer 2 (Top Linen Layer)**: Cream linen container (`#f0e9e2`) with `clipPath: inset(100% 0% 0% 0%)`.
- **GSAP Scrub**: As the user scrolls down, Layer 2 wipes upwards from bottom to top. The headline seamlessly transitions from white text on dark to plum text on linen with centered pixel alignment. Once fully lifted, the school emblem and mission story reveal.

### 5. Expanding Circle Mask & Tossed Parallax ([components/ExpandingReflectSequence.tsx](file:///c:/Users/User/Desktop/Keymead/components/ExpandingReflectSequence.tsx))
- **Circle Expansion**: Scroll-triggered GSAP timeline expands a circular iris mask (`clipPath: circle(...)`) revealing a rich purple background (`#8D4685`) and the headline `YOUR WORLD. YOUR NEIGHBORHOOD. YOUR FAMILY.`.
- **Tossed Photo Parallax**: 4 floating photo cards animate onto the screen with opposing angles and parallax scrub speeds.
- **Editorial Pull-Quote**: A cream card titled *"AS YOU ARE AND WILL BE."* featuring an annotated student portrait.

### 6. Horizontal Signature Programs Carousel ([components/HorizontalCarousel.tsx](file:///c:/Users/User/Desktop/Keymead/components/HorizontalCarousel.tsx))
- **Visuals**: Deep Midnight Navy background (`#13375c`).
- **Scroll Mechanic**: GSAP pins the section to the viewport while scrubbing the cards horizontally across the screen (`xPercent` calculation).
- **Cards**: Feature signature programs (Robotics, Marine Field Research, Studio Fine Arts, Global Humanities) with category tags, numbering (`01`, `02`, `03`), and hover lift effects.

### 7. Academic Divisions Stack ([components/DivisionsSection.tsx](file:///c:/Users/User/Desktop/Keymead/components/DivisionsSection.tsx))
- **Visuals**: Warm linen background (`#f0e9e2`) with deep plum typography (`#371336`).
- **Typography**: Scaled-up display titles (`LOWER SCHOOL`, `MIDDLE SCHOOL`, `UPPER SCHOOL`) at `text-5xl sm:text-7xl lg:text-[5rem]`, high-contrast descriptions, and grade badge pills (`PRE-K – GRADE 4`, `GRADES 5 – 8`, `GRADES 9 – 12`).
- **Layout**: Alternating zigzag grid rows (image-left / image-right) that collapse smoothly into a single-column layout on mobile.

### 8. Faculty Spotlight Deck ([components/FacultySpotlight.tsx](file:///c:/Users/User/Desktop/Keymead/components/FacultySpotlight.tsx))
- **Visuals**: Deep maroon background (`#501031`) with a subtle dot grid overlay.
- **Animation**: Cards enter with a fanned angle rotation (`rotation: -12deg`, `0deg`, `12deg`) and settle into a 3-column deck upon scroll.
- **Content**: Teacher circular portraits, subject tags, credentials, and authentic quotes.

### 9. Photo-Masked Statement ([components/LetterMaskStatement.tsx](file:///c:/Users/User/Desktop/Keymead/components/LetterMaskStatement.tsx))
- **Visuals**: Midnight Navy background (`#13375c`).
- **Interactive Element**: Massive typography `BE CONFIDENT IN WHO YOU WILL BECOME` where the letter **"O"** in **"WHO"** is replaced with an elastic circular photo mask of a student portrait framed in lime green (`#E5F97A`).

### 10. Bento Distinction Grid ([components/BentoGrid.tsx](file:///c:/Users/User/Desktop/Keymead/components/BentoGrid.tsx))
- **Visuals**: Linen cream background with an asymmetrical 12-column bento layout.
- **Items**:
  1. *Writers & Scholars* (7 columns) with photo and handwritten script annotation.
  2. *100% Matriculation* (5 columns) solid Crimson stat block (`100%`).
  3. *Creators & Designers* (5 columns) innovation lab showcase.
  4. *Civic Leadership* (7 columns) Midnight Navy block displaying `24,000+` annual community service hours.

### 11. Infinite Moving Marquee & Admissions CTA ([components/MarqueeBanner.tsx](file:///c:/Users/User/Desktop/Keymead/components/MarqueeBanner.tsx))
- **Marquee Track**: Continuous horizontal scrolling ribbon in Crimson Red (`#d31f3a`) displaying repeated school mottos with zero visible seam (`.animate-marquee`).
- **Admissions Banner**: High-impact CTA with `APPLY FOR 2026–2027` button and `SCHEDULE A VISIT` button.

### 12. Jewel-Tone Editorial Footer ([components/Footer.tsx](file:///c:/Users/User/Desktop/Keymead/components/Footer.tsx))
- **Left Column**: School crest seal, wordmark, description, verified address, phone, and social icons.
- **Middle Columns**: Quick links for Academic Divisions and Community portals.
- **Right Column**: Mission closing statement + smooth `BACK TO TOP ↑` scroll button.
- **Bottom Bar**: Copyright and legal accreditation links.

---

## 6. How to Edit Copy & Content

All site text, photos, dates, links, and faculty data are centralized in a single file:
👉 **[data/content.ts](file:///c:/Users/User/Desktop/Keymead/data/content.ts)**

### Common Update Examples:

1. **Changing School Name or Contact Info**:
   ```typescript
   // in data/content.ts
   school: {
     name: "American School",
     wordmark: "American",
     location: "Nashville, Tennessee",
     email: "admissions@americanschool.org",
     phone: "(615) 555-0190",
     // ...
   }
   ```

2. **Adding or Editing Academic Division Cards**:
   - Update `siteContent.divisions.items` array with new titles, descriptions, grade ranges, or Unsplash image URLs.

3. **Updating News and Events**:
   - Edit `siteContent.newsAndEvents.newsItems` or `siteContent.newsAndEvents.events`.

---

## 7. Development & Build Commands

- **Start Local Development Server**:
  ```bash
  npm run dev
  ```
  Runs at `http://localhost:3000` with hot-module reloading.

- **Run Production Build & Type-Check**:
  ```bash
  npm run build
  ```
  Generates static pages and verifies TypeScript types across the entire project.
