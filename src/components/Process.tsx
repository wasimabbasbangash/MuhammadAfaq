"use client";

import { motion } from "framer-motion";
import {
  Search,
  List,
  Eye,
  Handshake,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "Goals, budget, timeline.",
      details:
        "We start with a comprehensive consultation to understand your requirements, preferences, and timeline.",
      color: "bg-blue-500",
    },
    {
      icon: List,
      title: "Shortlist",
      description: "CRM-curated picks + off-market options.",
      details:
        "Using my CRM system and market knowledge, I curate personalized property options including exclusive off-market deals.",
      color: "bg-accent-gold",
    },
    {
      icon: Eye,
      title: "Viewings",
      description: "Efficient tours; pros & cons recap after each.",
      details:
        "Scheduled property visits with detailed analysis of each property's strengths, weaknesses, and market positioning.",
      color: "bg-green-500",
    },
    {
      icon: Handshake,
      title: "Negotiate & Close",
      description: "Offer strategy, paperwork, bank/lawyer coordination.",
      details:
        "Strategic price negotiation, legal document preparation, and coordination with banks and lawyers for smooth closing.",
      color: "bg-purple-500",
    },
    {
      icon: CheckCircle,
      title: "After-Sales",
      description: "Handover, snagging guidance, resale/rent-out plan.",
      details:
        "Move-in assistance, property inspection, service connections setup, and future resale or rental strategy planning.",
      color: "bg-emerald-500",
    },
  ];

  return (
    <section id="process" className="py-20 bg-deep-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-pearl-white mb-4">
            My Proven Process
          </h2>
          <p className="text-xl text-desert-sand max-w-3xl mx-auto">
            From inquiry to keys — a systematic approach to your Dubai property
            transaction.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-accent-gold to-transparent"></div>
          </div>

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 relative">
                  <div
                    className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-lg relative z-10`}
                  >
                    <step.icon className="h-8 w-8 text-pearl-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-20 h-20 bg-accent-gold/20 rounded-full"></div>
                </div>

                {/* Content */}
                <div
                  className={`mt-6 lg:mt-0 lg:px-8 flex-1 max-w-md ${
                    index % 2 === 0
                      ? "lg:text-right lg:pr-12"
                      : "lg:text-left lg:pl-12"
                  }`}
                >
                  <div className="bg-pearl-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="bg-accent-gold text-deep-navy px-3 py-1 rounded-full text-sm font-semibold">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-deep-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="text-deep-navy/70 mb-3">{step.description}</p>
                    <p className="text-deep-navy/60 text-sm leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <ArrowRight className="h-6 w-6 text-accent-gold" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-pearl-white/10 backdrop-blur-sm rounded-2xl p-8 border border-pearl-white/20">
            <h3 className="text-2xl font-heading font-semibold text-pearl-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-desert-sand mb-6 max-w-2xl mx-auto">
              // /* eslint-disable-next-line react/no-unescaped-entities */
              Let&apos;s discuss your Dubai property goals and create a personalized
              plan for success.
            </p>
            <a
              href="https://wa.me/971553108123?text=Hi%20Afaq%2C%20I'm%20ready%20to%20start%20my%20Dubai%20property%20journey."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-whatsapp-green text-pearl-white px-8 py-4 rounded-lg font-semibold hover:bg-whatsapp-green/90 transition-colors duration-200 shadow-lg"
            >
              <span>Start Your Process Today</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
