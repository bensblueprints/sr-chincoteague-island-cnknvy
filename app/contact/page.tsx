import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "./ContactForm";

export const metadata = {
  title: "Contact & Book Your Tour",
  description:
    "Ready for your Chincoteague adventure? Call or text Susan at (757) 894-5964, book online at chincoteagueislandadventures.com, or send a request here.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact & Book Your Tour"
        subtitle="Ready for your Chincoteague adventure? Reach out to book your tour or ask any questions."
        image="/assets/images/image-8.webp"
      />

      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
          {/* Info column */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <h3 className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-2">
                Phone
              </h3>
              <a
                href={site.phoneHref}
                className="block text-2xl font-bold text-primary hover:text-accent transition-colors"
              >
                {site.phone}
              </a>
              <p className="mt-1 text-sm text-gray-500">
                Call or text Susan, Captain Randy&apos;s wife.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <h3 className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-2">
                Email
              </h3>
              <a
                href={`mailto:${site.email}`}
                className="block text-base font-semibold text-primary hover:text-accent transition-colors break-all"
              >
                {site.email}
              </a>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <h3 className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-2">
                Dock Location
              </h3>
              <p className="text-base font-semibold text-primary">{site.dock}</p>
              <p className="text-sm text-gray-600">{site.city}</p>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <h3 className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-2">
                Tour Season
              </h3>
              <p className="text-base font-semibold text-primary">{site.season}</p>
              <p className="text-sm text-gray-600">
                Hunting: {site.huntingSeason}
              </p>
            </div>

            <div className="bg-primary text-white rounded-2xl p-7 shadow-sm">
              <h3 className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-2">
                Book Online
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Your tour can be booked online or by calling Susan, wife of Captain
                Randy, at {site.phone} if you have any questions.
              </p>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-5 py-3 bg-accent hover:bg-accent-light text-dark font-bold text-sm uppercase tracking-wider rounded-lg transition-all"
              >
                Book Now
              </a>
            </div>
          </aside>

          {/* Form column */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 md:p-10 shadow-md">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-primary mb-6">
              Send a Booking Request
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Cancellation policy */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md border-l-4 border-accent">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-primary font-bold mb-4">
              Cancellation Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              <strong>Boat tours:</strong> Tours must be cancelled by phone or text message to{" "}
              <a href={site.phoneHref} className="text-accent font-semibold hover:underline">
                {site.phone}
              </a>{" "}
              at least <strong>24 hours prior</strong> to the start of the tour.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm italic">
              Hunting cancellation policy coming soon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
