"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye, MessageCircle, Bed, Bath, Square, Flame } from "lucide-react";
import PropertyDetailsModal from "./PropertyDetailsModal";

interface Property {
  id: string;
  image: string;
  images?: string[];
  title: string;
  community: string;
  beds: number;
  baths: number;
  size: string;
  price: string;
  type: string;
  tags: string[];
  urgent?: boolean;
  description?: string;
}

export default function HotProperties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Load hot properties from JSON file
    const loadProperties = async () => {
      try {
        const response = await fetch("/api/save-properties");
        if (response.ok) {
          const data = await response.json();
          setProperties(data.properties || []);
        } else {
          // Fallback to default properties if file doesn't exist
          setProperties([
            {
              id: "1",
              image: "/api/placeholder/400/300",
              title: "Marina Gate Tower",
              community: "Dubai Marina",
              beds: 2,
              baths: 2,
              size: "1,200",
              price: "AED 2.8M",
              type: "Off-plan",
              tags: ["Hot Deal", "Ready Q1 2025"],
              urgent: true,
            },
            {
              id: "2",
              image: "/api/placeholder/400/300",
              title: "Business Bay Executive",
              community: "Business Bay",
              beds: 3,
              baths: 3,
              size: "1,800",
              price: "AED 4.2M",
              type: "Secondary",
              tags: ["Hot Deal", "Furnished"],
              urgent: true,
            },
          ]);
        }
      } catch (error) {
        console.error("Failed to load hot properties:", error);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openPropertyModal = (property: Property) => {
    setSelectedProperty(property);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProperty(null);
  };

  if (loading) {
    return (
      <section
        id="hot-properties"
        className="py-20 bg-gradient-to-br from-accent-gold/5 to-deep-navy/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (properties.length === 0) {
    return null; // Don't show section if no hot properties
  }

  return (
    <section
      id="hot-properties"
      className="py-20 bg-gradient-to-br from-accent-gold/5 to-deep-navy/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Flame className="h-8 w-8 text-red-500 mr-3" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-navy">
              🔥 Hot Properties
            </h2>
            <Flame className="h-8 w-8 text-red-500 ml-3" />
          </div>
          <p className="text-xl text-deep-navy/70 max-w-3xl mx-auto">
            Limited-time opportunities in Dubai's most sought-after properties.
          </p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-pearl-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-red-200 hover:border-red-400 relative"
            >
              {/* Hot Badge */}
              {property.urgent && (
                <div className="absolute top-3 left-3 z-10">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                    <Flame className="h-3 w-3" />
                    <span>HOT</span>
                  </div>
                </div>
              )}

              {/* Property Image */}
              <div className="relative h-48 bg-gradient-to-br from-accent-gold/20 to-deep-navy/20 flex items-center justify-center overflow-hidden">
                {property.image &&
                property.image !== "/api/placeholder/400/300" ? (
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling!.classList.remove(
                        "hidden"
                      );
                    }}
                  />
                ) : null}
                <div
                  className={`w-full h-full flex items-center justify-center ${
                    property.image &&
                    property.image !== "/api/placeholder/400/300"
                      ? "hidden"
                      : ""
                  }`}
                >
                  <span className="text-4xl">🏢</span>
                </div>

                <div className="absolute top-3 right-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      property.type === "Off-plan"
                        ? "bg-accent-gold text-pure-white"
                        : "bg-deep-navy text-pearl-white"
                    }`}
                  >
                    {property.type}
                  </span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <h3 className="text-lg font-heading font-semibold text-deep-navy mb-1">
                  {property.title}
                </h3>
                <p className="text-deep-navy/70 text-sm mb-4">
                  {property.community}
                </p>

                {/* Key Facts */}
                <div className="flex items-center justify-between mb-4 text-sm text-deep-navy/70">
                  <div className="flex items-center space-x-1">
                    <Bed className="h-4 w-4" />
                    <span>{property.beds} bed</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Bath className="h-4 w-4" />
                    <span>{property.baths} bath</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Square className="h-4 w-4" />
                    <span>{property.size} sqft</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-red-600">
                    {property.price}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {property.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => openPropertyModal(property)}
                    className="flex-1 bg-deep-navy text-pearl-white px-4 py-2 rounded-lg font-medium hover:bg-deep-navy/90 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Eye className="h-4 w-4" />
                    <span>View Details</span>
                  </button>
                  <a
                    href={`https://wa.me/971553108123?text=Hi%20Afaq%2C%20I'm%20very%20interested%20in%20this%20HOT%20property:%20${property.title}%20in%20${property.community}%20-%20${property.price}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-red-500 text-pearl-white px-4 py-2 rounded-lg font-medium hover:bg-red-500/90 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Inquire Now</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-red-50 to-accent-gold/10 rounded-xl p-8 border border-red-200"
        >
          <h3 className="text-2xl font-heading font-semibold text-deep-navy mb-4">
            🔥 Don't Miss Out!
          </h3>
          <p className="text-deep-navy/70 mb-6 max-w-2xl mx-auto">
            These hot properties are moving fast. Contact me now to secure your
            dream Dubai property before it's gone.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-red-500 to-accent-gold text-pure-white px-8 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-accent-gold/90 transition-all duration-200 shadow-lg"
          >
            Get Exclusive Access
          </button>
        </motion.div>
      </div>

      {/* Property Details Modal */}
      <PropertyDetailsModal
        property={selectedProperty}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
