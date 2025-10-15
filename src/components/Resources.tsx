"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, ArrowRight } from "lucide-react";

export default function Resources() {
  const [selectedResource, setSelectedResource] = useState<string | null>(null);

  const resources = [
    {
      id: "buying-fees",
      title: "Buying in Dubai: Fees & Timeline",
      excerpt:
        "Complete guide to property purchase costs, registration fees, and typical transaction timeline in Dubai.",
      readTime: "5 min read",
      date: "Dec 2024",
      icon: "💰",
      category: "Buying Guide",
    },
    {
      id: "offplan-vs-secondary",
      title: "Off-plan vs Secondary: What's Right for You?",
      excerpt:
        "Understanding the differences between new developments and resale properties in Dubai's market.",
      readTime: "7 min read",
      date: "Dec 2024",
      icon: "🏗️",
      category: "Investment Guide",
    },
    {
      id: "pricing-strategy",
      title: "How to Price Your Property to Sell Fast",
      excerpt:
        "Market analysis techniques and pricing strategies to attract serious buyers and close quickly.",
      readTime: "6 min read",
      date: "Nov 2024",
      icon: "📈",
      category: "Selling Guide",
    },
  ];

  const resourceContent = {
    "buying-fees": {
      title: "Buying in Dubai: Fees & Timeline",
      content: `
        <h3>Property Purchase Costs in Dubai</h3>
        <p>When buying property in Dubai, several fees and costs come into play. Here's a breakdown:</p>

        <h4>Registration Fees (4% of property value)</h4>
        <ul>
          <li>Dubai Land Department (DLD) registration: 2%</li>
          <li>Notary public fees: 1.5%</li>
          <li>Registration agent fees: 0.5%</li>
        </ul>

        <h4>Additional Costs</h4>
        <ul>
          <li>Property valuation: AED 1,500-3,000</li>
          <li>Title deed transfer: AED 4,000-8,000</li>
          <li>Mortgage registration (if applicable): 0.25% of loan amount</li>
          <li>Legal fees: AED 5,000-15,000</li>
        </ul>

        <h3>Typical Timeline</h3>
        <ol>
          <li><strong>Week 1-2:</strong> Property search and selection</li>
          <li><strong>Week 3:</strong> Offer submission and acceptance</li>
          <li><strong>Week 4-6:</strong> Due diligence and valuation</li>
          <li><strong>Week 7-8:</strong> Payment and registration</li>
          <li><strong>Week 9-10:</strong> Title deed transfer</li>
        </ol>

        <p><strong>Pro tip:</strong> Always budget 6-8% of property value for total transaction costs.</p>
      `,
    },
    "offplan-vs-secondary": {
      title: "Off-plan vs Secondary: What's Right for You?",
      content: `
        <h3>Understanding Your Options</h3>
        <p>Dubai's property market offers two main categories: off-plan (new developments) and secondary (resale) properties.</p>

        <h4>Off-Plan Properties</h4>
        <h5>Advantages:</h5>
        <ul>
          <li>Payment plans (typically 20-30% down payment)</li>
          <li>Modern specifications and latest amenities</li>
          <li>Potential for capital appreciation</li>
          <li>Brand new condition</li>
        </ul>

        <h5>Considerations:</h5>
        <ul>
          <li>Construction delays possible</li>
          <li>Completion uncertainty</li>
          <li>Higher maintenance fees initially</li>
          <li>Limited resale options during construction</li>
        </ul>

        <h4>Secondary Properties</h4>
        <h5>Advantages:</h5>
        <ul>
          <li>Immediate possession available</li>
          <li>Established communities</li>
          <li>Proven rental income history</li>
          <li>Move-in ready</li>
        </ul>

        <h5>Considerations:</h5>
        <ul>
          <li>Full payment required upfront</li>
          <li>May need renovations</li>
          <li>Older specifications</li>
          <li>Higher maintenance costs</li>
        </ul>

        <h3>Which is Right for You?</h3>
        <p><strong>Choose off-plan if:</strong> You want payment flexibility, modern finishes, and potential for future value growth.</p>
        <p><strong>Choose secondary if:</strong> You need immediate possession, established rental income, or prefer mature communities.</p>
      `,
    },
    "pricing-strategy": {
      title: "How to Price Your Property to Sell Fast",
      content: `
        <h3>Market Analysis First</h3>
        <p>Pricing your property correctly requires understanding current market conditions and comparable sales.</p>

        <h4>Key Factors to Consider</h4>
        <ul>
          <li>Location and accessibility</li>
          <li>Property condition and age</li>
          <li>Size and layout efficiency</li>
          <li>View and orientation</li>
          <li>Building quality and facilities</li>
          <li>Recent comparable sales in the area</li>
        </ul>

        <h3>Pricing Strategies</h3>
        <h4>The 5% Rule</h4>
        <p>Price 5% below market value to attract serious buyers and create competition. This typically results in:</p>
        <ul>
          <li>Faster sale (30-50% quicker than average)</li>
          <li>Multiple offers</li>
          <li>Strong negotiation position</li>
        </ul>

        <h4>Market Comparison</h4>
        <p>Analyze recently sold properties (last 3-6 months) in your building/community:</p>
        <ul>
          <li>Same size and layout</li>
          <li>Similar condition</li>
          <li>Comparable views/floors</li>
        </ul>

        <h3>Professional Valuation</h3>
        <p>Always get a professional valuation from licensed appraisers. This provides:</p>
        <ul>
          <li>Objective market value assessment</li>
          <li>Credibility with buyers</li>
          <li>Basis for negotiations</li>
        </ul>

        <p><strong>Remember:</strong> It's better to price slightly low and sell quickly than overprice and wait months for the right buyer.</p>
      `,
    },
  };

  const selectedResourceData = selectedResource
    ? resourceContent[selectedResource as keyof typeof resourceContent]
    : null;

  return (
    <section id="resources" className="py-20 bg-deep-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-pearl-white mb-4">
            Property Resources
          </h2>
          <p className="text-xl text-desert-sand max-w-3xl mx-auto">
            Expert insights to help you make informed Dubai property decisions.
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-pearl-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-accent-gold/20 to-deep-navy/20 p-6">
                <div className="text-4xl mb-3">{resource.icon}</div>
                <div className="flex items-center justify-between text-sm text-deep-navy/70">
                  <span className="bg-accent-gold/20 px-2 py-1 rounded-full">
                    {resource.category}
                  </span>
                  <span>{resource.readTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-deep-navy mb-3">
                  {resource.title}
                </h3>
                <p className="text-deep-navy/70 mb-4 leading-relaxed">
                  {resource.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-deep-navy/60">
                    <Calendar className="h-4 w-4" />
                    <span>{resource.date}</span>
                  </div>
                  <button
                    onClick={() => setSelectedResource(resource.id)}
                    className="flex items-center space-x-2 text-accent-gold hover:text-accent-gold/80 font-medium transition-colors duration-200"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedResource && selectedResourceData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedResource(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-pearl-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-pearl-white border-b border-desert-sand/20 p-6 flex items-center justify-between">
                  <h2 className="text-2xl font-heading font-bold text-deep-navy">
                    {selectedResourceData.title}
                  </h2>
                  <button
                    onClick={() => setSelectedResource(null)}
                    className="text-deep-navy/60 hover:text-deep-navy transition-colors duration-200"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div
                  className="p-6 prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: selectedResourceData.content,
                  }}
                  style={{
                    color: "#0F1A2B",
                    lineHeight: "1.7",
                  }}
                />

                <div className="border-t border-desert-sand/20 p-6 bg-desert-sand/10">
                  <div className="text-center">
                    <p className="text-deep-navy/70 mb-4">
                      Have questions about this topic?
                    </p>
                    <a
                      href={`https://wa.me/971553108123?text=Hi%20Afaq%2C%20I%20read%20your%20article%20"${selectedResourceData.title}"%20and%20have%20some%20questions.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-whatsapp-green text-pearl-white px-6 py-3 rounded-lg font-semibold hover:bg-whatsapp-green/90 transition-colors duration-200"
                    >
                      <span>Ask Afaq on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Newsletter/CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-pearl-white/10 backdrop-blur-sm rounded-2xl p-8 border border-pearl-white/20">
            <h3 className="text-2xl font-heading font-semibold text-pearl-white mb-4">
              Stay Updated with Dubai Property Market
            </h3>
            <p className="text-desert-sand mb-6 max-w-2xl mx-auto">
              Get weekly market updates, new listings, and expert insights
              delivered to your inbox.
            </p>
            <a
              href="https://wa.me/971553108123?text=Hi%20Afaq%2C%20I'd%20like%20to%20subscribe%20to%20your%20Dubai%20property%20market%20updates."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-accent-gold text-deep-navy px-8 py-3 rounded-lg font-semibold hover:bg-accent-gold/90 transition-colors duration-200 shadow-lg"
            >
              <span>Get Market Updates</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
