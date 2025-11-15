export default function CTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto max-w-3xl text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Be the first to try FlowMate
        </h2>
        <p className="text-lg text-neutral-600 mb-8">
          Launching soon — join the waitlist to get early access.
        </p>
        <button className="inline-flex items-center justify-center font-medium transition px-6 py-4 text-lg bg-brand-primary text-white hover:bg-neutral-800 rounded-lg">
          Join the waitlist
        </button>
      </div>
    </section>
  );
}
