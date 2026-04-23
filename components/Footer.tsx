import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-dark text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-white text-xl font-bold mb-4">
              {site.name}
            </h3>
            <p className="text-sm leading-relaxed">
              Experience the magic of Chincoteague Island with Captain Randy.
              Wild pony boat tours, nature excursions, and guided waterfowl hunts on
              Virginia&apos;s Eastern Shore.
            </p>
            <p className="mt-4 text-accent italic text-sm">
              &ldquo;{site.motto}&rdquo;
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Experiences
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/nature-tours" className="hover:text-accent transition-colors">
                  Nature Tours
                </Link>
              </li>
              <li>
                <Link href="/pony-swim" className="hover:text-accent transition-colors">
                  Pony Swim &amp; Events
                </Link>
              </li>
              <li>
                <Link href="/hunting" className="hover:text-accent transition-colors">
                  Guided Hunting
                </Link>
              </li>
              <li>
                <Link href="/directions" className="hover:text-accent transition-colors">
                  Directions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={site.phoneHref} className="hover:text-accent transition-colors">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-accent transition-colors break-all">
                  {site.email}
                </a>
              </li>
              <li>{site.dock}</li>
              <li>{site.city}</li>
              <li className="pt-2 text-xs text-white/50">
                Season: {site.season}
                <br />
                Hunting: {site.huntingSeason}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div className="flex gap-5">
            <Link href="/cancellation-policy" className="hover:text-accent transition-colors">
              Cancellation Policy
            </Link>
            <Link href="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
