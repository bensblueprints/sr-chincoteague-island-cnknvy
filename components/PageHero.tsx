import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/80" />
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {eyebrow && (
          <span className="inline-block text-accent text-sm uppercase tracking-[0.25em] mb-4 fade-up">
            {eyebrow}
          </span>
        )}
        <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 fade-up-delay-1">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto fade-up-delay-2">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
