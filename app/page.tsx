import type { Metadata } from "next";
import type { WebSite, WithContext } from "schema-dts";
import Resume from "@/components/resume/Resume";
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
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
  inLanguage: "pt-BR",
  copyrightYear: new Date().getFullYear(),
  keywords: SITE_KEYWORDS,
  dateCreated: "2024-09-30",
  dateModified: new Date().toISOString(),
};
export default function Home() {
  return <Resume />;
}
