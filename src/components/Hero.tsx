"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MessageCircle,
  Mail,
  CheckCircle,
  Star,
  TrendingUp,
  Award,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-pure-white via-electric-blue/5 to-electric-blue/10 flex items-center relative overflow-hidden"
    >
      {/* Modern Background Pattern */}
      <div className="absolute inset-0">
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-electric-blue/10 to-accent-gold/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-accent-gold/8 to-electric-blue/8 rounded-full blur-3xl"
        ></motion.div>

        {/* Floating Cards Background */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-32 h-20 bg-pure-white/60 backdrop-blur-sm rounded-xl border border-electric-blue/20 shadow-lg"
        ></motion.div>
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/3 right-1/4 w-40 h-24 bg-pure-white/60 backdrop-blur-sm rounded-xl border border-electric-blue/20 shadow-lg"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge with Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              {/* Profile Picture */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-pure-white shadow-lg overflow-hidden">
                  <Image
                    src="/assets/images/IMG_9669.JPG"
                    alt="Muhammad Afaq - Dubai Property Expert"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-deep-navy to-electric-blue text-pure-white px-2 py-0.5 rounded-full text-xs font-semibold shadow-md">
                  5+
                </div>
              </div>

              {/* Badge */}
              <div className="bg-gradient-to-r from-electric-blue/10 to-accent-gold/10 backdrop-blur-sm border border-electric-blue/20 rounded-full px-6 py-3">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-accent-gold fill-current" />
                  <span className="text-deep-navy font-semibold text-sm">
                    Muhammad Afaq - Dubai Property Expert
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-6xl md:text-8xl lg:text-9xl font-heading font-black text-deep-navy leading-none"
            >
              Your
              <span className="block bg-gradient-to-r from-electric-blue via-accent-gold to-electric-blue bg-clip-text text-transparent">
                Dubai
              </span>
              Dream
              <span className="block text-accent-gold">Awaits</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-elegant-purple leading-relaxed max-w-xl"
            >
              Hi, I'm Muhammad Afaq. Transform your property dreams into reality
              with my 20+ years of expertise, 80,000+ satisfied clients, and
              unparalleled Dubai market knowledge.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-accent-gold" />
                <span className="text-deep-navy font-semibold">
                  AED 50M+ Closed
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-electric-blue" />
                <span className="text-deep-navy font-semibold">
                  20+ Years Experience
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/971553108123?text=Hi%20Afaq%2C%20I%20am%20interested%20in%20Dubai%20property."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-deep-navy to-electric-blue text-pure-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center justify-center space-x-3">
                  <MessageCircle className="h-6 w-6" />
                  <span className="text-lg font-black">Start Your Journey</span>
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:afaqmuhammad599@gmail.com?subject=Property%20Inquiry%20(Dubai)&body=Hi%20Afaq%2C..."
                className="group bg-pure-white border-2 border-deep-navy text-deep-navy px-8 py-4 rounded-2xl font-bold hover:bg-deep-navy hover:text-pure-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-6 w-6" />
                  <span className="text-lg font-black">
                    Get Free Consultation
                  </span>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Modern Interactive Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative bg-gradient-to-br from-pure-white/95 to-pure-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-electric-blue/10"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-electric-blue to-accent-gold rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-pure-white" />
                  </div>
                  <div>
                    <h3 className="text-deep-navy font-bold text-lg">
                      Dubai Property Market
                    </h3>
                    <p className="text-elegant-purple text-sm">
                      Live Market Data
                    </p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                  <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                  <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-electric-blue/10 to-electric-blue/5 rounded-xl p-4 border border-electric-blue/20"
                >
                  <div className="text-2xl font-black text-electric-blue">
                    +12%
                  </div>
                  <div className="text-elegant-purple text-sm font-medium">
                    YoY Growth
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-accent-gold/10 to-accent-gold/5 rounded-xl p-4 border border-accent-gold/20"
                >
                  <div className="text-2xl font-black text-accent-gold">
                    AED 2.1M
                  </div>
                  <div className="text-elegant-purple text-sm font-medium">
                    Avg Price/sqft
                  </div>
                </motion.div>
              </div>

              {/* Property Types */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-electric-blue font-medium">
                    Apartments
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-electric-blue/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-full bg-gradient-to-r from-electric-blue to-accent-gold rounded-full"
                      />
                    </div>
                    <span className="text-elegant-purple text-sm font-medium">
                      85%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-electric-blue font-medium">Villas</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-electric-blue/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "65%" }}
                        transition={{ duration: 1.5, delay: 1.2 }}
                        className="h-full bg-gradient-to-r from-accent-gold to-electric-blue rounded-full"
                      />
                    </div>
                    <span className="text-elegant-purple text-sm font-medium">
                      65%
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-electric-blue font-medium">
                    Townhouses
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 h-2 bg-electric-blue/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "45%" }}
                        transition={{ duration: 1.5, delay: 1.4 }}
                        className="h-full bg-gradient-to-r from-electric-blue to-accent-gold rounded-full"
                      />
                    </div>
                    <span className="text-elegant-purple text-sm font-medium">
                      45%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Achievement Cards */}
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-accent-gold to-electric-blue text-pure-white p-4 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-black">50M+</div>
                <div className="text-xs font-medium">AED Closed</div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                rotate: [0, -3, 3, 0],
                y: [0, 10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-electric-blue to-accent-gold text-pure-white p-4 rounded-2xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-black">80K+</div>
                <div className="text-xs font-medium">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
