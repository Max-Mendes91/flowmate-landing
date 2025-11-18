export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FlowMate",
    url: "https://flowmate.com",
    logo: "https://flowmate.com/icon.png",
    description:
      "AI assistant for Gmail, Outlook, Google Calendar, Slack, WhatsApp, and Telegram",
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FlowMate",
    url: "https://flowmate.com",
    description:
      "FlowMate lets you type one natural-language message and automatically sends emails, schedules meetings, posts to Slack, and connects with WhatsApp & Telegram.",
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FlowMate",
    applicationCategory: "BusinessApplication",
    offers: [
      {
        "@type": "Offer",
        name: "Free Plan",
        price: "0",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Pro Plan",
        price: "9.99",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "MAX Plan",
        price: "19.99",
        priceCurrency: "EUR",
      },
    ],
    operatingSystem: "Web, Chrome Extension",
    description:
      "AI assistant that automates email, calendar scheduling, Slack, WhatsApp, and Telegram communication through natural language commands",
    featureList: [
      "Email automation for Gmail and Outlook",
      "Automatic calendar scheduling",
      "Slack integration and workflows",
      "WhatsApp automation",
      "Telegram integration",
      "Natural language processing",
      "Custom workflows",
      "API access",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
    </>
  );
}
