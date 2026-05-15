import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Brochure — Chincoteague Island Adventures",
  description:
    "View and download the Chincoteague Island Adventures brochure — boat tours, seasonal attractions, and Captain Randy.",
};

export default function BrochurePage() {
  return (
    <>
      <PageHero
        eyebrow="Brochure"
        title="Chincoteague Island Adventures"
        subtitle="View our brochure below or download a copy to keep."
        image="/assets/images/image-0.webp"
      />

      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Download button */}
          <div className="flex justify-center mb-10">
            <a
              href="/assets/brochure.pdf"
              download="Chincoteague-Island-Adventures-Brochure.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent-light text-dark font-bold text-sm uppercase tracking-wider rounded-lg transition-all hover:shadow-xl hover:shadow-accent/25"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Download Brochure (PDF)
            </a>
          </div>

          {/* PDF viewer */}
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
            <iframe
              src="/assets/brochure.pdf"
              className="w-full"
              style={{ height: "80vh", minHeight: "600px" }}
              title="Chincoteague Island Adventures Brochure"
            />
          </div>

          {/* Fallback link */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Can&apos;t see the brochure?{" "}
            <a
              href="/assets/brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Open it in a new tab →
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
