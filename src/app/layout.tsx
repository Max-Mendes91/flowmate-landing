import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BackgroundLines from "@/components/BackgroundLines";
import Header from "@/components/Header";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FlowMate – AI Assistant for Email, Calendar & Slack Automation",
  description:
    "FlowMate lets you type one natural-language message and automatically sends emails, schedules meetings, and posts to Slack.",
  metadataBase: new URL("https://flowmate.click"),
  keywords: [
    "AI assistant",
    "email automation",
    "calendar scheduling",
    "Slack integration",
    "productivity",
    "Gmail",
    "Outlook",
    "Google Calendar",
    "workflow automation",
    "AI productivity tool",
  ],
  authors: [{ name: "FlowMate Team" }],
  alternates: {
    canonical: "https://flowmate.click",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "FlowMate – AI Assistant for Email, Calendar & Slack Automation",
    description:
      "AI assistant for Gmail, Outlook, Google Calendar, and Slack.",
    url: "https://flowmate.click",
    siteName: "FlowMate",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "FlowMate - AI assistant for email, calendar & Slack",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowMate – AI Assistant for Email, Calendar & Slack Automation",
    description:
      "FlowMate lets you type one natural-language message and automatically sends emails, schedules meetings, and posts to Slack.",
    images: ["/og.jpg"],
    creator: "@flowmateai",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-gradient-to-b from-[#0A0A0B] via-[#0B0B0D] to-[#050506] text-text-primary antialiased font-sans min-h-screen relative">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gold focus:text-black focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        <StructuredData />
        <BackgroundLines />
        <Header />
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
