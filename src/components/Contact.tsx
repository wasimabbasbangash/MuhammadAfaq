"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    area: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.interest) {
      newErrors.interest = "Please select your interest";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate occasional failure for demo
          if (Math.random() > 0.9) {
            reject(new Error("Network error"));
          } else {
            resolve(true);
          }
        }, 2000);
      });

      setIsSubmitted(true);

      // Reset form after 3 seconds and show WhatsApp redirect
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "",
          area: "",
          budget: "",
          message: "",
        });
        setErrors({});

        // Open WhatsApp with prefilled message
        const whatsappMessage = `Hi Afaq, I just submitted the contact form. My name is ${
          formData.name
        } and I'm interested in ${formData.interest}${
          formData.area ? ` in ${formData.area}` : ""
        }.`;
        window.open(
          `https://wa.me/971553108123?text=${encodeURIComponent(
            whatsappMessage
          )}`,
          "_blank"
        );
      }, 3000);
    } catch (error) {
      console.error("Form submission error:", error);
      setErrors({
        submit:
          "Failed to send message. Please try again or contact directly via WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-pearl-white to-desert-sand/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-navy mb-4">
            Let's Find Your Place in Dubai
          </h2>
          <p className="text-xl text-deep-navy/70 max-w-3xl mx-auto">
            Message me on WhatsApp or send an email — I'll reply promptly with
            tailored property options.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-heading font-semibold text-deep-navy mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="bg-whatsapp-green/20 p-3 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-whatsapp-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-navy mb-1">
                      WhatsApp
                    </h4>
                    <p className="text-deep-navy/70 mb-2">
                      Fastest way to reach me
                    </p>
                    <a
                      href="https://wa.me/971553108123?text=Hi%20Afaq%2C%20I%20am%20interested%20in%20Dubai%20property."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-whatsapp-green hover:text-whatsapp-green/80 font-medium"
                    >
                      +971 55 310 8123
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-gold/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-accent-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-navy mb-1">Email</h4>
                    <p className="text-deep-navy/70 mb-2">
                      For detailed inquiries
                    </p>
                    <a
                      href="mailto:afaqmuhammad599@gmail.com?subject=Property%20Inquiry%20(Dubai)&body=Hi%20Afaq%2C..."
                      className="text-accent-gold hover:text-accent-gold/80 font-medium"
                    >
                      afaqmuhammad599@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-deep-navy/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-deep-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-navy mb-1">Phone</h4>
                    <p className="text-deep-navy/70 mb-2">Direct line</p>
                    <a
                      href="tel:+971553108123"
                      className="text-deep-navy hover:text-deep-navy/80 font-medium"
                    >
                      +971 55 310 8123
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-deep-navy/5 rounded-xl p-6 border border-deep-navy/10">
              <h4 className="font-semibold text-deep-navy mb-3">
                Response Times
              </h4>
              <div className="space-y-2 text-sm text-deep-navy/70">
                <div className="flex justify-between">
                  <span>WhatsApp:</span>
                  <span className="font-medium text-whatsapp-green">
                    Within 30 minutes
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Email:</span>
                  <span className="font-medium text-accent-gold">
                    Within 2 hours
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Phone:</span>
                  <span className="font-medium text-deep-navy">
                    Mon-Fri, 9AM-6PM GST
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-pearl-white rounded-xl shadow-lg p-8 border border-desert-sand/20"
          >
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-heading font-semibold text-deep-navy mb-6">
                  Request Your Shortlist
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-deep-navy mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-colors duration-200 ${
                        errors.name
                          ? "border-red-300 focus:ring-red-500"
                          : "border-desert-sand/30"
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-deep-navy mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-200 ${
                        errors.email
                          ? "border-red-300 focus:ring-red-500"
                          : "border-desert-sand/30 focus:ring-accent-gold"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-deep-navy mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-desert-sand/30 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-colors duration-200"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>

                  {/* Interest */}
                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm font-medium text-deep-navy mb-2"
                    >
                      I'm Looking to *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-200 ${
                        errors.interest
                          ? "border-red-300 focus:ring-red-500"
                          : "border-desert-sand/30 focus:ring-accent-gold"
                      }`}
                    >
                      <option value="">Select your interest</option>
                      <option value="Buy a property">Buy a property</option>
                      <option value="Sell my property">Sell my property</option>
                      <option value="Rent out my property">
                        Rent out my property
                      </option>
                      <option value="Invest in Dubai property">
                        Invest in Dubai property
                      </option>
                    </select>
                    {errors.interest && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.interest}
                      </p>
                    )}
                  </div>

                  {/* Area */}
                  <div>
                    <label
                      htmlFor="area"
                      className="block text-sm font-medium text-deep-navy mb-2"
                    >
                      Preferred Area
                    </label>
                    <select
                      id="area"
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-desert-sand/30 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select area (optional)</option>
                      <option value="Dubai Marina">Dubai Marina</option>
                      <option value="Downtown Dubai">Downtown Dubai</option>
                      <option value="Business Bay">Business Bay</option>
                      <option value="JVC">Jumeirah Village Circle</option>
                      <option value="Arabian Ranches">Arabian Ranches</option>
                      <option value="Palm Jumeirah">Palm Jumeirah</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-deep-navy mb-2"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-desert-sand/30 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select budget (optional)</option>
                      <option value="Under AED 1M">Under AED 1M</option>
                      <option value="AED 1M - 3M">AED 1M - 3M</option>
                      <option value="AED 3M - 5M">AED 3M - 5M</option>
                      <option value="AED 5M - 10M">AED 5M - 10M</option>
                      <option value="AED 10M - 20M">AED 10M - 20M</option>
                      <option value="Over AED 20M">Over AED 20M</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-deep-navy mb-2"
                    >
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-200 resize-none ${
                        errors.message
                          ? "border-red-300 focus:ring-red-500"
                          : "border-desert-sand/30 focus:ring-accent-gold"
                      }`}
                      placeholder="Tell me about your specific requirements, timeline, or any questions..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Error */}
                  {errors.submit && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-600 text-sm">{errors.submit}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-gold text-deep-navy px-8 py-4 rounded-lg font-semibold hover:bg-accent-gold/90 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-deep-navy"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Request Shortlist</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="bg-whatsapp-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-whatsapp-green" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-deep-navy mb-2">
                  Thanks! I'll WhatsApp you shortly.
                </h3>
                <p className="text-deep-navy/70">
                  I've received your inquiry and will send you a personalized
                  property shortlist via WhatsApp within the next hour.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
