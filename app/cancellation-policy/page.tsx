import Link from "next/link";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Cancellation Policy",
  description:
    "Cancellation policy for Chincoteague Island Adventures boat tours and guided hunts with Captain Randy.",
};

export default function CancellationPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Cancellation Policy"
        subtitle="How and when to cancel a booking with Chincoteague Island Adventures."
        image="/assets/images/image-13.webp"
      />

      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 space-y-10">
          {/* Boat tours */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md border-l-4 border-accent">
            <span className="inline-block text-accent text-xs uppercase tracking-[0.25em] font-semibold">
              Boat Tours
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-primary font-bold mt-2 mb-5">
              Nature Tours, Pony Swim &amp; Special Events
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tours must be cancelled <strong>at least 24 hours prior to the start of the
              tour</strong>. Cancellations can be made by phone or text message to:
            </p>
            <p className="text-lg">
              <a
                href={site.phoneHref}
                className="text-accent font-bold hover:underline"
              >
                {site.phone}
              </a>
            </p>
            <p className="mt-5 text-sm text-gray-500 italic">
              Cancellations received less than 24 hours before the scheduled departure
              may not be refundable. Please call us — we&apos;ll always work with you on
              weather-related changes.
            </p>
          </div>

          {/* Hunting */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md border-l-4 border-accent/40">
            <span className="inline-block text-accent text-xs uppercase tracking-[0.25em] font-semibold">
              Guided Hunting
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-primary font-bold mt-2 mb-5">
              Waterfowl Hunts
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A <strong>50% deposit</strong> is required at the time of reservation.
              Hunting cancellation details will be finalized here soon — in the meantime,
              please call Captain Randy directly to discuss:
            </p>
            <p className="text-lg">
              <a
                href={site.huntingPhoneHref}
                className="text-accent font-bold hover:underline"
              >
                {site.huntingPhone}
              </a>
            </p>
          </div>

          {/* Weather */}
          <div className="bg-primary text-white rounded-2xl p-8 md:p-10 shadow-md">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-4">
              Weather
            </h2>
            <p className="text-white/85 leading-relaxed">
              Safety on the water comes first. If weather or sea conditions make a trip
              unsafe, Captain Randy may postpone or cancel a tour. In that case we&apos;ll
              reschedule whenever possible, or issue a full refund if we can&apos;t.
            </p>
          </div>

          {/* Contact block */}
          <div className="text-center pt-4">
            <p className="text-gray-600 mb-5">
              Questions about a cancellation or a booking? Call or text Susan — she
              handles the schedule and will sort it out.
            </p>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-light text-dark font-bold text-sm uppercase tracking-wider rounded-lg transition-all"
            >
              Call {site.phone}
            </a>
            <p className="mt-6 text-sm">
              <Link
                href="/contact"
                className="text-primary hover:text-accent underline underline-offset-4"
              >
                Or send a message through the contact page →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
