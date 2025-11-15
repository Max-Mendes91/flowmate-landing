import type { Metadata } from "next";
import BackgroundLines from "@/components/BackgroundLines";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowMate – AI for email, calendar & Slack",
  description:
    "FlowMate lets you type one natural-language message and automatically sends emails, schedules meetings, and posts to Slack.",
  metadataBase: new URL("https://flowmate.com"),
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
    title: "FlowMate – AI for email, calendar & Slack",
    description:
      "AI assistant for Gmail, Outlook, Google Calendar, and Slack.",
    url: "https://flowmate.com",
    siteName: "FlowMate",
    images: [
      {
        url: "/og.png",
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
    title: "FlowMate – AI for email, calendar & Slack",
    description:
      "FlowMate lets you type one natural-language message and automatically sends emails, schedules meetings, and posts to Slack.",
    images: ["/og.png"],
    creator: "@flowmate",
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-gradient-to-b from-[#0A0A0B] via-[#0B0B0D] to-[#050506] text-text-primary antialiased font-sans min-h-screen relative">
        <StructuredData />
        <BackgroundLines />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
