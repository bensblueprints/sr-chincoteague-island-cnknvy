import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

export const metadata = {
  title: "Brochure — Chincoteague Island Adventures",
  description:
    "Everything you need to know about Chincoteague Island Adventures boat tours, seasonal attractions, Captain Randy, and the famous Chincoteague wild ponies.",
};

const wildlife = [
  "Osprey, bald eagles, pelicans & egrets",
  "Oyster catchers, ducks & geese",
  "Dolphins, stingrays & a variety of shorebirds",
  "The famous Chincoteague wild ponies",
];

export default function BrochurePage() {
  return (
    <>
      <PageHero
        eyebrow="Brochure"
        title="Chincoteague Island Adventures"
        subtitle="Boat Tours · Seasonal Attractions · Guided Hunts"
        image="/assets/images/image-0.webp"
      />

      {/* Quick contact strip */}
      <section className="bg-primary text-white py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
          <div>
            <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Address</p>
            <p className="font-semibold">{site.dock}, {site.city}</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/20" />
          <div>
            <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Phone</p>
            <a href={site.phoneHref} className="font-semibold text-accent hover:underline">
              {site.phone}
            </a>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/20" />
          <div>
            <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Website</p>
            <p className="font-semibold text-sm">www.chincoteagueislandadventures.com</p>
          </div>
        </div>
      </section>

      {/* Island Boat Tours */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block text-accent text-sm uppercase tracking-[0.25em] mb-3">
              Island Boat Tours
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-primary mb-6">
              Experience Chincoteague from the Water
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Experience the unique landscape and marsh habitats that are Chincoteague Island and
              Assateague Island on a boat tour with Captain and Island native, Randy Birch.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Take a 1½–2 hour guided tour to see wildlife in its natural habitat, learn a little
              about the geography and history of the two islands, and view the Assateague Lighthouse
              from the water.
            </p>
            <ul className="space-y-2 mb-6">
              {wildlife.map((w) => (
                <li key={w} className="flex items-start gap-3 text-gray-700">
                  <span className="text-accent mt-1">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                      <path d="M13.485 1.929L5.5 9.914 2.515 6.929 1.1 8.343l4.4 4.4 9.4-9.4z" />
                    </svg>
                  </span>
                  {w}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 italic">
              As nature is wild and unpredictable, sightings are not guaranteed.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/images/image-1.webp"
              alt="Wildlife on Chincoteague Island"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tour Schedule */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-primary mb-8 text-center">
            Tour Times
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { time: "Mid-Morning", note: "Daily" },
              { time: "Early Afternoon", note: "Daily" },
              { time: "Pre-Sunset", note: "Daily" },
            ].map((t) => (
              <div key={t.time} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <p className="font-[family-name:var(--font-heading)] text-xl font-bold text-primary mb-1">
                  {t.time}
                </p>
                <p className="text-accent text-sm font-semibold uppercase tracking-wider">{t.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-gray-600 text-sm">
            Tours available <strong>7 days a week, including holidays.</strong> Sunrise tours
            available upon request. Reservations can be made online or by calling{" "}
            <a href={site.phoneHref} className="text-accent font-semibold hover:underline">
              {site.phone}
            </a>.
          </p>
        </div>
      </section>

      {/* The Captain and His Boat */}
      <section className="py-20 md:py-28 bg-dark overflow-hidden relative">
        <div className="absolute inset-0 opacity-15">
          <Image src="/assets/images/image-6.webp" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/5] max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/captain-randy.jpeg"
              alt="Captain Randy Birch"
              fill
              sizes="(max-width: 768px) 80vw, 40vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="inline-block text-accent text-sm uppercase tracking-[0.25em] mb-3">
              The Captain &amp; His Boat
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white mb-6">
              Captain Randy Birch
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Randy Birch is a true &ldquo;Teaguer&rdquo; — he was born and raised on Chincoteague Island
              and has made his living on and around the island his entire life.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">
              He is a waterman by trade, harvesting hard and soft shell crabs, minnows and horseshoe
              crabs during the summer, and guiding waterfowl hunts in the winter. He knows the waters
              intimately and lends a unique authenticity to the tour experience.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              Captain Randy&apos;s comfortable 24&rsquo; Carolina Skiff is Coast Guard approved to carry up
              to 6 passengers. Tours on and around the waters of Virginia&apos;s Chincoteague and
              Assateague Islands depart from a private dock on Chincoteague&apos;s east side.
            </p>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/assets/images/carolina-skiff.jpeg"
                alt="Captain Randy's 24' Carolina Skiff"
                fill
                sizes="(max-width: 768px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Attraction — Pony Swim */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
            <Image
              src="/assets/images/image-4.webp"
              alt="Chincoteague Pony Swim"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="inline-block text-accent text-sm uppercase tracking-[0.25em] mb-3">
              Seasonal Attraction
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-primary mb-6">
              Pony Swim Charters
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Boat charters are available for the annual Pony Swim. Rates and schedule differ —
              contact us for more information and dates!
            </p>
            <Link
              href="/pony-swim"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-light text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-all"
            >
              Pony Swim Details →
            </Link>
          </div>
        </div>
      </section>

      {/* Captain's Comments — Cancellation */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary mb-4">
            Captain&apos;s Comments
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Should the captain initiate a cancellation due to inclement weather or mechanical issues,
            either (1) a full refund will be issued, or (2) if a mutually convenient time can be
            arranged, the trip will be re-scheduled.
          </p>
          <Link
            href="/cancellation-policy"
            className="text-accent hover:underline text-sm font-semibold"
          >
            View full cancellation policy →
          </Link>
        </div>
      </section>

      {/* References */}
      <section className="py-20 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-primary mb-6">
            References
          </h2>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">
            Visit our website or our Facebook page and TripAdvisor to read reviews from satisfied
            customers, see photos of recent events, view a map of our dock location, and get
            directions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#34E0A1] hover:bg-[#2bc98f] text-dark font-bold text-sm uppercase tracking-wider rounded-lg transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="6.5" cy="14.5" r="3.5" />
                <circle cx="17.5" cy="14.5" r="3.5" />
                <path d="M12 6C8.686 6 5.813 7.637 4.09 10.165A5.47 5.47 0 0 1 6.5 9.5c1.667 0 3.15.745 4.136 1.914A4.013 4.013 0 0 1 12 11c.487 0 .955.075 1.364.414C14.35 10.245 15.833 9.5 17.5 9.5c.846 0 1.641.213 2.336.587C18.1 7.592 15.253 6 12 6z" />
                <circle cx="12" cy="4" r="2" />
              </svg>
              Review on TripAdvisor
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-all"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
