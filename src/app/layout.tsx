import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

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
    <html lang="en" className={inter.variable}>
      <body className="bg-neutral-50 text-brand-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
