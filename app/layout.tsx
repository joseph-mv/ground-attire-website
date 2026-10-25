import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { Header } from "@/components/layout/header";
import { siteConfig } from "@/config/site";

import "./globals.css";

/*
 * Century Gothic: Regular (400) for display/headings, Bold (700) for body/labels.
 * Replace files in public/fonts to swap cuts; roles are mapped in globals.css.
 */
const centuryGothic = localFont({
  src: [
    {
      path: "../public/fonts/CenturyGothicPaneuropeanRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CenturyGothicPaneuropeanBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-century-gothic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E5DED4",
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  foundingDate: String(siteConfig.founded),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={centuryGothic.variable}>
      <body className="flex min-h-dvh flex-col">
        <script
          type="application/ld+json"
          // Escape "<" so the JSON can never close the script tag early
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <a
          href="#main"
          className="type-label bg-primary text-primary-foreground sr-only px-4 py-3 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
        >
          Skip to content
        </a>

        <Header />

        <main id="main" className="flex-1">
          {children}
        </main>

        {/* <Footer />  → components/layout/footer.tsx (wrap in .surface-dark) */}
      </body>
    </html>
  );
}
