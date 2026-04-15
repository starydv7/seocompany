# BrandMarketing — Digital Marketing Agency Website

A modern marketing website for **BrandMarketing**, a digital marketing agency offering SEO, performance marketing, social media, branding, and marketing automation services. Built with Next.js and Tailwind CSS for fast performance and easy deployment.

## Overview

This is the official website for BrandMarketing, showcasing services, team, and contact options. The site highlights:

- **Services** — Branding & identity, social media management, SEO, performance marketing, paid ads (PPC), and marketing automation
- **Team** — About the team and their expertise
- **Contact** — Free strategy call booking and contact details (phone, Kolkata)

## Navigation (same links everywhere)

Mobile uses a **right drawer** (max ~19rem / 85vw) with a dimmed backdrop; desktop uses the **top bar**. Labels and URLs are identical.

| # | Link label | Path | Desktop (≥ md) | Mobile (drawer) |
|---|------------|------|------------------|-------------------|
| 1 | Services | `/services` | Top bar text link | Same |
| 2 | SEO | `/seo` | Top bar text link | Same |
| 3 | Social Media | `/social-media` | Top bar text link | Same |
| 4 | Automation & Performance | `/automation-performance` | Top bar text link | Same |
| 5 | Branding & Content | `/branding` | Top bar text link | Same |
| 6 | About Us | `/about` | Top bar text link | Same |
| — | Book a Call | `/contact` | Gradient button (right) | Button in drawer footer |

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React

## Project Structure

```
app/
  page.tsx              # Home page
  layout.tsx            # Root layout & metadata
  (site)/
    about/              # Meet the team
    contact/            # Book a strategy call
    services/           # Service offerings
    seo/                # SEO services
    social-media/       # Social media marketing
    automation-performance/  # Automation & performance
    branding/           # Branding & content
components/
  Navbar.tsx
  Footer.tsx
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Install & run

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Deployment

The project is set up for deployment on **Vercel**. Push to your Git repository and connect the repo in Vercel for automatic builds and previews.

## License

Private project. All rights reserved.
