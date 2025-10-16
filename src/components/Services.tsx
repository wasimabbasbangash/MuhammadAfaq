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
  MessageCircle,
  Mail,
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
      className="py-24 bg-gradient-to-br from-pure-white via-soft-peach to-electric-blue/5 relative overflow-hidden"
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          {/* Decorative elements */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="flex items-center space-x-2">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-electric-blue"></div>
              <div className="w-3 h-3 bg-gradient-to-br from-electric-blue to-accent-gold rounded-full"></div>
              <span className="text-electric-blue font-bold text-sm uppercase tracking-widest">
                Our Expertise
              </span>
              <div className="w-3 h-3 bg-gradient-to-br from-accent-gold to-electric-blue rounded-full"></div>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-electric-blue"></div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-deep-navy mb-8 leading-tight"
          >
            Comprehensive
            <span className="block bg-gradient-to-r from-electric-blue via-accent-gold to-electric-blue bg-clip-text text-transparent">
              Real Estate
            </span>
            Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-elegant-purple max-w-4xl mx-auto leading-relaxed mb-12"
          >
            From first-time buyers to seasoned investors, our tailored services
            ensure every client finds their perfect Dubai property match.
          </motion.p>

          {/* Service highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8"
          >
            <div className="flex items-center space-x-2 bg-pure-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-electric-blue/20">
              <Search className="w-5 h-5 text-electric-blue" />
              <span className="text-deep-navy font-semibold">
                Property Search
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-pure-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-accent-gold/20">
              <Calculator className="w-5 h-5 text-accent-gold" />
              <span className="text-deep-navy font-semibold">
                Market Analysis
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-pure-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-electric-blue/20">
              <Shield className="w-5 h-5 text-electric-blue" />
              <span className="text-deep-navy font-semibold">
                Legal Support
              </span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gradient-to-br from-pure-white/95 to-pure-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-electric-blue/10 relative overflow-hidden group"
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-accent-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Service number badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-electric-blue to-accent-gold text-pure-white text-sm font-bold rounded-full mb-6"
                >
                  {index + 1}
                </motion.div>

                {/* Icon with modern styling */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-electric-blue/10 to-accent-gold/10 rounded-xl mb-6 border border-electric-blue/20 group-hover:border-accent-gold/30 transition-all duration-300"
                >
                  <service.icon className="h-8 w-8 text-electric-blue group-hover:text-accent-gold transition-colors duration-300" />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                  className="text-2xl font-heading font-bold text-deep-navy mb-4 group-hover:text-electric-blue transition-colors duration-300"
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                  className="text-elegant-purple leading-relaxed mb-6 text-base"
                >
                  {service.description}
                </motion.p>

                {/* Features list with modern styling */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + featureIndex * 0.1 + 0.7,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 group/feature"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-electric-blue to-accent-gold rounded-full group-hover/feature:scale-125 transition-transform duration-200"></div>
                      <span className="text-elegant-purple font-medium text-sm group-hover/feature:text-deep-navy transition-colors duration-200">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
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
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-deep-navy mb-8 leading-tight"
              >
                Ready to
                <span className="block bg-gradient-to-r from-electric-blue via-accent-gold to-electric-blue bg-clip-text text-transparent">
                  Make It Happen?
                </span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl text-elegant-purple mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Let's connect and find the perfect property that matches your
                vision, budget, and lifestyle in Dubai's most sought-after
                locations.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/971553108123?text=Hi%20Afaq%2C%20I%20am%20interested%20in%20Dubai%20property."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-r from-deep-navy to-electric-blue text-pure-white px-10 py-5 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center justify-center space-x-4">
                    <MessageCircle className="h-6 w-6" />
                    <span className="text-lg font-black">
                      Start Your Journey
                    </span>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:afaqmuhammad599@gmail.com?subject=Property%20Inquiry%20(Dubai)&body=Hi%20Afaq%2C..."
                  className="group bg-pure-white border-2 border-deep-navy text-deep-navy px-10 py-5 rounded-2xl font-bold hover:bg-deep-navy hover:text-pure-white shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center justify-center space-x-4">
                    <Mail className="h-6 w-6" />
                    <span className="text-lg font-black">
                      Free Consultation
                    </span>
                  </div>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
