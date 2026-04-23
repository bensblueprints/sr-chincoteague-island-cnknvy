import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { CTASection } from "@/components/CTASection";

const experiences = [
  {
    href: "/nature-tours",
    title: "Nature Tours",
    image: "/assets/images/image-0.webp",
    copy: "Wild pony tours and nature boat excursions through the back bays of Chincoteague. Sunrise, sunset, and Wild Pony Expedition tours with Captain Randy.",
  },
  {
    href: "/pony-swim",
    title: "Pony Swim & Events",
    image: "/assets/images/image-4.webp",
    copy: "Witness the world-famous Chincoteague Pony Swim from the water, plus on-request rocket launches, fireworks, and photography charters.",
  },
  {
    href: "/hunting",
    title: "Guided Hunting",
    image: "/assets/images/hunting-waterfowl.jpg",
    copy: "Schedule a guided waterfowl hunt in the waters surrounding Chincoteague and Assateague Island with Captain Randy.",
  },
];

const reviews = [
  {
    quote:
      "Captain Randy was amazing! He knew exactly where to find the ponies and dolphins. The sunset tour was the highlight of our entire trip.",
    name: "Sarah M.",
    source: "TripAdvisor",
  },
  {
    quote:
      "We've done this tour three years in a row now. Captain Randy's knowledge of the island and its wildlife is unmatched. Highly recommend!",
    name: "Mike & Linda T.",
    source: "TripAdvisor",
  },
  {
    quote:
      "The kids were thrilled to see the wild ponies so close. Captain Randy made it educational and fun. Will definitely be back!",
    name: "Jennifer K.",
    source: "TripAdvisor",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-accent mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero with video */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/images/image-0.webp"
            className="w-full h-full object-cover"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/70" />
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <span className="inline-block text-accent text-sm uppercase tracking-[0.3em] mb-6 fade-up">
            Chincoteague Island, Virginia
          </span>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-[1.05] fade-up-delay-1">
            Discover Chincoteague
            <span className="block text-accent">Island&apos;s Wild Side</span>
          </h1>
          <p className="text-white/85 text-lg md:text-xl mb-10 max-w-2xl mx-auto fade-up-delay-2">
            Wild pony tours, nature boat excursions, and guided hunts with Captain
            Randy — a lifelong island native and your expert guide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up-delay-3">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent hover:bg-accent-light text-dark font-bold text-sm uppercase tracking-wider rounded-lg transition-all hover:shadow-xl hover:shadow-accent/25"
            >
              Book Your Adventure
            </a>
            <Link
              href="/nature-tours"
              className="px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-bold text-sm uppercase tracking-wider rounded-lg transition-all hover:bg-white/10"
            >
              Explore Tours
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      {/* Our Experiences */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-accent text-sm uppercase tracking-[0.25em]">
              Our Experiences
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-primary mt-3">
              Your Island Adventure Awaits
            </h2>
            <p className="mt-4 text-gray-600">
              {site.durationNote}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((e) => (
              <Link
                key={e.href}
                href={e.href}
                className="group block relative rounded-2xl overflow-hidden h-80 shadow-lg"
              >
                <Image
                  src={e.image}
                  alt={e.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {e.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">{e.copy}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Your Guide */}
      <section className="relative bg-dark py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/assets/images/image-6.webp"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/captain-randy.jpeg"
                alt="Captain Randy"
                fill
                sizes="(max-width: 768px) 80vw, 40vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-block text-accent text-sm uppercase tracking-[0.25em]">
                Your Guide
              </span>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
                Captain Randy
              </h2>
              <blockquote className="text-white/75 text-lg leading-relaxed italic border-l-4 border-accent pl-6 mb-6">
                &ldquo;Every trip on the water is different. The ponies, the dolphins,
                the sunsets — I&apos;ve been doing this for decades and it still takes my
                breath away. There&apos;s nothing like sharing this island with folks who
                love it as much as I do.&rdquo;
              </blockquote>
              <p className="text-white/70 leading-relaxed mb-6">
                A lifelong Chincoteague Island native, Captain Randy has spent decades
                on these waters. His deep knowledge of the island&apos;s ecology, history,
                and wildlife ensures every tour is an unforgettable experience.
              </p>
              <p className="font-[family-name:var(--font-heading)] text-accent text-2xl md:text-3xl italic">
                &ldquo;{site.motto}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block text-accent text-sm uppercase tracking-[0.25em]">
              Reviews
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-primary mt-3">
              What Our Guests Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="bg-white rounded-2xl p-8 shadow-md h-full flex flex-col"
              >
                <Stars />
                <p className="text-gray-600 leading-relaxed flex-1 italic">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="font-semibold text-primary">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
