# VoltPulse - IoT Energy Management Platform

A high-performance B2B website built for **VoltPulse**, an energy management company providing IoT-based energy monitoring systems, microgrid analytics, and automated load control to industrial and commercial facilities.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Project Structure & File Guide

Below is a detailed breakdown of the files in the `app/` and `components/` directories, describing their specific purpose and architectural role.

### 📁 `app/` Directory

The Next.js App Router root directory managing routing, layouts, templates, and global styling.

* **[`app/layout.tsx`]**
  * **Role**: Configures global typography (`Geist` and `Geist_Mono` via `next/font/google`), sets metadata (SEO title, description), applies `globals.css`, and renders the persistent `<Header />` across all routes.

* **[`app/template.tsx`]**
  * **Role**: Re-mounts on every route change to wrap the active page with `<PageTransition />`, enabling smooth Framer Motion animations across navigations.

* **[`app/globals.css`]**
  * **Role**: Declares base CSS custom properties (`--primary`, `--background`, `--foreground`, `--muted`), theme color tokens, dark mode overrides, and base typography rules.

* **[`app/favicon.ico`]**
  * **Role**: Default browser tab icon asset.

* **[`app/page.tsx`]**
  * **Role**: Orchestrates the modular home page layout with a dark industrial background and ambient radial glow, composing sections from `components/home/` and rendering the `<Footer />`.

* **[`app/about/page.tsx`]**
  * **Role**: Public-facing view detailing company vision, background, team, and commercial offerings.

* **[`app/products/page.tsx`]**
  * **Role**: Showcase page for IoT hardware products (DIN-Rail smart meters, industrial LoRaWAN gateways) and SaaS energy analytics services.

* **[`app/contact/page.tsx`]**
  * **Role**: Facilitates customer inquiries, assessment requests, and sales consultations for industrial clients.

---

### 📁 `components/` Directory

Contains all reusable UI blocks, layout components, animation wrappers, and page sections.

#### Root Components

* **[`components/Header.tsx`]**
  * **Role**: Fixed/sticky navigation bar with backdrop blur (`backdrop-blur-md`), brand branding, main navigation links (`Home`, `Products`, `About`), and a quick-action `<PrimaryLink>` button to the contact page.

* **[`components/Footer.tsx`]**
  * **Role**: Multi-column footer displaying company mission, copyright information, categorized links (`Solutions`, `Company`, `Resources`), and legal navigation (`Privacy Policy`, `Terms of Service`).

---

#### 📁 `components/home/` (Home Page Sections)

Modular, single-responsibility components composed within `app/page.tsx`.

* **[`components/home/HeroSection.tsx`]**
  * **Role**: Displays the primary value proposition headline, descriptive copy, dual CTA links (`Deploy VoltPulse` and `Review Live Specs`), and a simulated real-time telemetry card with status indicators and graphic placeholder frame.

* **[`components/home/ValuePropositionSection.tsx`]**
  * **Role**: A 4-column responsive grid mapping through `VALUE_PROPOSITIONS` (Max Efficiency, Pure Sustainability, Total Resilience, Complete Control) with technical SVG icons and hover lift effects.

* **[`components/home/CapabilitiesSection.tsx`]**
  * **Role**: Asymmetrical grid layout highlighting core operational capabilities along with telemetry visualizer placeholders.

* **[`components/home/MetricsSection.tsx`]**
  * **Role**: Horizontal statistics bar highlighting industrial performance figures.

* **[`components/home/PartnersSection.tsx`]**
  * **Role**: Responsive flex row displaying trust partner brands.

* **[`components/home/CtaSection.tsx`]**
  * **Role**: Rounded container featuring an internal emerald ambient glow, persuasive microgrid assessment copy, and primary conversion links (`Connect with VoltPulse` and `Documentation`).

---

#### 📁 `components/ui/` (Design System & Primitives)

* **[`components/ui/PrimaryLink.tsx`]**
  * **Role**: Extends Next.js `LinkProps` with customizable sizing (`sm`, `md`, `lg`) and styles conforming to the emerald accent palette (`bg-primary`, dark text, soft glowing elevation, and hover transitions).

---

#### 📁 `components/animations/` (Motion & Interactions)

* **[`components/animations/PageTransition.tsx`]**
  * **Role**: Uses `framer-motion` (`"use client"`) to animate route entrances with smooth fade-in and vertical translation (`opacity: 0, y: 12` to `opacity: 1, y: 0`).

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: [Geist](https://vercel.com/font)
