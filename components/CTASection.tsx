import { site } from "@/lib/site";

export function CTASection({
  heading = "Ready for Your Adventure?",
  body = "Book your Chincoteague Island tour today and experience the beauty of Virginia's Eastern Shore with Captain Randy.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="bg-dark py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white mb-6">
          {heading}
        </h2>
        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">{body}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent hover:bg-accent-light text-dark font-bold text-sm uppercase tracking-wider rounded-lg transition-all hover:shadow-xl hover:shadow-accent/25"
          >
            Book Now
          </a>
          <a
            href={site.phoneHref}
            className="px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-all hover:bg-white/10"
          >
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
