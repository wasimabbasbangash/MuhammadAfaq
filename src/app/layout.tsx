import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dubai Real Estate Agent | Muhammad Afaq – Property Consultant",
  description:
    "Work with Muhammad Afaq, Dubai's premier property consultant (5+ years in Dubai). AED 50M+ closed deals, 80K+ social reach. Fast viewings, expert guidance. WhatsApp +971 55 310 8123.",
  keywords:
    "Dubai real estate agent, property consultant, buy property Dubai, sell property Dubai, Muhammad Afaq, Dubai property deals, real estate expert",
  authors: [{ name: "Muhammad Afaq" }],
  openGraph: {
    title: "Dubai Real Estate Agent | Muhammad Afaq – Property Consultant",
    description:
      "Muhammad Afaq (5+ years in Dubai) | AED 50M+ closed deals | 80K+ social reach. Expert property consultant.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Real Estate Agent | Muhammad Afaq",
    description: "Muhammad Afaq | AED 50M+ closed | 80K+ followers.",
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
              name: "Muhammad Afaq",
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
                "Dubai property consultant Muhammad Afaq with 5+ years of experience, 80,000+ social followers, and AED 50M+ in closed deals",
              worksFor: {
                "@type": "RealEstateAgent",
                name: "Muhammad Afaq Real Estate",
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
