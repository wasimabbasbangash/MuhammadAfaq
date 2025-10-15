"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, TrendingUp, Users, Heart } from "lucide-react";

export default function Areas() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const areas = [
    {
      id: "marina",
      name: "Dubai Marina",
      color: "bg-blue-500",
      priceRange: "AED 1.5M - 15M",
      lifestyle:
        "Perfect for young professionals and investors seeking vibrant waterfront living.",
      yields: "4-6% rental yields",
      icon: "🏖️",
    },
    {
      id: "downtown",
      name: "Downtown Dubai",
      color: "bg-gold-500",
      priceRange: "AED 2M - 50M+",
      lifestyle:
        "Luxury living at the heart of Dubai with world-class amenities and Burj Khalifa views.",
      yields: "3-5% rental yields",
      icon: "🌟",
    },
    {
      id: "business-bay",
      name: "Business Bay",
      color: "bg-purple-500",
      priceRange: "AED 1.8M - 25M",
      lifestyle:
        "Business district living with modern architecture and proximity to Dubai Marina.",
      yields: "4-6% rental yields",
      icon: "🏢",
    },
    {
      id: "jvc",
      name: "JVC",
      color: "bg-green-500",
      priceRange: "AED 800K - 5M",
      lifestyle:
        "Family-friendly community with excellent schools, parks, and shopping centers.",
      yields: "5-7% rental yields",
      icon: "🏘️",
    },
    {
      id: "arabian-ranches",
      name: "Arabian Ranches",
      color: "bg-emerald-500",
      priceRange: "AED 3M - 40M+",
      lifestyle:
        "Gated community villas with equestrian facilities and desert landscapes.",
      yields: "3-5% rental yields",
      icon: "🏇",
    },
    {
      id: "palm",
      name: "Palm Jumeirah",
      color: "bg-cyan-500",
      priceRange: "AED 5M - 100M+",
      lifestyle:
        "Exclusive island living with private beaches and celebrity residences.",
      yields: "2-4% rental yields",
      icon: "🌴",
    },
  ];

  const selectedAreaData = areas.find((area) => area.id === selectedArea);

  return (
    <section
      id="areas"
      className="py-20 bg-gradient-to-br from-desert-sand/10 to-pearl-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-navy mb-4">
            Dubai Areas & Communities
          </h2>
          <p className="text-xl text-deep-navy/70 max-w-3xl mx-auto">
            Discover the perfect neighborhood for your Dubai lifestyle.
          </p>
        </motion.div>

        {/* Area Chips Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {areas.map((area, index) => (
            <motion.button
              key={area.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedArea(area.id)}
              className="bg-pearl-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-desert-sand/20 group"
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{area.icon}</div>
                <h3 className="text-lg font-heading font-semibold text-deep-navy group-hover:text-accent-gold transition-colors duration-200">
                  {area.name}
                </h3>
                <p className="text-deep-navy/60 text-sm mt-2">
                  {area.priceRange}
                </p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedArea && selectedAreaData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedArea(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-pearl-white rounded-2xl max-w-md w-full p-8 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedArea(null)}
                  className="absolute top-4 right-4 text-deep-navy/60 hover:text-deep-navy transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{selectedAreaData.icon}</div>
                  <h3 className="text-2xl font-heading font-bold text-deep-navy mb-2">
                    {selectedAreaData.name}
                  </h3>
                  <p className="text-accent-gold font-semibold text-lg">
                    {selectedAreaData.priceRange}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-accent-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-deep-navy mb-1">
                        Lifestyle
                      </h4>
                      <p className="text-deep-navy/70 text-sm leading-relaxed">
                        {selectedAreaData.lifestyle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <TrendingUp className="h-5 w-5 text-accent-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-deep-navy mb-1">
                        Investment Potential
                      </h4>
                      <p className="text-deep-navy/70 text-sm">
                        {selectedAreaData.yields}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <a
                    href={`https://wa.me/971553108123?text=Hi%20Afaq%2C%20I'm%20interested%20in%20properties%20in%20${selectedAreaData.name}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-whatsapp-green text-pearl-white px-6 py-3 rounded-lg font-semibold hover:bg-whatsapp-green/90 transition-colors duration-200"
                  >
                    <span>Inquire About {selectedAreaData.name}</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-deep-navy/70 mb-6">
            Not sure which area is right for you? Let's discuss your
            preferences.
          </p>
          <a
            href="https://wa.me/971553108123?text=Hi%20Afaq%2C%20I%20need%20help%20choosing%20the%20right%20Dubai%20area%20for%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-accent-gold text-deep-navy px-8 py-3 rounded-lg font-semibold hover:bg-accent-gold/90 transition-colors duration-200 shadow-lg"
          >
            <span>Get Area Recommendations</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
