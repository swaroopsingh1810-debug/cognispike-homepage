# CogniSpike Homepage - PRD

## Original Problem Statement
Build a dark-mode, conversion-focused single-page homepage for CogniSpike (www.cognispike.com), an AI automation agency, using React + Tailwind. 11 detailed sections (Nav, Hero, Pain Points, Services, Process, Why Us, Results, Industries, CTA Banner, FAQ, Footer), premium look with liquid gradients, glowing orbs, dot grid, animated counters, testimonial carousel, and animated FAQ accordion.

## User Choices
- Booking CTA: Cal.com URL `https://cal.com/ram-swaroop-singh-thakur-8uhev9/discovery-call`
- Backend: Frontend-only (no lead capture)
- Logo: Generated (text + neon-lime lightning bolt spike icon)

## Architecture
- **Stack**: React 19 + Tailwind 3.4 + framer-motion + lucide-react
- **Routing**: `/` → `HomePage`
- **Fonts**: Space Grotesk (display) + Inter (body) via Google Fonts
- **Design system**: Custom CSS variables + utility classes in `index.css` (grad-text, card-dark, btn-lime, orb, hero-mesh, dot-grid, process-line, etc.)

## Files
- `frontend/src/App.js` — router shell
- `frontend/src/pages/HomePage.jsx` — composes all sections
- `frontend/src/components/cognispike/*` — Navbar, Hero, PainPoints, Services, Process, WhyUs, Results, Industries, CTABanner, FAQ, Footer, Logo, SectionHeader
- `frontend/src/lib/constants.js` — CAL_URL, BRAND, DOMAIN, EMAIL
- `frontend/src/index.css` — brand tokens, animations, gradients, typography

## Implemented Features (2026-06-28)
- Sticky navbar with scroll-transparent → dark blur transition, mobile hamburger drawer
- Hero: animated gradient mesh, 3 floating orbs, dot grid, gradient "Autopilot" headline, dual CTAs, social proof strip, bouncing chevron
- Pain Points: 6 dark cards with glowing violet/cyan icons
- Services: 4 alternating rows with dark UI mockups (chat / flow / leads / chart)
- Process: 4-step horizontal stepper with gradient step numbers and connecting glow line
- Why Us: 6 differentiator cards with gradient top border
- Results: 4 animated stat counters (count-up on scroll) + auto-scrolling testimonial carousel (pauses on hover, 3 unique testimonials duplicated for loop)
- Industries: 9 tiles with hover glow
- Mid-page CTA banner with radial gradient
- FAQ: 6 accordion items, first open by default, exclusive expansion, "+" rotates to "×"
- Full-bleed footer with closing CTA, nav links, social icons, copyright

## Verification
- Testing agent iteration 1: 16/17 spec items pass; navbar-scroll and mobile drawer close fixed post-report
- Manual DOM inspection confirms `data-scrolled` toggles and inline style applies on scroll

## P1 / Next Action Items
- Add real client logos + case-study pages
- Wire lead-capture backend (email or CRM webhook) as an alternative to Cal.com
- Add blog / case studies routes
- Add pricing table page
- Add OG meta tags + favicon for `cognispike.com` domain
- Add real testimonial photos and integrate with LinkedIn API
