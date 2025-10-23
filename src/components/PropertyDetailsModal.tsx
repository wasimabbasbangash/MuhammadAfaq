"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Bed,
  Bath,
  Square,
  MapPin,
  Calendar,
  Phone,
  MessageCircle,
  Copy,
  Check,
  Star,
  Heart,
  Share2,
} from "lucide-react";

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

interface PropertyDetailsModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PropertyDetailsModal({
  property,
  isOpen,
  onClose,
}: PropertyDetailsModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Get all images (main image + additional images), remove duplicates
  const allImages = property
    ? Array.from(new Set([property.image, ...(property.images || [])])).filter(
        (img) => img && img !== "/api/placeholder/400/300"
      )
    : [];

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [property, isOpen]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && allImages.length > 1) {
        setCurrentImageIndex((prev) =>
          prev === 0 ? allImages.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight" && allImages.length > 1) {
        setCurrentImageIndex((prev) =>
          prev === allImages.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isOpen, allImages.length, onClose]);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const copyToClipboard = async (text: string, type: "phone" | "whatsapp") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "phone") {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      } else {
        setCopiedWhatsApp(true);
        setTimeout(() => setCopiedWhatsApp(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const shareProperty = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: property?.title,
          text: `Check out this amazing property: ${property?.title} in ${property?.community}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    }
  };

  if (!property) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl max-w-7xl w-full max-h-[95vh] overflow-hidden shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-electric-blue/20 via-accent-gold/15 to-deep-navy/20 backdrop-blur-sm border-b border-electric-blue/10 p-6 text-deep-navy">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                  <div className="flex items-center text-deep-navy/80 mb-3">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="text-lg">{property.community}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl font-bold">{property.price}</span>
                    <span className="bg-electric-blue/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-electric-blue/20">
                      {property.type}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`p-3 rounded-full transition-all duration-200 border border-gray-200 ${
                      isFavorite
                        ? "bg-red-500 text-white"
                        : "bg-white/60 text-deep-navy hover:bg-white/80"
                    }`}
                  >
                    <Heart
                      className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`}
                    />
                  </button>
                  <button
                    onClick={shareProperty}
                    className="p-3 rounded-full bg-white/60 text-deep-navy hover:bg-white/80 transition-all duration-200 border border-gray-200"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={onClose}
                    className="p-3 rounded-full bg-white/60 text-deep-navy hover:bg-white/80 transition-all duration-200 border border-gray-200"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Single Column Scrollable Content */}
            <div className="max-h-[calc(95vh-200px)] overflow-y-auto">
              {/* Image Gallery - Full Width */}
              <div className="relative bg-gray-50">
                {allImages.length > 0 ? (
                  <div className="w-full">
                    {/* Main Image */}
                    <div className="relative w-full h-[400px] md:h-[500px]">
                      <img
                        src={allImages[currentImageIndex]}
                        alt={`${property.title} - Image ${
                          currentImageIndex + 1
                        }`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/api/placeholder/400/300";
                        }}
                      />

                      {/* Urgent Badge */}
                      {property.urgent && (
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                          🔥 HOT PROPERTY
                        </div>
                      )}

                      {/* Navigation Arrows */}
                      {allImages.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-deep-navy p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-deep-navy p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>
                        </>
                      )}

                      {/* Image Counter */}
                      {allImages.length > 1 && (
                        <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                          {currentImageIndex + 1} / {allImages.length}
                        </div>
                      )}
                    </div>

                    {/* Thumbnail Strip */}
                    {allImages.length > 1 && (
                      <div className="bg-white border-t border-gray-200 p-4">
                        <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
                          {allImages.map((image, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-3 transition-all duration-300 ${
                                index === currentImageIndex
                                  ? "border-electric-blue ring-2 ring-electric-blue/30 scale-105"
                                  : "border-gray-200 hover:border-gray-300 hover:scale-102"
                              }`}
                            >
                              <img
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  e.currentTarget.src =
                                    "/api/placeholder/400/300";
                                }}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-full h-[400px] md:h-[500px] flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="text-center">
                      <span className="text-8xl">🏢</span>
                      <p className="text-gray-500 mt-4 text-lg">
                        No images available
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Property Details - Single Column */}
              <div className="p-6 md:p-8 bg-white">
                {/* Key Features */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-gradient-to-br from-electric-blue/10 to-accent-gold/10 rounded-2xl border border-electric-blue/20">
                    <Bed className="h-8 w-8 mx-auto text-electric-blue mb-2" />
                    <div className="text-2xl font-bold text-deep-navy">
                      {property.beds}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Bedrooms
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-electric-blue/10 to-accent-gold/10 rounded-2xl border border-electric-blue/20">
                    <Bath className="h-8 w-8 mx-auto text-electric-blue mb-2" />
                    <div className="text-2xl font-bold text-deep-navy">
                      {property.baths}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Bathrooms
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-electric-blue/10 to-accent-gold/10 rounded-2xl border border-electric-blue/20">
                    <Square className="h-8 w-8 mx-auto text-electric-blue mb-2" />
                    <div className="text-2xl font-bold text-deep-navy">
                      {property.size}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Sqft
                    </div>
                  </div>
                </div>

                {/* Property Type & Price Summary */}
                <div className="bg-gradient-to-r from-deep-navy/5 to-electric-blue/5 p-4 rounded-2xl border border-deep-navy/10 mb-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-electric-blue" />
                      <span className="text-deep-navy font-semibold">
                        {property.type}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-deep-navy">
                        {property.price}
                      </div>
                      <div className="text-sm text-gray-600">Total Price</div>
                    </div>
                  </div>
                </div>

                {/* Features Tags */}
                {property.tags.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-deep-navy mb-4 flex items-center">
                      <Star className="h-5 w-5 text-accent-gold mr-2" />
                      Property Features
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {property.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-electric-blue/10 to-accent-gold/10 text-electric-blue border border-electric-blue/20 rounded-full text-sm font-semibold hover:shadow-md transition-all duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description */}
                {property.description && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-deep-navy mb-4">
                      About This Property
                    </h3>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
                        {property.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Contact Section */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-bold text-deep-navy mb-4">
                    Get In Touch
                  </h3>

                  <button
                    onClick={() => copyToClipboard("+971553108123", "phone")}
                    className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-deep-navy to-electric-blue text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    {copiedPhone ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      <Phone className="h-5 w-5" />
                    )}
                    <span className="text-lg">
                      {copiedPhone ? "Phone Copied!" : "Copy Phone Number"}
                    </span>
                  </button>

                  <a
                    href={`https://wa.me/971553108123?text=Hi%20Muhammad%2C%20I'm%20interested%20in%20${encodeURIComponent(
                      property.title
                    )}%20in%20${encodeURIComponent(
                      property.community
                    )}%20-%20${encodeURIComponent(property.price)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span className="text-lg">WhatsApp Inquiry</span>
                  </a>
                </div>

                {/* Agent Info */}
                <div className="bg-gradient-to-r from-deep-navy/5 to-electric-blue/5 p-6 rounded-2xl border border-deep-navy/10">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-deep-navy to-electric-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-xl font-bold">MA</span>
                    </div>
                    <h4 className="text-lg font-bold text-deep-navy mb-1">
                      Afaq Pukhtoon
                    </h4>
                    <p className="text-electric-blue font-semibold mb-2">
                      Dubai Property Expert
                    </p>
                    <div className="flex items-center justify-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-4 w-4 text-accent-gold fill-current"
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">
                        5.0 Rating
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
