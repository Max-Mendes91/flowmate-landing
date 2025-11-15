export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FlowMate",
    url: "https://flowmate.com",
    logo: "https://flowmate.com/icon.png",
    description:
      "AI assistant for Gmail, Outlook, Google Calendar, and Slack",
    sameAs: [],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FlowMate",
    url: "https://flowmate.com",
    description:
      "FlowMate lets you type one natural-language message and automatically sends emails, schedules meetings, and posts to Slack.",
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FlowMate",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    operatingSystem: "Web, Chrome Extension",
    description:
      "AI assistant that automates email, calendar scheduling, and Slack communication through natural language commands",
    featureList: [
      "Email automation for Gmail and Outlook",
      "Automatic calendar scheduling",
      "Slack integration and workflows",
      "Natural language processing",
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
