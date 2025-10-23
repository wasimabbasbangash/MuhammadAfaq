import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dubai Real Estate Agent | Afaq Pukhtoon – Property Consultant",
  description:
    "Work with Afaq Pukhtoon, Dubai's premier property consultant (5+ years in Dubai). AED 100M+ closed deals, 80K+ social reach. Fast viewings, expert guidance. WhatsApp +971 55 310 8123.",
  keywords:
    "Dubai real estate agent, property consultant, buy property Dubai, sell property Dubai, Afaq Pukhtoon, Dubai property deals, real estate expert",
  authors: [{ name: "Afaq Pukhtoon" }],
  openGraph: {
    title: "Dubai Real Estate Agent | Afaq Pukhtoon – Property Consultant",
    description:
      "Afaq Pukhtoon (5+ years in Dubai) | AED 100M+ closed deals | 80K+ social reach. Expert property consultant.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Real Estate Agent | Afaq Pukhtoon",
    description: "Afaq Pukhtoon | AED 100M+ closed | 80K+ followers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "Afaq Pukhtoon",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressCountry: "UAE",
              },
              areaServed: "Dubai",
              telephone: "+971553108123",
              email: "afaqmuhammad599@gmail.com",
              sameAs: ["https://www.linkedin.com/in/muhammad-afaq"],
              description:
                "Dubai property consultant Afaq Pukhtoon with 5+ years of experience, 80,000+ social followers, and AED 100M+ in closed deals",
              worksFor: {
                "@type": "RealEstateAgent",
                name: "Afaq Pukhtoon Real Estate",
                foundingDate: "2003",
                areaServed: "Dubai",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
