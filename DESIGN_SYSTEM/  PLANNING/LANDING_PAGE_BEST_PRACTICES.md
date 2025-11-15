# Landing Page Best Practices (Conversion + SEO + UX)

## 1. Page Structure

1. Hero (value prop + CTA)
2. Social proof (optional)
3. Features (3 sections)
4. How it works (3 steps)
5. Waitlist CTA
6. Footer

## 2. Hero Requirements

- One H1 only.
- Subheading explaining benefit in one sentence.
- CTA button above the fold.
- Hero image must be:
  - lazy-loaded
  - <150KB
  - WebP

## 3. Content Hierarchy

- Visitors must understand FlowMate in under 5 seconds.
- Use max 10–12 lines of text above the fold.
- Avoid buzzwords; use concrete outcomes:
  - “Send emails”
  - “Schedule meetings”
  - “Update Slack”
- Use consistent iconography.

## 4. Interaction Design

- All CTAs use same styling.
- Hover states required for all interactive elements.
- Scroll-based animations optional but must be lightweight.

## 5. Technical Requirements

- Ship <85KB of JS for landing.
- No unnecessary client components.
- All text above the fold must be server-rendered.
- Enable `prefetch={false}` for links to reduce unnecessary fetches.

## 6. Image Strategy

- Use Next.js <Image> with:
  - fill when possible
  - priority for first hero image
- Only 1–2 hero-visual assets max.

## 7. Footer Requirements

- Minimal links:
  - Privacy
  - Terms
  - Contact email
