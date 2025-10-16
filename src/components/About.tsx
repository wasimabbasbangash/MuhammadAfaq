"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Users,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

export default function About() {
  const fastFacts = [
    {
      icon: MapPin,
      title: "Base",
      value: "Dubai, UAE",
    },
    {
      icon: Briefcase,
      title: "Current Company",
      value: "Muhammad Afaq",
      subtitle: "20+ Years in Dubai Market",
    },
    {
      icon: Users,
      title: "Social Reach",
      value: "80,000+ Followers",
      subtitle: "Engaged audience across platforms",
    },
    {
      icon: GraduationCap,
      title: "Background",
      value: "BBA (Institute of Management & Sciences, Pakistan)",
    },
  ];

  return (
    <section id="about" className="py-20 bg-pearl-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-navy mb-4">
            Meet Muhammad Afaq
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-deep-navy/80 leading-relaxed">
              I&apos;m a Dubai-based Property Consultant at Muhammad Afaq
              Estate, focused on matching clients to the right homes and
              investments. Backed by over 20 years of company excellence in the
              Dubai market, I deliver a systematic process: needs assessment →
              curated viewings → negotiation → smooth closing.
            </p>

            <p className="text-lg text-deep-navy/80 leading-relaxed">
              I leverage CRM tools to keep every conversation and follow-up on
              track, and with 80,000+ social media followers, I create original
              content to maximize listing visibility and reach qualified buyers.
            </p>

            {/* Skills/Expertise */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-5 w-5 text-accent-gold" />
                <span className="text-deep-navy">Data-driven pricing</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare className="h-5 w-5 text-accent-gold" />
                <span className="text-deep-navy">
                  Multilingual communication
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-accent-gold" />
                <span className="text-deep-navy">CRM-managed follow-ups</span>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase className="h-5 w-5 text-accent-gold" />
                <span className="text-deep-navy">
                  End-to-end transaction support
                </span>
              </div>
            </div>
          </motion.div>

          {/* Fast Facts Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-heading font-semibold text-deep-navy mb-8">
              Fast Facts
            </h3>

            <div className="grid grid-cols-1 gap-6">
              {fastFacts.map((fact, index) => (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-desert-sand/10 to-pearl-white p-6 rounded-lg border border-desert-sand/20 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent-gold/20 p-3 rounded-lg">
                      <fact.icon className="h-6 w-6 text-accent-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-deep-navy mb-1">
                        {fact.title}
                      </h4>
                      <p className="text-deep-navy/80 font-medium">
                        {fact.value}
                      </p>
                      {fact.subtitle && (
                        <p className="text-deep-navy/60 text-sm mt-1">
                          {fact.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
