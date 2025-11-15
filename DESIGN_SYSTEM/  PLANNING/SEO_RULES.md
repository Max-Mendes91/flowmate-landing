# SEO Rules & Google Search Best Practices

## 1. HTML & DOM Requirements

- Use semantic tags: <header>, <main>, <section>, <footer>, <nav>, <article>.
- Only one <h1> per page.
- Logical hierarchy: h1 > h2 > h3.
- Content must load without JS for SEO-critical elements (titles, descriptions, hero text).
- Avoid hidden text or text embedded only in images.

## 2. Metadata (Google Search Essentials)

- <title> max 50–60 characters, include primary keyword.
- <meta name="description"> 150–160 characters, include value proposition.
- Include <link rel="canonical"> on all pages.
- Add Open Graph + Twitter tags for share previews.
- Include favicon + touch icons.
- Structured logo markup (JSON-LD) where relevant.

## 3. URL & Routing Rules

- Only shallow pages: "/", "/privacy", "/terms".
- All URLs lowercase, hyphen-separated.
- No dynamic query strings for content.
- Only clean URLs, no hash-based navigation.

## 4. Performance (Core Web Vitals)

- LCP < 1.8s
- FID / INP < 200ms
- CLS < 0.1
- Use Next.js Image component for all images.
- Compress hero images; target:
  - WebP preferred
  - <150KB hero
  - <50KB icons
- Remove unused Tailwind CSS (built-in purge).
- Inline critical CSS (Next.js does this).
- Lazy-load non-critical components.

## 5. Accessibility (WCAG AA)

- Minimum color contrast: 4.5:1.
- Alt text for all images.
- Keyboard-safe: focus states visible and clear.
- Use aria-labels only when semantic element isn't enough.
- No "div buttons" — always semantic <button> or <a>.
- Form labels required.

## 6. Content Guidelines for SEO

- Hero: one clear statement (no jargon).
- Use primary keyword within first 50–100 words.
- One supporting paragraph describing user benefit.
- Use bullet points to improve readability.
- Clear CTA above-the-fold.
- Add minimal FAQ with schema markup (optional).
- Keep text concise but crawlable — avoid fully AI-styled fluff.

## 7. Technical SEO

- Generate sitemap.xml via Next.js.
- Generate robots.txt (allow all except API).
- Noindex: staging environments only.
- JSON-LD schema: WebSite + Organization.

## 8. Analytics

- Use lightweight analytics (Vercel Analytics / Umami).
- Avoid heavy scripts (GA4 only if needed).

## 9. Deployment Rules

- Deploy on Vercel with:
  - Edge caching enabled
  - Asset compression enabled
  - HTTP/2 or HTTP/3
  - Brotli compression

## 10. Best Practices Summary

- Fast.
- Simple.
- Semantic.
- Accessible.
- Mobile-first.
- Minimal JS.
- One purpose: convert users.
