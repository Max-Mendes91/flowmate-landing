import CTA from "./CTA";

export default function Hero() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto max-w-4xl text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          AI that sends emails, schedules meetings, and updates Slack — all
          from one prompt.
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
          FlowMate understands natural language across Gmail, Outlook, Google
          Calendar, and Slack.
        </p>
        <button className="inline-flex items-center justify-center font-medium transition px-6 py-4 text-lg bg-brand-primary text-white hover:bg-neutral-800 rounded-lg">
          Join the waitlist
        </button>
      </div>
    </section>
  );
}
