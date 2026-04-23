import Image from "next/image";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

const events = [
  {
    title: "Wallops Island Rocket Launches",
    image: "/assets/images/image-12.webp",
    body:
      "Chincoteague sits just minutes from NASA's Wallops Flight Facility, one of the oldest launch sites in the United States. When a rocket is scheduled, Captain Randy takes you out to the open water for a front-row view you won't find anywhere else.",
    note: "Scheduled around NASA launch windows. Duration varies with the event.",
  },
  {
    title: "Fireworks From the Water",
    image: "/assets/images/image-15.webp",
    body:
      "Watch the fireworks from the best seat on the Eastern Shore — the water. We time the run around the event so you arrive with the show and drift home under the afterglow.",
    note: "On request, timed around local fireworks events. Duration varies.",
  },
  {
    title: "Photography Charters",
    image: "/assets/images/image-11.webp",
    body:
      "A dedicated charter positioned for light, lines, and patience. Captain Randy works the boat for the shot — wild ponies, coastal landscapes, marine life, golden hour.",
    note: "By request. We'll tailor the launch window to the light and the subject.",
  },
];

export const metadata = {
  title: "Pony Swim & Island Events",
  description:
    "Witness the world-famous Chincoteague Pony Swim from the water, plus on-request rocket launches, fireworks, and photography charters with Captain Randy.",
};

export default function PonySwimPage() {
  return (
    <>
      <PageHero
        eyebrow="Island Traditions"
        title="Pony Swim & Island Events"
        subtitle="Witness the world-famous Chincoteague Pony Swim from the water, and catch rocket launches, fireworks, and photography charters on request."
        image="/assets/images/image-4.webp"
      />

      {/* Pony Swim */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/image-4.webp"
              alt="The Chincoteague Pony Swim"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="inline-block text-accent text-sm uppercase tracking-[0.25em]">
              Annual Tradition
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-primary mt-3 mb-6">
              The Chincoteague Pony Swim
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every July, the famous Chincoteague wild ponies swim across the channel from
              Assateague Island — a tradition that has captivated visitors for nearly a
              century. It&apos;s one of the most iconic wildlife events on the East Coast.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Captain Randy offers the best vantage point on the water. Watch from the
              comfort of the boat as the &ldquo;Saltwater Cowboys&rdquo; guide the herd
              across the channel. You&apos;ll be closer to the action than anyone on shore.
            </p>
            <p className="text-primary font-semibold">
              The Pony Swim takes place on the last Wednesday of July each year. Book
              early — these charters sell out months in advance.
            </p>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-20 md:py-28 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-accent text-sm uppercase tracking-[0.25em]">
              Special Events
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white mt-3">
              On-Request Charters
            </h2>
            <p className="mt-4 text-white/70">
              Special event charters run on the event&apos;s schedule — we don&apos;t post a
              set duration because it depends on what&apos;s happening. Call or text Susan to
              set one up.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((e) => (
              <article
                key={e.title}
                className="bg-primary-light rounded-2xl overflow-hidden shadow-lg flex flex-col"
              >
                <div className="relative h-56">
                  <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-3">
                    {e.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed flex-1">{e.body}</p>
                  <p className="mt-6 pt-4 border-t border-white/10 text-accent text-xs italic">
                    {e.note}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-light text-dark font-bold text-sm uppercase tracking-wider rounded-lg transition-all"
            >
              Call Susan — {site.phone}
            </a>
          </div>
        </div>
      </section>

      <CTASection
        heading="Don't Miss Out"
        body="Pony Swim charters and special event tours sell out fast. Reach out to reserve your spot."
      />
    </>
  );
}
