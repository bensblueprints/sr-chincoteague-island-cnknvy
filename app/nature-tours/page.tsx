import Image from "next/image";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

const tours = [
  {
    id: "sunrise",
    title: "Sunrise Pony Tour",
    image: "/assets/images/image-2.webp",
    tag: "By Request",
    body:
      "Start your day on the water as the sun rises over Assateague. This early morning tour offers the best chance to see wild ponies grazing at the water's edge, dolphins playing in the channel, and shorebirds beginning their day. The light is spectacular for photography.",
    duration: "1½–2 hours",
    guests: "6 guests",
    cta: { label: "Call to Request", type: "call" as const },
  },
  {
    id: "expedition",
    title: "Wild Pony Expedition",
    image: "/assets/images/image-3.webp",
    tag: "Daily Tour",
    body:
      "Our regular daily tour. Captain Randy takes in all the wildlife we can find across the marshes and back bays of Chincoteague and Assateague — ponies, dolphins, shorebirds, and more. The ponies don't run on a schedule, but Captain Randy knows where they like to be.",
    duration: "1½–2 hours",
    guests: "6 guests",
    cta: { label: "Book This Tour", type: "book" as const },
  },
  {
    id: "sunset",
    title: "Sunset Cruise",
    image: "/assets/images/image-5.webp",
    tag: "Birders & Sunsets",
    body:
      "A quieter late-afternoon cruise focused on birdwatching and catching the sunset from the water. Ideal for bird enthusiasts, photographers chasing golden hour, or anyone who wants to end the day with water, sky, and Captain Randy's stories.",
    duration: "1½–2 hours",
    guests: "6 guests",
    cta: { label: "Book This Tour", type: "book" as const },
  },
];

const wildlife = [
  {
    emoji: "🐎",
    text: "Wild ponies, white-tailed deer & sika elk",
  },
  {
    emoji: "🐬",
    text: "Dolphins, stingrays, blue claw crabs & horseshoe crabs",
  },
  {
    emoji: "🏠",
    text: "Assateague Lighthouse viewed from the water",
  },
  {
    emoji: "🦅",
    text: "Osprey, bald eagles, pelicans, egrets & shorebirds",
  },
];

export const metadata = {
  title: "Nature Tours — Wild Pony Boat Excursions",
  description:
    "Wild pony tours and nature boat excursions with Captain Randy through the back bays of Chincoteague and Assateague Islands. Sunrise, daily expedition, and sunset cruises.",
};

export default function NatureToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Nature Tours"
        title="On the Water with Captain Randy"
        subtitle="Wild pony tours and nature boat excursions through the back bays of Chincoteague and Assateague Islands."
        image="/assets/images/image-0.webp"
      />

      {/* Booking info */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-md border-l-4 border-accent">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-primary font-bold mb-4">
              Booking Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Each tour requires a minimum of <strong>2 guests</strong> to depart. After 2 guests
              are booked, additional guests can be added one at a time.
            </p>
            <p className="text-gray-700 leading-relaxed mb-3">
              Want a <strong>private tour</strong>? Book all 6 slots to have the boat to yourself.
            </p>
            <p className="text-accent font-semibold">
              {site.durationNote}
            </p>
          </div>
        </div>
      </section>

      {/* Tours */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-accent text-sm uppercase tracking-[0.25em]">
              Tour Options
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-primary mt-3">
              Choose Your Adventure
            </h2>
          </div>

          <div className="space-y-10">
            {tours.map((t, idx) => (
              <article
                key={t.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg grid md:grid-cols-2 gap-0 ${
                  idx % 2 === 1 ? "md:[&>.img]:order-2" : ""
                }`}
              >
                <div className="img relative h-72 md:h-auto min-h-[320px]">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-accent text-dark text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {t.tag}
                  </span>
                </div>
                <div className="p-8 md:p-12 flex flex-col">
                  <h3 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-primary mb-4">
                    {t.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">{t.body}</p>
                  <div className="flex flex-wrap gap-6 my-6 text-sm">
                    <span className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 3" strokeLinecap="round" />
                      </svg>
                      {t.duration}
                    </span>
                    <span className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m6-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm6 0a4 4 0 1 1-8 0" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Up to {t.guests}
                    </span>
                  </div>
                  {t.cta.type === "book" ? (
                    <a
                      href={site.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-light text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-all"
                    >
                      Book This Tour
                    </a>
                  ) : (
                    <a
                      href={site.phoneHref}
                      className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent-light text-dark font-bold text-sm uppercase tracking-wider rounded-lg transition-all"
                    >
                      Call to Request — {site.phone}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About the boat */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/images/carolina-skiff.jpeg"
              alt="Captain Randy's 24' Carolina Skiff"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="inline-block text-accent text-sm uppercase tracking-[0.25em]">
              About the Boat
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white mt-3 mb-6">
              Comfortable, Coast Guard Approved
            </h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Captain Randy&apos;s comfortably equipped 24&rsquo; Carolina Skiff is Coast Guard
              approved to carry up to 6 passengers. Tours depart from a private dock on
              Chincoteague&apos;s east side.
            </p>
            <p className="text-white/80 leading-relaxed">
              Take a guided tour to see wildlife in its natural habitat, learn about the
              geography and history of the two islands, and view the Assateague Lighthouse
              from the water.
            </p>
          </div>
        </div>
      </section>

      {/* Wildlife */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-accent text-sm uppercase tracking-[0.25em]">
              Wildlife
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-primary mt-3">
              What You Could See
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wildlife.map((w) => (
              <div
                key={w.text}
                className="bg-white rounded-2xl p-8 shadow-sm flex items-start gap-5"
              >
                <span className="text-4xl flex-shrink-0 leading-none">{w.emoji}</span>
                <p className="text-gray-700 leading-relaxed text-lg">{w.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-500 italic max-w-2xl mx-auto">
            Bird and mammal sightings vary by season. As nature is wild and unpredictable,
            sightings are not guaranteed.
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold text-primary mb-6">
            Tour Schedule
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li>One morning and two afternoon tours available each day</li>
            <li>Tours are available 7 days a week, including holidays</li>
            <li>All tours depart from {site.dock}, Chincoteague Island</li>
          </ul>
        </div>
      </section>

      <CTASection heading="Book Your Tour" body="Call Susan at (757) 894-5964 or book online — spots fill up fast." />
    </>
  );
}
