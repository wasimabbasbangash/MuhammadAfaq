"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-midnight-black via-deep-navy to-electric-blue/20 flex items-center relative overflow-hidden"
    >
      {/* Modern Dubai Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Dubai Architecture Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-px h-32 bg-accent-gold rotate-12"></div>
          <div className="absolute top-16 left-20 w-px h-24 bg-luxury-teal -rotate-6"></div>
          <div className="absolute top-32 right-16 w-px h-40 bg-accent-gold rotate-45"></div>
          <div className="absolute bottom-32 left-16 w-px h-28 bg-luxury-teal -rotate-12"></div>
        </div>

        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-accent-gold/30 rounded-lg rotate-45"
        ></motion.div>

        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-luxury-teal/40 rounded-full"
        ></motion.div>

        {/* Modern Light Rays */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-accent-gold/50 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-luxury-teal/30 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="inline-block bg-gradient-to-r from-accent-gold to-luxury-teal bg-clip-text text-transparent text-lg font-bold uppercase tracking-widest border-b-2 border-accent-gold/50 pb-2">
                  Muhammad Afaq
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-pure-white mb-8 leading-none"
              >
                Dubai
                <span className="block bg-gradient-to-r from-accent-gold via-luxury-teal to-electric-blue bg-clip-text text-transparent">
                  Real Estate
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-platinum mt-4">
                  Redefined
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-platinum/90 mb-12 leading-relaxed max-w-2xl font-light"
              >
                Elite properties. Exceptional service. Unmatched expertise in Dubai's most prestigious neighborhoods.
              </motion.p>
            </div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              {[
                { number: "50M+", label: "AED Closed", icon: "🏗️" },
                { number: "60K+", label: "Social Reach", icon: "📱" },
                { number: "100%", label: "Client Satisfaction", icon: "⭐" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-pure-white/10 to-pure-white/5 backdrop-blur-sm border border-pure-white/20 rounded-2xl p-6 text-center hover:bg-pure-white/15 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-black text-accent-gold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-platinum/80 font-medium text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/971553108123?text=Hi%20Afaq%2C%20I%20am%20interested%20in%20Dubai%20property."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-whatsapp-green to-whatsapp-green/80 text-pure-white px-12 py-6 rounded-2xl font-bold hover:shadow-2xl hover:shadow-whatsapp-green/25 transition-all duration-300 flex items-center justify-center space-x-4 shadow-xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pure-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <MessageCircle className="h-7 w-7 relative z-10" />
                <span className="relative z-10 text-xl font-black">Start Chat</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:afaqmuhammad599@gmail.com?subject=Property%20Inquiry%20(Dubai)&body=Hi%20Afaq%2C..."
                className="bg-transparent border-2 border-accent-gold text-accent-gold px-12 py-6 rounded-2xl font-bold hover:bg-accent-gold hover:text-midnight-black transition-all duration-300 flex items-center justify-center space-x-4 shadow-xl hover:shadow-2xl hover:shadow-accent-gold/25"
              >
                <Mail className="h-7 w-7" />
                <span className="text-xl font-black">Get Quote</span>
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Right Content - Modern Dubai Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Dubai Skyline Visualization */}
            <div className="relative h-96 flex items-end justify-center">
              {/* Building silhouettes */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-4 w-8 h-24 bg-gradient-to-t from-accent-gold/60 to-accent-gold/20 rounded-t-lg"
              ></motion.div>

              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-16 w-12 h-32 bg-gradient-to-t from-luxury-teal/60 to-luxury-teal/20 rounded-t-lg"
              ></motion.div>

              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-0 left-32 w-16 h-48 bg-gradient-to-t from-electric-blue/60 to-electric-blue/20 rounded-t-lg"
              ></motion.div>

              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 right-16 w-10 h-28 bg-gradient-to-t from-accent-gold/60 to-accent-gold/20 rounded-t-lg"
              ></motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-0 right-4 w-14 h-40 bg-gradient-to-t from-luxury-teal/60 to-luxury-teal/20 rounded-t-lg"
              ></motion.div>

              {/* Central Burj Khalifa-like structure */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-64 bg-gradient-to-t from-accent-gold via-electric-blue to-luxury-teal rounded-t-lg shadow-2xl"
              ></motion.div>

              {/* Floating luxury property cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-8 right-8 bg-gradient-to-br from-pure-white/10 to-pure-white/5 backdrop-blur-md border border-pure-white/20 rounded-2xl p-4 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">🏢</div>
                  <div className="text-accent-gold font-bold text-sm">Palm Jumeirah</div>
                  <div className="text-platinum/70 text-xs">Luxury Villa</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
                className="absolute top-16 left-8 bg-gradient-to-br from-pure-white/10 to-pure-white/5 backdrop-blur-md border border-pure-white/20 rounded-2xl p-4 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">🌅</div>
                  <div className="text-luxury-teal font-bold text-sm">Dubai Marina</div>
                  <div className="text-platinum/70 text-xs">Sea View Apt</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
