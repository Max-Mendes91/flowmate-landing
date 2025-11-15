# Tailwind Configuration Guidelines

## 1. Base Configuration

- Enable JIT (default in v3+).
- Include only project paths inside `content` to enable tree-shaking.
- Define brand tokens in `theme.extend`:
  - colors
  - spacing
  - borderRadius
  - boxShadow
  - fontSize
- Override default container:
  container: {
  center: true,
  padding: "1rem",
  screens: {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  }
  }

## 2. Design Tokens (to define in theme.extend)

- Colors:
- brand-primary
- brand-accent
- neutral scale: 50 → 900
- Spacing scale:
- 1 → 4px
- 2 → 8px
- 3 → 12px
- 4 → 16px
- 6 → 24px
- 8 → 32px
- 10 → 40px
- 12 → 48px
- Border radius:
- default: 8px
- card: 12px
- section: 24px

## 3. Coding Standards

- Never use arbitrary values unless necessary.
- Prefer class composition over inline styles.
- Use max-w constraints:
- `max-w-[1200px]` for main content
- `max-w-[700px]` for text blocks
- Always add `scroll-mt-24` for anchor targets (safe navbar offset).

## 4. Component Consistency

### Buttons

- Base: `inline-flex items-center justify-center font-medium transition`
- Sizes:
- sm: `px-3 py-2 text-sm`
- md: `px-5 py-3 text-base`
- lg: `px-6 py-4 text-lg`
- Variants:
- primary: bg-black text-white hover:bg-neutral-800
- secondary: border border-neutral-300 hover:bg-neutral-100

### Inputs

- `rounded-lg border border-neutral-300 px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none`

### Cards

- `rounded-2xl border border-neutral-200 p-6 shadow-sm hover:shadow`

## 5. Layout Best Practices

- Grid for feature sections (2 or 3 col).
- Flex-column on mobile.
- Use `gap-x-12 gap-y-24` for large layouts.
- All sections need:
- `py-20` mobile
- `py-32` desktop

## 6. Avoid Anti-patterns

- No full-width 100vw containers — use Tailwind container.
- No inline SVG without sizing.
- No mixing px and rem unnecessarily.
- No custom CSS unless Tailwind can’t do it.

# Tailwind Configuration Best Practices

## theme.extend

colors: {
brand: {
primary: "#0A0A0A",
accent: "#5B4BFF",
accentHover: "#4A3CE6",
accentLight: "#ECEAFF",
},
neutral: {
50: "#FAFAFA",
100: "#F5F5F5",
200: "#E5E5E5",
300: "#D4D4D4",
400: "#A3A3A3",
500: "#737373",
600: "#525252",
700: "#404040",
800: "#262626",
900: "#171717",
}
},

fontSize: {
xs: "0.75rem",
sm: "0.875rem",
base: "1rem",
lg: "1.125rem",
xl: "1.25rem",
"2xl": "1.5rem",
"3xl": "1.875rem",
"4xl": "2.25rem",
"5xl": "3rem"
},

borderRadius: {
sm: "6px",
md: "10px",
lg: "14px",
xl: "20px",
"2xl": "28px"
},

spacing: {
1: "4px",
2: "8px",
3: "12px",
4: "16px",
6: "24px",
8: "32px",
10: "40px",
12: "48px",
},

boxShadow: {
card: "0 4px 14px rgba(0,0,0,0.08)",
floating: "0 10px 38px rgba(0,0,0,0.12)"
},

container: {
center: true,
padding: "1rem",
screens: {
sm: "640px",
md: "768px",
lg: "1024px",
xl: "1280px"
}
}
