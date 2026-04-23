import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Guided Waterfowl Hunting",
  description:
    "Schedule a guided waterfowl hunt with Captain Randy in the waters surrounding Chincoteague and Assateague Island. Geese, brant, puddle ducks, divers, and swan (by lottery).",
};

const species = [
  "Geese",
  "Brant",
  "Puddle Ducks",
  "Divers",
  "Swan (by lottery — hunters must possess a swan permit)",
];

const requirements = [
  "All required federal hunting licenses",
  "All required state hunting licenses",
  "Federal and state stamps",
  "HIP (Harvest Information Program) number",
];

export default function HuntingPage() {
  return (
    <>
      <PageHero
        eyebrow="Guided Waterfowl Hunting"
        title="Hunt the Eastern Shore"
        subtitle="Guided hunts in the waters surrounding Chincoteague and Assateague Island with Captain Randy."
        image="/assets/images/hunting-waterfowl.jpg"
      />

      {/* Intro */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            Schedule a guided waterfowl hunt in the waters surrounding Chincoteague and
            Assateague Island. Opportunities vary depending on the migratory patterns of
            the birds. Previous yields have included geese, brant, puddle ducks, and divers.
            Hunters possessing a swan permit may also have the chance to harvest a swan,
            which is by lottery.
          </p>
        </div>
      </section>

      {/* Species + Pricing */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-primary font-bold mb-6">
              Game Species
            </h2>
            <ul className="space-y-3">
              {species.map((s) => (
                <li key={s} className="flex items-start gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 10.586 8.707 9.293z" />
                  </svg>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary rounded-2xl p-8 md:p-10 text-white shadow-md">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-6 text-accent">
              Pricing
            </h2>
            <p className="text-4xl md:text-5xl font-bold mb-2">$200</p>
            <p className="text-white/70">per person, per day</p>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/80 leading-relaxed">
                A <strong>50% deposit</strong> is required at the time of reservation.
                Prime dates fill up fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-primary font-bold mb-4">
            Required Licenses
          </h2>
          <p className="text-gray-700 mb-6">
            Each hunter must have all of the following before leaving for the hunt:
          </p>
          <ul className="space-y-3 bg-white rounded-2xl p-8 shadow-sm">
            {requirements.map((r) => (
              <li key={r} className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gray-500 italic">
            All licenses, stamps, and HIP numbers must be obtained before leaving for the
            hunt.
          </p>
        </div>
      </section>

      {/* Book */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold mb-6">
            Book Your Hunt
          </h2>
          <p className="text-white/80 mb-8 leading-relaxed">
            Please call to book your hunt. Prime dates fill up fast — a 50% deposit is
            required to reserve.
          </p>
          <a
            href={site.huntingPhoneHref}
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-light text-dark font-bold text-sm uppercase tracking-wider rounded-lg transition-all"
          >
            Call {site.huntingPhone}
          </a>
        </div>
      </section>

      {/* Find us */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md border-l-4 border-accent">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl text-primary font-bold mb-3">
              Need Help Finding Us?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Call <strong>Susan</strong>, wife of Captain Randy, at{" "}
              <a
                href={site.susan.phoneHref}
                className="text-accent font-semibold hover:underline"
              >
                {site.susan.phone}
              </a>{" "}
              and she&apos;ll guide you right to the dock.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
