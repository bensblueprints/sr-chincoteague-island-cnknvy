import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CallButton } from "@/components/CallButton";
import { site } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const source = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Experience the magic of Chincoteague Island with Captain Randy. Wild pony boat tours, nature excursions, Pony Swim events, Wallops Island rocket launches, and guided waterfowl hunting on Virginia's Eastern Shore.",
  keywords: [
    "Chincoteague Island",
    "wild pony tours",
    "Captain Randy",
    "Pony Swim",
    "boat tours",
    "Virginia Eastern Shore",
    "Assateague",
    "Wallops Island",
    "waterfowl hunting",
  ],
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description:
      "Wild pony boat tours, nature excursions, and guided hunts with Captain Randy on Chincoteague Island, Virginia.",
    url: "https://chincoteagueislandadventures.com",
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${source.variable} h-full antialiased`}>
      <head>
        {/* Google Ads tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18168237989" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-18168237989');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CallButton />
      </body>
    </html>
  );
}
