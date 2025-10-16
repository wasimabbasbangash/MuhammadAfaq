"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  TrendingUp,
  Search,
  Eye,
  Headphones,
  Home,
  Calculator,
  Users,
  Camera,
  Shield,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: UserCheck,
      title: "Buyer Representation",
      description:
        "Tailored shortlists, rapid viewings, negotiation & paperwork support.",
      features: [
        "Custom property matching",
        "Market analysis",
        "Price negotiation",
        "Legal guidance",
      ],
    },
    {
      icon: TrendingUp,
      title: "Seller Representation",
      description:
        "Pricing strategy, marketing content (video/TikTok), and qualified buyer outreach.",
      features: [
        "Competitive pricing",
        "Social media marketing",
        "Professional photography",
        "Buyer qualification",
      ],
    },
    {
      icon: Calculator,
      title: "Investor Services",
      description:
        "Yield analysis, resale strategy, off-plan & secondary market guidance.",
      features: [
        "ROI calculations",
        "Market trends",
        "Investment planning",
        "Portfolio management",
      ],
    },
    {
      icon: Eye,
      title: "Property Viewings",
      description: "Flexible scheduling and curated tours.",
      features: [
        "Exclusive access",
        "Virtual tours",
        "Schedule flexibility",
        "Area insights",
      ],
    },
    {
      icon: Shield,
      title: "After-Sales Support",
      description: "Hand-over, snagging guidance, and trusted referrals.",
      features: [
        "Move-in assistance",
        "Defect inspection",
        "Service connections",
        "Ongoing support",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-midnight-black via-deep-navy to-electric-blue/10 relative overflow-hidden"
    >
      {/* Modern Dubai Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-px h-32 bg-accent-gold rotate-12"></div>
            <div className="absolute top-16 right-20 w-px h-24 bg-luxury-teal -rotate-6"></div>
            <div className="absolute bottom-32 left-1/3 w-px h-40 bg-accent-gold rotate-45"></div>
            <div className="absolute bottom-20 right-1/4 w-px h-28 bg-luxury-teal -rotate-12"></div>
          </div>
        </div>

        {/* Floating orbs */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-40 h-40 border border-accent-gold/20 rounded-full"
        ></motion.div>

        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-32 h-32 border border-luxury-teal/30 rounded-lg rotate-45"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block mb-8"
          >
            <span className="bg-gradient-to-r from-accent-gold to-luxury-teal bg-clip-text text-transparent text-lg font-black uppercase tracking-widest border-b-2 border-accent-gold/50 pb-2">
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-pure-white mb-8 leading-none"
          >
            Elite Real Estate
            <span className="block bg-gradient-to-r from-accent-gold via-luxury-teal to-electric-blue bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-platinum/90 max-w-4xl mx-auto leading-relaxed font-light"
          >
            From curated shortlists to seamless transactions — every step of
            your Dubai property journey, elevated.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="bg-gradient-to-br from-pure-white/5 to-pure-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-accent-gold/20 border border-pure-white/10 relative overflow-hidden group"
            >
              {/* Modern card background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-luxury-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card border glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-gold/20 via-transparent to-luxury-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className="bg-gradient-to-br from-accent-gold/20 to-luxury-teal/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:shadow-2xl group-hover:shadow-accent-gold/25 transition-all duration-300"
                >
                  <service.icon className="h-8 w-8 text-accent-gold" />
                </motion.div>

                <h3 className="text-2xl font-heading font-black text-pure-white mb-6 group-hover:text-accent-gold transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-platinum/80 leading-relaxed mb-8 text-lg font-light">
                  {service.description}
                </p>

                <div className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + featureIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 group/item"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-accent-gold to-luxury-teal rounded-full group-hover/item:scale-125 transition-transform duration-200 shadow-lg"></div>
                      <span className="text-platinum/70 font-medium group-hover/item:text-pure-white transition-colors duration-200">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pure-white/5 to-pure-white/10 backdrop-blur-xl rounded-3xl p-16 border border-pure-white/20 shadow-2xl relative overflow-hidden"
          >
            {/* Modern CTA background */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/5 via-transparent to-luxury-teal/5"></div>

            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="text-pure-white mb-12 text-2xl md:text-3xl font-bold"
              >
                Ready to discover your dream Dubai property?
              </motion.p>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/971553108123?text=Hi%20Afaq%2C%20I%20am%20interested%20in%20Dubai%20property."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-4 bg-gradient-to-r from-whatsapp-green to-whatsapp-green/80 text-pure-white px-12 py-6 rounded-2xl font-black hover:shadow-2xl hover:shadow-whatsapp-green/25 transition-all duration-300 shadow-xl text-xl"
              >
                <span>Start Your Journey</span>
                <div className="w-3 h-3 bg-pure-white rounded-full animate-pulse"></div>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
