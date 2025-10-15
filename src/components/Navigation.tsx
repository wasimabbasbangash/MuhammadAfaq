"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Areas", href: "#areas" },
  { name: "Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Resources", href: "#resources" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-midnight-black/90 backdrop-blur-xl shadow-2xl border-b border-pure-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-heading font-black bg-gradient-to-r from-accent-gold to-luxury-teal bg-clip-text text-transparent">
                Muhammad Afaq
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-2">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-platinum hover:text-accent-gold px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-pure-white/10 whitespace-nowrap"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="hidden lg:flex items-center">
              <a
                href="https://wa.me/971553108123?text=Hi%20Afaq%2C%20I%20am%20interested%20in%20Dubai%20property."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-whatsapp-green to-whatsapp-green/80 text-pure-white p-3 rounded-xl hover:shadow-xl hover:shadow-whatsapp-green/25 transition-all duration-300 shadow-lg"
                title="Contact via WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>

            {/* Tablet menu button */}
            <div className="hidden md:block lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-platinum hover:text-accent-gold p-3 rounded-lg hover:bg-pure-white/10 transition-all duration-300"
              >
                {mobileMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-platinum hover:text-accent-gold p-3 rounded-lg hover:bg-pure-white/10 transition-all duration-300"
              >
                {mobileMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-midnight-black/95 backdrop-blur-xl border-t border-pure-white/10">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-platinum hover:text-accent-gold block px-4 py-3 rounded-xl text-base font-semibold uppercase tracking-wide w-full text-left hover:bg-pure-white/10 transition-all duration-300"
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile WhatsApp Button */}
              <div className="pt-6">
                <a
                  href="https://wa.me/971553108123?text=Hi%20Afaq%2C%20I%20am%20interested%20in%20Dubai%20property."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-whatsapp-green to-whatsapp-green/80 text-pure-white px-6 py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-whatsapp-green/25 transition-all duration-300 flex items-center justify-center space-x-3 w-full shadow-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile/Tablet Sticky WhatsApp Button */}
      <div className="lg:hidden fixed bottom-8 right-8 z-50">
        <a
          href="https://wa.me/971553108123?text=Hi%20Afaq%2C%20I%20am%20interested%20in%20Dubai%20property."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-whatsapp-green to-whatsapp-green/80 text-pure-white p-5 rounded-full shadow-2xl hover:shadow-whatsapp-green/25 hover:scale-110 transition-all duration-300"
        >
          <MessageCircle className="h-7 w-7" />
        </a>
      </div>
    </>
  );
}
