import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-cream px-6">
      <div className="text-center max-w-lg">
        <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">404</p>
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          Looks like you drifted off course. Let&apos;s get you back to shore.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-accent hover:bg-accent-light text-dark font-bold text-sm uppercase tracking-wider rounded-lg transition-all"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
