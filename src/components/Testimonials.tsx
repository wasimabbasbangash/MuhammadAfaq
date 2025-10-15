"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Afaq helped me find my dream apartment in Dubai Marina within my budget. His market knowledge and negotiation skills saved me AED 200K. Highly recommend!",
      author: "Sarah Al-Mansoori",
      role: "Buyer — Dubai Marina",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      id: 2,
      quote:
        "As an investor, I needed reliable data and honest advice. Afaq provided both, plus helped me secure off-plan units with great rental potential. Professional throughout.",
      author: "Ahmed Al-Rashid",
      role: "Investor — Business Bay",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      id: 3,
      quote:
        "Selling my Downtown property was stressful until I met Afaq. He handled everything from pricing to paperwork, and we closed 2 weeks ahead of schedule.",
      author: "Maria Rodriguez",
      role: "Seller — Downtown Dubai",
      rating: 5,
      avatar: "👩‍💻",
    },
    {
      id: 4,
      quote:
        "Afaq's multilingual support was crucial for my family. He explained everything clearly and helped us find the perfect family home in JVC.",
      author: "Fatima Al-Zahra",
      role: "Buyer — JVC",
      rating: 5,
      avatar: "👩‍👧‍👦",
    },
    {
      id: 5,
      quote:
        "From shortlisting to handover, Afaq managed every detail of my villa purchase in Arabian Ranches. His after-sales support was exceptional.",
      author: "Omar Al-Shehhi",
      role: "Buyer — Arabian Ranches",
      rating: 5,
      avatar: "👨‍👨‍👧",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-br from-electric-blue/5 via-deep-navy to-midnight-black relative overflow-hidden"
    >
      {/* Modern Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 left-10 w-px h-48 bg-accent-gold rotate-12"></div>
          <div className="absolute top-32 right-16 w-px h-32 bg-luxury-teal -rotate-6"></div>
          <div className="absolute bottom-20 left-1/4 w-px h-40 bg-electric-blue rotate-45"></div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ rotate: [0, 180] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-20 h-20 border border-accent-gold/30 rounded-lg"
        ></motion.div>

        <motion.div
          animate={{ rotate: [180, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 left-1/4 w-16 h-16 border border-luxury-teal/40 rounded-full"
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
              Client Testimonials
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-pure-white mb-8 leading-none"
          >
            Voices of
            <span className="block bg-gradient-to-r from-accent-gold via-luxury-teal to-electric-blue bg-clip-text text-transparent">
              Success
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-platinum/90 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Authentic experiences from Dubai property transactions with Muhammad Afaq.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="bg-gradient-to-br from-pure-white/5 to-pure-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl hover:shadow-accent-gold/20 border border-pure-white/10 relative overflow-hidden group"
            >
              {/* Modern card effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/5 to-luxury-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-gold/20 via-transparent to-luxury-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

              {/* Modern Quote Icon */}
              <div className="absolute -top-3 left-6">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="bg-gradient-to-r from-accent-gold to-accent-gold/80 rounded-2xl p-3 shadow-xl group-hover:shadow-2xl group-hover:shadow-accent-gold/25 transition-all duration-300"
                >
                  <Quote className="h-6 w-6 text-pure-white" />
                </motion.div>
              </div>

              <div className="relative z-10 pt-6">
                {/* Rating */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-1 mb-8"
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1 + 0.3 + i * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      <Star className="h-6 w-6 text-accent-gold fill-current" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Quote */}
                <blockquote className="text-platinum/80 mb-10 leading-relaxed text-lg font-light">
                  // /* eslint-disable-next-line react/no-unescaped-entities */
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-14 h-14 bg-gradient-to-br from-accent-gold/20 to-luxury-teal/20 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:shadow-accent-gold/25 transition-all duration-300"
                  >
                    <span className="text-3xl">{testimonial.avatar}</span>
                  </motion.div>
                  <div>
                    <div className="font-black text-pure-white text-xl mb-1 group-hover:text-accent-gold transition-colors duration-300">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-platinum/70 bg-accent-gold/20 px-4 py-2 rounded-xl font-medium">
                      {testimonial.role}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
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
            {/* Modern background */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-gold/5 via-transparent to-luxury-teal/5"></div>

            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-black mb-16 text-pure-white"
              >
                // /* eslint-disable-next-line react/no-unescaped-entities */
                Trusted by Dubai's Property Seekers
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { number: "50+", label: "Happy Clients", icon: "👥" },
                  { number: "98%", label: "Satisfaction Rate", icon: "⭐" },
                  { number: "24/7", label: "Support Available", icon: "🕒" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="text-center group"
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.2 }}
                      className="text-5xl mb-6 inline-block"
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="text-5xl md:text-6xl font-black text-accent-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-platinum/80 font-semibold text-lg uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
