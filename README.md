# YUCCA — Retro-Modern Telehealth & GLP-1 Weight Loss Template

A retro-modern, high-converting Next.js website template modeled after **yücca Health** (`tryyucca.com`), designed for GLP-1 weight loss, telehealth, longevity (NAD+), and peptide recovery (Sermorelin) programs.

## 🌵 Quick Customization Guide

This template uses a **Config-Driven Architecture**. To customize all text, retro colors, dynamic hero typer, pricing plans, patient transformations, FAQs, and navigation, edit one file:

📂 `src/brand.config.ts`

### 1. Change Brand Colors & Aesthetics
Edit the `colors` object in `src/brand.config.ts`:
```typescript
colors: {
  primary: "#1F2A37",     // Retro ink charcoal
  cream: "#F2EDE0",       // Yucca signature cream background
  orange: "#F97316",      // Accent orange
  sky: "#38BDF8",         // Retro sky blue
  purple: "#A855F7",      // Accent purple
  // ...
}
```

### 2. Update Treatments, Pricing & Offers
Modify the `treatments` array and `offerBanner` object in `src/brand.config.ts`:
```typescript
treatments: [
  {
    id: "semaglutide",
    category: "Weight Loss",
    name: "Personalized Semaglutide+",
    tagline: "Weekly GLP-1 subcutaneous injection + Vitamin B12",
    price: "$146",
    priceUnit: "/mo",
    badge: "MOST POPULAR",
    badgeColor: "orange",
  },
]
```

### 3. Patient Transformation Showcase
Modify `transformations` in `src/brand.config.ts` to update patient before/after metrics (e.g. Lisa C., Blaze B., Crystal G.).

---

## 🛠️ Tech Stack & Structure

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, React 19)
- **Styling**: Vanilla CSS (`src/app/globals.css`) with Retro Hard-Offset Shadows (`4px 5px #181C24`)
- **Typography**: Figtree (Google Fonts)

```text
src/
├── app/
│   ├── globals.css          # Retro design tokens & 3D card/button styles
│   ├── layout.tsx           # Root layout & auto-generated SEO metadata
│   └── page.tsx             # Clean homepage component assembly
├── components/              # Modular UI components
│   ├── OfferBanner.tsx      # Top discount & coupon banner
│   ├── Navbar.tsx           # Sticky nav with logo, links, & CTAs
│   ├── TrustBar.tsx         # Trust proofs & 50-state pharmacy badges
│   ├── Hero.tsx             # Dynamic animated typer hero & social proof
│   ├── Transformations.tsx  # Patient results & weight loss showcase
│   ├── Treatments.tsx       # GLP-1, NAD+, & Sermorelin pricing cards
│   ├── HowItWorks.tsx       # 3-step intake to delivery process
│   ├── Reviews.tsx          # Patient TrustPilot review cards
│   ├── FAQAccordion.tsx     # Interactive FAQ accordion
│   └── Footer.tsx           # Telehealth disclaimers & copyright
└── brand.config.ts          # ⚡ Single source of truth for all content
```

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
