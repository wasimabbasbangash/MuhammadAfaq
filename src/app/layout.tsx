import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dubai Real Estate Agent | Muhammad Afaq – Buy & Sell Property",
  description:
    "Work with a Dubai property consultant who has closed AED 50M+ in deals. Fast viewings, data-driven pricing, and after-sales support. WhatsApp +971 55 310 8123.",
  keywords:
    "Dubai real estate agent, property consultant, buy property Dubai, sell property Dubai, Muhammad Afaq, Dubai property deals",
  authors: [{ name: "Muhammad Afaq" }],
  openGraph: {
    title: "Dubai Real Estate Agent | Muhammad Afaq",
    description:
      "Dubai property consultant with AED 50M+ in closed deals. Fast viewings and expert guidance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Real Estate Agent | Muhammad Afaq",
    description: "Dubai property consultant with AED 50M+ in closed deals.",
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
                "Dubai-based real estate agent specializing in residential and commercial property transactions",
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
