# 🚀 FlowMate Landing Page

<div align="center">

![FlowMate](public/logo-symbol.png)

**The AI Assistant That Automates Your Entire Workflow**

[Visit Live Site](https://flowmate.click) • [Join Waitlist](#) • [Report Bug](https://github.com/Max-Mendes91/flowmate-landing/issues)

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-ff0055?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

</div>

---

## ✨ What is FlowMate?

**FlowMate** is an AI-powered productivity assistant that lets you type **one natural-language message** and automatically:

- 📧 **Sends emails** via Gmail & Outlook
- 📅 **Schedules meetings** in Google Calendar
- 💬 **Posts to Slack** with smart context
- 📱 **Manages WhatsApp & Telegram** conversations

**Stop switching between apps.** Just tell FlowMate what you want, and it handles the rest.

> *"Email the team about tomorrow's standup at 10am and add it to my calendar"* → Done in 5 seconds.

---

## 🎯 Why This Landing Page?

This repository contains the **official marketing landing page** for FlowMate. It's built with modern web technologies and optimized for:

- ⚡ **Lightning-fast performance** (90+ Lighthouse score)
- 🎨 **Stunning animations** with Framer Motion
- 📱 **Fully responsive** design (mobile-first)
- ♿ **Accessibility-first** (WCAG 2.1 AA compliant)
- 🔍 **SEO optimized** for maximum visibility
- 🎭 **Dynamic parallax effects** for visual engagement

---

## 🛠️ Tech Stack

### Core Technologies
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[Framer Motion](https://www.framer.com/motion/)** - Smooth animations

### Performance Optimizations
- **Dynamic imports** with loading placeholders
- **CSS animations** for carousel (GPU-accelerated)
- **Optimized images** (2.5MB → 60KB reduction)
- **next/font** for optimal font loading
- **Code splitting** for below-fold content

### Integrations
- **[Supabase](https://supabase.com/)** - Waitlist management
- **React Icons** - Icon library (Simple Icons + Hero Icons)

---

## 🚀 Features

### 🎨 Visual Excellence
- **Animated parallax background** with 13+ flowing lines
- **Infinite carousel** showcasing 6 integrations
- **Smooth scroll animations** on all sections
- **Gradient text effects** with gold accents
- **Glassmorphism** cards and modals

### ⚡ Performance First
- **90+ Lighthouse score** (Performance, Accessibility, SEO, Best Practices)
- **Optimized TBT** (Total Blocking Time) < 200ms
- **First Load JS**: 162KB (optimized bundle)
- **Image optimization**: WebP/AVIF formats
- **CSS-based animations** to reduce main thread blocking

### ♿ Accessibility
- **Skip-to-content** link for keyboard navigation
- **ARIA labels** on all interactive elements
- **Focus-visible** styles for keyboard users
- **Screen reader** optimized content
- **Form validation** with clear error messages

### 📱 Responsive Design
- **Mobile-first** approach
- **Breakpoints**: Mobile, Tablet, Desktop, 4K
- **Touch-optimized** interactions
- **Adaptive layouts** for all screen sizes

### 🔍 SEO Optimized
- **Meta tags** optimized for search engines
- **Open Graph** for social sharing
- **Twitter Cards** for enhanced previews
- **Structured data** (JSON-LD)
- **Sitemap & robots.txt**

---

## 📦 Getting Started

### Prerequisites
- **Node.js 18+** or **pnpm 8+**
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/Max-Mendes91/flowmate-landing.git

# Navigate to directory
cd flowmate-landing

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Add your Supabase credentials to .env.local

# Run development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the magic ✨

### Build for Production

```bash
# Create optimized production build
pnpm build

# Start production server
pnpm start
```

---

## 🎨 Project Structure

```
flowmate-landing/
├── public/               # Static assets (images, icons)
├── src/
│   ├── app/             # Next.js App Router
│   │   ├── layout.tsx   # Root layout with metadata
│   │   ├── page.tsx     # Home page with dynamic imports
│   │   └── globals.css  # Global styles & animations
│   ├── components/      # React components
│   │   ├── Hero.tsx              # Hero section
│   │   ├── Features.tsx          # Core features (5 cards)
│   │   ├── CredibilityAnchors.tsx # Integration carousel
│   │   ├── HowItWorks.tsx        # 3-step process
│   │   ├── Roadmap.tsx           # Product roadmap
│   │   ├── Pricing.tsx           # Pricing tiers
│   │   ├── FAQ.tsx               # Accordion FAQ
│   │   ├── BackgroundLines.tsx   # Animated parallax
│   │   └── WaitlistModal.tsx     # Email signup
│   └── lib/             # Utilities & helpers
├── tailwind.config.ts   # Tailwind configuration
├── next.config.ts       # Next.js configuration
└── package.json         # Dependencies
```

---

## 🎯 Key Sections

### 1. **Hero Section**
Eye-catching headline with animated CTA and social proof

### 2. **Integration Showcase**
Infinite carousel featuring:
- Gmail
- Outlook
- Google Calendar
- Slack
- WhatsApp
- Telegram

### 3. **Core Features** (5 Cards)
- Send emails with one sentence
- Schedule meetings automatically
- Post updates to Slack
- Chat on WhatsApp
- Message via Telegram

### 4. **How It Works** (3 Steps)
1. Type your request in natural language
2. FlowMate understands and confirms
3. Actions execute across all apps

### 5. **Product Roadmap**
Timeline of features from Alpha to 2026

### 6. **Pricing Plans**
Three tiers: Starter, Professional, Enterprise

### 7. **FAQ Section**
Accordion with 6 common questions

---

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--gold: #E4CFA3           /* Brand accent */
--dark-primary: #050506   /* Background */
--text-primary: #FFFFFF   /* Main text */

/* Accent Colors */
--accent-blue: #4D9FFF    /* Interactive elements */
--accent-lavender: #B39CFF /* Secondary accents */
```

### Typography
- **Font**: Inter (via next/font)
- **Headings**: 700 weight
- **Body**: 400-500 weight

### Animations
- **Parallax scroll**: 13 animated background lines
- **Carousel**: CSS-based infinite scroll
- **Fade-in**: Framer Motion viewport animations
- **Hover effects**: Smooth transitions

---

## 📊 Performance Metrics

| Metric | Score | Status |
|--------|-------|--------|
| Performance | 95+ | ✅ Excellent |
| Accessibility | 100 | ✅ Perfect |
| Best Practices | 100 | ✅ Perfect |
| SEO | 100 | ✅ Perfect |
| TBT (Total Blocking Time) | <200ms | ✅ Optimized |
| First Load JS | 162KB | ✅ Optimized |
| Image Size | 60KB total | ✅ Compressed |

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow the existing code style
- Add TypeScript types for all new code
- Ensure all Lighthouse scores remain 90+
- Test on mobile, tablet, and desktop
- Update README if adding new features

---

## 📝 License

This project is **proprietary** and confidential. All rights reserved.

**© 2025 FlowMate. All rights reserved.**

---

## 🔗 Links

- **Live Site**: [flowmate.click](https://flowmate.click)
- **Support**: [support@flowmate.click](mailto:support@flowmate.click)
- **Twitter**: [@flowmateai](https://twitter.com/flowmateai)
- **Issues**: [GitHub Issues](https://github.com/Max-Mendes91/flowmate-landing/issues)

---

## 🌟 Star History

If you find this landing page useful or inspiring, please consider giving it a ⭐!

---

<div align="center">

**Built with ❤️ by the FlowMate Team**

*Simplifying workflows, one AI command at a time.*

</div>
