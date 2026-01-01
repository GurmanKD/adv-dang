import { site, practiceAreas } from "@/lib/site";

export function SeoJsonLd() {
  const url = site.url;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.name,
    url,
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${site.city}, ${site.state}`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "IN",
    },
    telephone: site.phones.map((p) => `+91${p}`),
    email: site.email,
    availableLanguage: site.languages,
    sameAs: [], // add later if you create LinkedIn/GBP etc.
    knowsAbout: practiceAreas.map((p) => p.title),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
