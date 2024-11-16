import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { WebSite, WithContext } from "schema-dts";
import { Outfit } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/constants";

import Providers from "./providers";
type LayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/favicon/site.webmanifest",
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: "cv.jotacode.com",
    creator: "Junior Ribeiro",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: SITE_DESCRIPTION,
      },
    ],
  },
  keywords: SITE_KEYWORDS,
  creator: "jotacode",
  openGraph: {
    url: SITE_URL,
    type: "website",
    title: SITE_TITLE,
    siteName: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "pt_BR",
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: SITE_DESCRIPTION,
        type: "image/png",
      },
    ],
  },
  icons: {
    icon: "/favicon/favicon.svg",
    shortcut: "/favicon/favicon.svg",
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon/favicon-32x32.png",
      },
    ],
  },
};

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

const jsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_TITLE,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  author: {
    "@type": "Person",
    name: SITE_NAME,
    url: SITE_URL,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": SITE_URL,
  },
  inLanguage: "pt_BR",
  copyrightYear: new Date().getFullYear(),
  keywords: SITE_KEYWORDS,
  dateCreated: "2024-11-15",
  dateModified: new Date().toISOString(),
};

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <html lang="en-US" suppressHydrationWarning>
      <body className={`${outfit.variable} relative`}>
        <Providers>
          <main
            id="skip-nav"
            className="mx-auto mb-16 max-w-10xl px-8 py-5 sm:px-8 "
          >
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
