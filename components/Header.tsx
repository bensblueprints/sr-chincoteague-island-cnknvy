"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "/nature-tours", label: "Nature Tours" },
  { href: "/pony-swim", label: "Pony Swim" },
  { href: "/hunting", label: "Hunting" },
  { href: "/brochure", label: "Brochure" },
  { href: "/directions", label: "Directions" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled || open
          ? "bg-dark/95 backdrop-blur-sm shadow-lg"
          : "bg-gradient-to-b from-dark/70 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/logos/logo-7.png"
              alt={site.name}
              width={44}
              height={44}
              className="rounded-full object-cover"
            />
            <span className="font-[family-name:var(--font-heading)] text-white font-bold text-lg leading-tight hidden sm:block">
              Chincoteague Island
              <span className="block text-accent text-sm font-normal tracking-widest uppercase">
                Adventures
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="text-white/80 hover:text-accent text-sm font-medium uppercase tracking-wider transition-colors"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-accent hover:bg-accent-light text-dark font-bold text-sm uppercase tracking-wider rounded-lg transition-all hover:shadow-lg"
            >
              Book Now
            </a>
          </nav>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-dark/95">
          <div className="px-4 py-6 space-y-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block text-white/90 hover:text-accent text-base font-medium uppercase tracking-wider"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block text-center px-5 py-3 bg-accent hover:bg-accent-light text-dark font-bold text-sm uppercase tracking-wider rounded-lg"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
