# PRD — Afghan Market Website

## Original Problem Statement
A son built a website for his dad's shop "Afghan Market" (halal Asian grocery, 775 High Rd, N12 8JY, North Finchley, London). Requirements: hero with the storefront photo + "afghan market the best fresh food"; second section with bread photo + "fresh bread and food for you" + "grab it, bag it, go!"; address section + Google Maps directions button.

## User Personas
- North Finchley locals looking for the shop, hours, and directions
- Afghan/Asian diaspora customers seeking fresh naan and halal groceries
- The owner's family (site is a gift/tribute)

## Architecture
- React 19 + Tailwind frontend only (static one-page site; backend untouched)
- framer-motion (masked line reveal, scroll reveals, parallax hero), lenis smooth scrolling
- Fonts: Bodoni Moda (display), IBM Plex Sans (body), JetBrains Mono (meta)
- Palette: deep emerald #0C2E24, crimson #BA2D2D, saffron #E39832, cream #FAF7F2
- User photos served from /app/frontend/public/images/ (bread screenshot cropped to remove phone UI)
- Design spec: /app/design_guidelines.json

## Core Requirements (static)
1. Storefront hero with exact headline copy
2. Bread section with exact copy and cropped bread photo
3. Address + Google Maps directions button

## Implemented (2026-07)
- Kinetic hero: parallax storefront photo, masked line-by-line headline reveal, badges, directions pill
- Slow editorial marquee ribbon (emerald, diamond separators)
- Bread showcase: cleanly cropped naan photo, hover zoom, "grab it, bag it, go!" kinetic badge, freshness stamp
- Aisles bento (4 numbered cards: hearth, halal butcher, produce, pantry) — REPLACED 2026-07 with HMC meat section below
- HMC butcher section: "we have a lot of meat options" + "certified with HMC" copy, hand-drawn circular HMC badge (SVG stand-in logo), meat option chips (lamb, chicken, goat & mince, kebab cuts)
- Hero readability pass: stronger emerald scrims + text shadows on headline/eyebrow
- Visit section: big serif address, open-hours status pill, transit info, Copy Address + Get Directions (Google Maps dir link)
- Footer dedication "Made with love by a proud kid, for dad"
- Sticky glass nav with directions CTA; grain texture; lenis momentum scroll

## Backlog
- P0: none
- P1: real opening hours confirmation from dad; opening-hours auto open/closed status
- P2: photo gallery of the shop, product/price highlights, multilingual toggle (English/Dari/Pashto), Instagram link

## Next Tasks
- Confirm exact opening hours
- Add more real shop photos if provided
- Custom domain when ready to publish
