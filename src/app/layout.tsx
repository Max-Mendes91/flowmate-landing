import type { Metadata } from "next";
import BackgroundLines from "@/components/BackgroundLines";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowMate – AI for email, calendar & Slack",
  description:
    "FlowMate lets you type one natural-language message and automatically sends emails, schedules meetings, and posts to Slack.",
  metadataBase: new URL("https://flowmate.com"),
  openGraph: {
    title: "FlowMate",
    description:
      "AI assistant for Gmail, Outlook, Google Calendar, and Slack.",
    url: "https://flowmate.com",
    siteName: "FlowMate",
    images: ["/og.png"],
    type: "website",
  },
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
        <BackgroundLines />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
