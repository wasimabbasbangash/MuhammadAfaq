"use client";

import { Phone, Mail, MessageCircle, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Listings", href: "#listings" },
    { name: "Areas", href: "#areas" },
    { name: "Process", href: "#process" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-deep-navy text-pure-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Trust & Credentials Band */}
        <div className="border-b border-desert-sand/20 pb-8 mb-8">
          <div className="text-center">
            <p className="text-lg font-medium mb-4">
              AED 50M+ closed deals | 80K+ social reach | 5+ years company
              experience
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-accent-gold/20 px-3 py-1 rounded-full">
                Muhammad Afaq
              </span>
              <span className="bg-accent-gold/20 px-3 py-1 rounded-full">
                CRM Tools
              </span>
              <span className="bg-accent-gold/20 px-3 py-1 rounded-full">
                Market Research
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">
              Contact Afaq
            </h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/971553108123?text=Hi%20Afaq%2C%20I%20am%20interested%20in%20Dubai%20property."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-desert-sand hover:text-accent-gold transition-colors duration-200"
              >
                <MessageCircle className="h-5 w-5" />
                <span>+971 55 310 8123</span>
              </a>

              <a
                href="mailto:afaqmuhammad599@gmail.com?subject=Property%20Inquiry%20(Dubai)&body=Hi%20Afaq%2C..."
                className="flex items-center space-x-3 text-desert-sand hover:text-accent-gold transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
                <span>afaqmuhammad599@gmail.com</span>
              </a>

              <a
                href="tel:+971553108123"
                className="flex items-center space-x-3 text-desert-sand hover:text-accent-gold transition-colors duration-200"
              >
                <Phone className="h-5 w-5" />
                <span>+971 55 310 8123</span>
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-afaq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-desert-sand hover:text-accent-gold transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-desert-sand hover:text-accent-gold transition-colors duration-200 text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent-gold/20 px-3 py-1 rounded text-sm">
                EN
              </span>
              <span className="bg-accent-gold/20 px-3 py-1 rounded text-sm">
                اردو
              </span>
              <span className="bg-accent-gold/20 px-3 py-1 rounded text-sm">
                हिन्दी
              </span>
              <span className="bg-accent-gold/20 px-3 py-1 rounded text-sm">
                پښتو
              </span>
            </div>
            <p className="text-desert-sand/70 text-sm mt-4">
              Fluent communication in English, Urdu/Hindi, and Pashto
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-desert-sand/20 mt-8 pt-8 text-center">
          <p className="text-desert-sand/70">
            © {currentYear} Muhammad Afaq. All rights reserved. Dubai Real
            Estate Agent.
          </p>
        </div>
      </div>
    </footer>
  );
}
