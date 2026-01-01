import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const SITE_NAME = "Advocate Dharmendra Singh Dang";
const SITE_URL = "https://example.com"; // TODO: replace after domain purchase
const OG_IMAGE = "/og.jpg"; // TODO: add later

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Rudrapur & Nainital High Court`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Practicing Advocate since 2009. Criminal matters, cheque bounce (NI Act 138) and family disputes. District & Sessions Court Rudrapur and High Court Nainital.",
  applicationName: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${SITE_NAME} | Rudrapur & Nainital High Court`,
    description:
      "Criminal law, cheque bounce cases and family matters. Free initial consultation. In-person within 50 km, otherwise video consultation.",
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Rudrapur & Nainital High Court`,
    description:
      "Criminal law, cheque bounce cases and family matters. Free initial consultation.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
