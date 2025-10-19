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

  if (!property) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {property.title}
                </h2>
                <div className="flex items-center text-gray-600 mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{property.community}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            <div className="flex flex-col lg:flex-row max-h-[calc(90vh-80px)]">
              {/* Image Gallery - Left Side */}
              <div className="lg:w-1/2 relative bg-gray-100 flex flex-col">
                {allImages.length > 0 ? (
                  <div className="flex flex-col h-full">
                    {/* Main Image */}
                    <div className="relative flex-1 min-h-64">
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

                      {/* Navigation Arrows */}
                      {allImages.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </>
                      )}

                      {/* Image Counter */}
                      {allImages.length > 1 && (
                        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {currentImageIndex + 1} / {allImages.length}
                        </div>
                      )}
                    </div>

                    {/* Thumbnail Strip - Compact */}
                    {allImages.length > 1 && (
                      <div className="bg-white border-t border-gray-200 p-3">
                        <div className="flex space-x-2 overflow-x-auto">
                          {allImages.map((image, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                                index === currentImageIndex
                                  ? "border-blue-500 ring-1 ring-blue-200"
                                  : "border-gray-300 hover:border-gray-400"
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
                  <div className="flex-1 min-h-64 flex items-center justify-center bg-gray-200">
                    <span className="text-4xl">🏢</span>
                  </div>
                )}
              </div>

              {/* Property Details - Right Side */}
              <div className="lg:w-1/2 p-4 overflow-y-auto">
                {/* Price */}
                <div className="mb-4">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {property.price}
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{property.type}</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center p-2 bg-gray-50 rounded-md">
                    <Bed className="h-4 w-4 mx-auto text-gray-600 mb-1" />
                    <div className="text-xs font-medium text-gray-900">
                      {property.beds}
                    </div>
                    <div className="text-xs text-gray-600">Beds</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-md">
                    <Bath className="h-4 w-4 mx-auto text-gray-600 mb-1" />
                    <div className="text-xs font-medium text-gray-900">
                      {property.baths}
                    </div>
                    <div className="text-xs text-gray-600">Baths</div>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-md">
                    <Square className="h-4 w-4 mx-auto text-gray-600 mb-1" />
                    <div className="text-xs font-medium text-gray-900">
                      {property.size}
                    </div>
                    <div className="text-xs text-gray-600">Sqft</div>
                  </div>
                </div>

                {/* Tags */}
                {property.tags.length > 0 && (
                  <div className="mb-4">
                    <h3 className="text-xs font-medium text-gray-900 mb-2 uppercase tracking-wide">
                      Features
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {property.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-md font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description */}
                {property.description && (
                  <div className="mb-4">
                    <h3 className="text-xs font-medium text-gray-900 mb-2 uppercase tracking-wide">
                      Description
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {property.description}
                    </p>
                  </div>
                )}

                {/* Contact Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => copyToClipboard("+971553108123", "phone")}
                    className="w-full flex items-center justify-center space-x-2 bg-gray-900 text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    {copiedPhone ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Phone className="h-4 w-4" />
                    )}
                    <span>{copiedPhone ? "Copied!" : "Copy Phone"}</span>
                  </button>

                  <a
                    href={`https://wa.me/971553108123?text=Hi%20Afaq%2C%20I'm%20interested%20in%20${encodeURIComponent(
                      property.title
                    )}%20in%20${encodeURIComponent(
                      property.community
                    )}%20-%20${encodeURIComponent(property.price)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 bg-green-500 text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-green-600 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Contact Info */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-xs text-gray-600 mb-1">Muhammad Afaq</p>
                    <p className="text-xs font-medium text-gray-900">
                      Dubai Property Expert
                    </p>
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
