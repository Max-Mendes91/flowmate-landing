import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#050506",
          secondary: "#0B0B0D",
          tertiary: "#111113",
          gradient: {
            1: "#0A0A0B",
            2: "#0B0B0D",
            3: "#050506",
          },
        },
        text: {
          primary: "#FFFFFF",
          secondary: "rgba(255,255,255,0.75)",
          muted: "rgba(255,255,255,0.50)",
        },
        accent: {
          blue: "#4D9FFF",
          lavender: "#B39CFF",
        },
        gold: {
          DEFAULT: "#E4CFA3",
          soft: "rgba(228,207,163,0.55)",
          border: "rgba(228,207,163,0.35)",
          hover: "rgba(228,207,163,0.70)",
          glow: "rgba(228,207,163,0.18)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
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
        "5xl": "3rem",
        "6xl": "3.75rem",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
        xl: "20px",
        "2xl": "28px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)",
        "gold-glow": "0 0 20px rgba(228,207,163,0.18)",
        "blue-glow": "0 0 20px rgba(77,159,255,0.25)",
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(to bottom, #0A0A0B, #0B0B0D, #050506)",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
