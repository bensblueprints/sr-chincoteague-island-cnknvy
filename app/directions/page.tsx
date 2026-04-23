import Image from "next/image";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Directions — Find the Dock",
  description:
    "Directions to Captain Randy's dock at 4436 Williams Lane, Chincoteague Island, VA. Call Susan at (757) 894-5964 if you need help finding us.",
};

export default function DirectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Directions"
        title="Finding the Dock"
        subtitle="Captain Randy's private dock on Chincoteague Island."
        image="/assets/images/image-13.webp"
      />

      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl text-primary font-bold mb-4">
              Dock Address
            </h2>
            <p className="text-lg text-gray-800 font-semibold">{site.dock}</p>
            <p className="text-gray-700">{site.city}</p>

            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                `${site.dock}, ${site.city}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-accent hover:bg-accent-light text-dark font-bold text-sm uppercase tracking-wider rounded-lg transition-all"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-md min-h-[300px]">
            <Image
              src="/assets/images/directions-map.png"
              alt="Map to the dock"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="font-[family-name:var(--font-heading)] text-xl text-primary font-bold mb-3">
              From Northern Virginia / Washington, DC
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Follow US-50 E / US-301 N across the Bay Bridge toward Ocean City, MD. Stay
              on US-50 E for 68 miles to US-13 S / Salisbury Bypass and continue for 39
              miles. Turn left onto VA-175 E / Chincoteague Road for 10 miles (across the
              causeway and onto the island). Turn right onto Main Street, then left onto
              Church Street. Go 1 mile to Piney Island Road and follow to Williams Lane on
              the right. Parking is available in the lot in front of the dock.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="font-[family-name:var(--font-heading)] text-xl text-primary font-bold mb-3">
              From Southern Virginia / Richmond
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Take I-64 W / I-95 N / I-64 E and merge onto I-64 E / Norfolk. Take Exit 282
              to merge onto US-13 N toward Chesapeake Bay / Bridge Tunnel and continue on
              US-13 N for 88 miles. Turn right onto VA-175 E / Chincoteague Road for 10
              miles (across the causeway and onto the island). Turn right onto Main
              Street, then left onto Church Street. Go 1 mile to Piney Island Road and
              follow to Williams Lane on the right. Parking is available in the lot in
              front of the dock.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-primary text-white rounded-2xl p-8 md:p-10 shadow-md text-center">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-3">
              Need Help Finding Us?
            </h3>
            <p className="text-white/80 leading-relaxed mb-5">
              Call <strong>Susan</strong>, wife of Captain Randy, at the number below and
              she&apos;ll guide you right to the dock.
            </p>
            <a
              href={site.susan.phoneHref}
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-light text-dark font-bold text-sm uppercase tracking-wider rounded-lg transition-all"
            >
              {site.susan.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
