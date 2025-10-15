"use client";

import { motion } from "framer-motion";
import { Eye, MessageCircle, Bed, Bath, Square } from "lucide-react";

export default function FeaturedListings() {
  // Placeholder listings data
  const listings = [
    {
      id: 1,
      image: "/api/placeholder/400/300",
      title: "Marina Gate Tower",
      community: "Dubai Marina",
      beds: 2,
      baths: 2,
      size: "1,200",
      price: "AED 2.8M",
      type: "Off-plan",
      tags: ["Off-plan", "Ready Q1 2025"],
    },
    {
      id: 2,
      image: "/api/placeholder/400/300",
      title: "Business Bay Executive",
      community: "Business Bay",
      beds: 3,
      baths: 3,
      size: "1,800",
      price: "AED 4.2M",
      type: "Secondary",
      tags: ["Secondary", "Furnished"],
    },
    {
      id: 3,
      image: "/api/placeholder/400/300",
      title: "Palm Jumeirah Villa",
      community: "Palm Jumeirah",
      beds: 4,
      baths: 4,
      size: "3,200",
      price: "AED 12M",
      type: "Secondary",
      tags: ["Secondary", "Beachfront"],
    },
    {
      id: 4,
      image: "/api/placeholder/400/300",
      title: "Downtown Penthouse",
      community: "Downtown Dubai",
      beds: 3,
      baths: 3,
      size: "2,500",
      price: "AED 8.5M",
      type: "Secondary",
      tags: ["Secondary", "Burj Khalifa View"],
    },
    {
      id: 5,
      image: "/api/placeholder/400/300",
      title: "JVC District Living",
      community: "Jumeirah Village Circle",
      beds: 2,
      baths: 2,
      size: "950",
      price: "AED 1.9M",
      type: "Off-plan",
      tags: ["Off-plan", "Family-friendly"],
    },
    {
      id: 6,
      image: "/api/placeholder/400/300",
      title: "Arabian Ranches Estate",
      community: "Arabian Ranches",
      beds: 5,
      baths: 5,
      size: "4,500",
      price: "AED 15M",
      type: "Secondary",
      tags: ["Secondary", "Gated Community"],
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="listings" className="py-20 bg-pearl-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-navy mb-4">
            Featured Dubai Properties
          </h2>
          <p className="text-xl text-deep-navy/70 max-w-3xl mx-auto">
            Handpicked Dubai properties — new each week.
          </p>
        </motion.div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {listings.map((listing, index) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-pearl-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-desert-sand/20"
            >
              {/* Property Image */}
              <div className="relative h-48 bg-gradient-to-br from-accent-gold/20 to-deep-navy/20 flex items-center justify-center">
                <span className="text-4xl">🏢</span>
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      listing.type === "Off-plan"
                        ? "bg-accent-gold text-deep-navy"
                        : "bg-deep-navy text-pearl-white"
                    }`}
                  >
                    {listing.type}
                  </span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold text-deep-navy mb-1">
                  {listing.title}
                </h3>
                <p className="text-deep-navy/70 text-sm mb-4">
                  {listing.community}
                </p>

                {/* Key Facts */}
                <div className="flex items-center justify-between mb-4 text-sm text-deep-navy/70">
                  <div className="flex items-center space-x-1">
                    <Bed className="h-4 w-4" />
                    <span>{listing.beds} bed</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="h-4 w-4" />
                    <span>{listing.baths} bath</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="h-4 w-4" />
                    <span>{listing.size} sqft</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-accent-gold">
                    {listing.price}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {listing.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-desert-sand/20 text-deep-navy text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-deep-navy text-pearl-white px-4 py-2 rounded-lg font-medium hover:bg-deep-navy/90 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <Eye className="h-4 w-4" />
                    <span>View Details</span>
                  </button>
                  <a
                    href={`https://wa.me/971553108123?text=Hi%20Afaq%2C%20I'm%20interested%20in%20${listing.title}%20in%20${listing.community}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-whatsapp-green text-pearl-white px-4 py-2 rounded-lg font-medium hover:bg-whatsapp-green/90 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Ask on WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Didn't find fit section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-desert-sand/10 to-accent-gold/10 rounded-xl p-8"
        >
          <h3 className="text-2xl font-heading font-semibold text-deep-navy mb-4">
            Didn't find your fit?
          </h3>
          <p className="text-deep-navy/70 mb-6 max-w-2xl mx-auto">
            Get a personalized shortlist of Dubai properties that match your
            exact requirements, budget, and preferences.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-accent-gold text-deep-navy px-8 py-3 rounded-lg font-semibold hover:bg-accent-gold/90 transition-colors duration-200 shadow-lg"
          >
            Get a Custom Shortlist
          </button>
        </motion.div>
      </div>
    </section>
  );
}
