# VoltPulse - IoT Energy Management Platform

A high-performance B2B website built for **VoltPulse**, an energy management company providing IoT-based energy monitoring systems, microgrid analytics, and automated load control to industrial and commercial facilities.  
**NB**: This is a concept project for demonstration purposes. Text on this website is AI generated as I'm not an expert in electrical engineering or energy management. Also, images on the website are AI generated.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure & File Guide](#project-structure--file-guide)
  - [`app/`](#app)
  - [`components/`](#components)
  - [`data/`](#data)
  - [`types/`](#types)
- [Tech Stack](#tech-stack)
- [Tools](#tools)
- [Deployment](#deployment)

---

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Project Structure & File Guide

Below is a detailed breakdown of the files in the `app/`, `components/`, `data/` and `types/` directories, describing their specific purpose and architectural role.

### `app/` 

The Next.js App Router root directory managing routing, layouts, templates, and global styling.

* **`app/layout.tsx`**
  * **Role**: Configures global typography (`Geist` and `Geist_Mono` via `next/font/google`), sets metadata (SEO title, description), applies `globals.css`, and renders the persistent `<Header />` and `<Footer />` across all routes.

* **`app/template.tsx`**
  * **Role**: Re-mounts on every route change to wrap the active page with `<PageTransition />`, enabling smooth Framer Motion animations across navigations.

* **`app/globals.css`**
  * **Role**: Declares base CSS custom properties (`--primary`, `--background`, `--foreground`, `--muted`), theme color tokens, dark mode overrides, and base typography rules.

* **`app/favicon.ico`**
  * **Role**: Default browser tab icon asset.

* **`app/page.tsx`**
  * **Role**: Orchestrates the modular home page layout with a dark industrial background and ambient radial glow, exporting strict `Metadata` and OpenGraph tags, and composing sections from `components/home/`.

* **`app/about/page.tsx`**
  * **Role**: Server Component for the About route (`/about`). Exports strict `Metadata` and OpenGraph tags, presenting a modular layout composing `<AboutHero />`, `<ValuesSection />`, `<MilestonesTimeline />`, `<TeamSection />`, and `<AboutCtaSection />`.

* **`app/products/page.tsx`**
  * **Role**: Showcase page for hardware products, software solutions, and accessories. Server Component exporting strict `Metadata` and OpenGraph tags, presenting a modular layout composing `<ProductsHero />` and `<ProductsCatalog />`.

* **`app/contact/page.tsx`**
  * **Role**: Server Component for the Contact route (`/contact`). Exports strict `Metadata` and OpenGraph tags, presenting a responsive two-column layout composing `<ContactInfo />` and `<ContactForm />`.

---

### `components/` 

#### Root Components

* **`components/Header.tsx`**
  * **Role**: Fixed/sticky navigation bar (`"use client"`) with backdrop blur (`backdrop-blur-md`), responsive desktop grid and mobile flex layouts, route-aware active link highlighting in `primary` (for `Home`, `Products`, and `About`), desktop quick-action `<PrimaryLink>` button, and mobile hamburger toggle button.

* **`components/MobileMenu.tsx`**
  * **Role**: Client-side slide-down navigation drawer (`"use client"`) rendered via Framer Motion (`AnimatePresence`). Features full-width route navigation links, active route indicators, a full-width Contact CTA, Escape-key keyboard listener, and system telemetry status indicator.

* **`components/Footer.tsx`**
  * **Role**: Multi-column footer displaying company mission, copyright information, categorized links (`Solutions`, `Company`, `Resources`), and legal navigation (`Privacy Policy`, `Terms of Service`).

---

#### `components/home/` (Home Page Sections)

* **`components/home/HeroSection.tsx`**
  * **Role**: Displays the primary real-time industrial energy management headline, descriptive copy, dual CTA links (`Deploy VoltPulse` and `Review Live Specs`), and a simulated real-time telemetry card with live status indicators and graphic placeholder frame.

* **`components/home/ValuePropositionSection.tsx`**
  * **Role**: A 4-column responsive grid mapping through `VALUE_PROPOSITIONS` (Peak Cost Reduction, Solar & Storage Sync, Continuous Uptime, Sub-Meter Visibility) with `lucide-react` icons, Framer Motion scroll reveals (`whileInView`), and card hover lift effects.

* **`components/home/CapabilitiesSection.tsx`**
  * **Role**: Asymmetrical grid layout highlighting core operational capabilities (Predictive Peak Management, Automated Load Shedding, Solar Inverter Sync, and Intelligent Fleet & Equipment Charging) with optimized `next/image` illustrations, `lucide-react` icons, and Framer Motion `whileInView` scroll reveals.

* **`components/home/MetricsSection.tsx`**
  * **Role**: Horizontal statistics bar highlighting industrial performance figures (99.999% uptime, 40%+ cost reduction, 1.2 GW monitored, 2.4 M tons carbon offset) using prominent emerald typography.

* **`components/home/PartnersSection.tsx`**
  * **Role**: Responsive flex row displaying trust partner brands (T-Power, Starlight Solar, EcoGrid Global, Metatronic, LithiumPro).

* **`components/home/CtaSection.tsx`**
  * **Role**: Rounded container featuring an internal emerald ambient glow, persuasive facility energy cost optimization copy, Framer Motion entrance animation, and primary conversion links (`Connect with VoltPulse` and `Documentation`).

---

#### `components/products/` (Products Page Components)

* **`components/products/ProductsHero.tsx`**
  * **Role**: Industrial header section featuring the page title, category overview, and concise introduction.

* **`components/products/ProductsCatalog.tsx`**
  * **Role**: Client-side interactive catalog (`"use client"`) managing active category filtering, the responsive products grid layout, and technical detail modal presentation.

* **`components/products/ProductCard.tsx`**
  * **Role**: Product card equipped with category badge, generic product title and description, overview bullet points, and an interactive trigger button.

* **`components/products/ProductDetailModal.tsx`**
  * **Role**: Accessible dialog (`"use client"`) with backdrop blur, Framer Motion animations, comprehensive specifications display, and direct inquiry link.

---

#### `components/about/` (About Page Components)

* **`components/about/AboutHero.tsx`**
  * **Role**: Industrial header section presenting VoltPulse's mission and strategic vision with ambient glowing cards.

* **`components/about/ValuesSection.tsx`**
  * **Role**: 4-column responsive grid detailing core engineering and sustainability values with `lucide-react` icons, Framer Motion scroll reveals (`whileInView`), and card hover lift micro-interactions.

* **`components/about/MilestonesTimeline.tsx`**
  * **Role**: Interactive animated timeline (`"use client"`) using Framer Motion to visualize operational milestones from lab prototyping to 1.2+ GW telemetry scale.

* **`components/about/TeamSection.tsx`**
  * **Role**: Leadership and engineering team directory (`"use client"`) with unified catalog-style department filter buttons, role descriptions, and technical expertise tags.

* **`components/about/AboutCtaSection.tsx`**
  * **Role**: High-contrast conversion banner inviting enterprise facility managers and grid operators to schedule an engineering pilot or explore products.

---

#### `components/contact/` (Contact Page Components)

* **`components/contact/ContactForm.tsx`**
  * **Role**: Client-side interactive form (`"use client"`). Features full field validation (RFC corporate email format, character count checks), field-level error messages, an animated loading state with a spinner, and a dismissible confirmation banner using Framer Motion.

* **`components/contact/ContactInfo.tsx`**
  * **Role**: Displays enterprise response SLA (< 24h response time, NDA commitment), active operations status indicator, direct engineering email and hotline, and physical office coordinates.

---

#### `components/ui/` (Design System & Primitives)

* **`components/ui/PrimaryLink.tsx`**
  * **Role**: Extends Next.js `LinkProps` with customizable sizing (`sm`, `md`, `lg`) and styles conforming to the emerald accent palette (`bg-primary`, dark text, soft glowing elevation, and hover transitions).

* **`components/ui/Input.tsx`**
  * **Role**: Accessible form input primitive with floating labels, required indicator, inline error feedback, and industrial dark theme focus borders.

* **`components/ui/Textarea.tsx`**
  * **Role**: Accessible multiline textarea primitive with validation error display and helper character guidance.

* **`components/ui/Select.tsx`**
  * **Role**: Accessible custom dropdown selector featuring a dark aesthetic and custom chevron indicator.

* **`components/ui/Button.tsx`**
  * **Role**: Accessible interactive button powered by Framer Motion (`whileHover={{ scale: 1.02 }}`, `whileTap={{ scale: 0.98 }}`). Supports multiple visual variants (`primary`, `secondary`, `outline`) and an integrated loading spinner state.

* **`components/ui/Badge.tsx`**
  * **Role**: Lightweight status and category badge primitive with emerald, cyan, zinc, and outline color styles.

* **`components/ui/Card.tsx`**
  * **Role**: Modular card primitive with optional Framer Motion hover elevation (`whileHover={{ y: -4 }}`), semi-transparent borders, and dark industrial backdrop styling.

---

#### `components/animations/` (Motion & Interactions)

* **`components/animations/PageTransition.tsx`**
  * **Role**: Uses `framer-motion` (`"use client"`) to animate route entrances with smooth fade-in and vertical translation (`opacity: 0, y: 12` to `opacity: 1, y: 0`).

---

### `data/` 

* **`data/about.ts`**
  * **Role**: Typed mock data for company mission, vision statements, values, operational timeline milestones, and team members.

* **`data/products.ts`**
  * **Role**: Typed mock product catalog with categorized hardware, software, and accessories entries.

---

### `types/` 

* **`types/about.ts`**
  * **Role**: Strict TypeScript definitions for the about domain: `CompanyValue`, `TeamMember`, `CompanyMilestone`, and `Department`.

* **`types/contact.ts`**
  * **Role**: Strict TypeScript definitions for the contact domain: `ContactFormData`, `InquiryType`, `FormErrors`, and `FormSubmissionStatus`.

* **`types/product.ts`**
  * **Role**: Strict TypeScript definitions for the product domain: `ProductCategory` and `Product`.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: [Geist](https://vercel.com/font)
- **Images**: WebP format for all images for better performance.

---

## Tools

- **Next.js & TypeScript**: Website framework with App Router, Turbopack, and strict typing
- **Tailwind CSS**: Utility-first styling & industrial dark mode design system
- **Framer Motion**: Hardware-accelerated animations, scroll reveals, and micro-interactions
- **Vercel**: Edge deployment, continuous delivery, and production hosting
- **GitHub**: Code versioning and repository management
- **Figma**: Iconography and asset design
- **Google Antigravity inline completion**: For clean comments

---

## Deployment

- **Live URL**: [https://volt-pulse-seven.vercel.app](https://volt-pulse-seven.vercel.app)
- **Platform**: [Vercel](https://vercel.com/)

How to deploy ?
```bash
npm i -g vercel # install vercel on your machine
vercel login # login to your vercel account
vercel --prod # deploy to production
```