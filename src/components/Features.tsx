export default function Features() {
  const features = [
    {
      title: "Send emails with one sentence",
      desc: "Drafts and sends emails through Gmail or Outlook using your tone and context.",
    },
    {
      title: "Schedule meetings automatically",
      desc: "Understands dates, times, durations, and availability across time zones.",
    },
    {
      title: "Post updates to Slack",
      desc: "Notify channels, create reminders, and trigger workflows without opening Slack.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-neutral-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How FlowMate works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-neutral-200 p-6 bg-white shadow-sm hover:shadow transition"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-neutral-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
