"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { siteConfig } from "@/config/siteConfig";
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle, WifiOff } from "lucide-react";
import { errorLogger } from "@/lib/errorLogger";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "network_error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Validate email format
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate form fields
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Handle form submission with EmailJS
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      errorLogger.warn("Form validation failed", "ContactForm");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Check network connectivity
      if (!navigator.onLine) {
        errorLogger.warn("No internet connection", "ContactForm");
        setSubmitStatus("network_error");
        setErrorMessage("No internet connection. Please check your network and try again.");
        return;
      }

      // Check if EmailJS credentials are configured
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        const configError = new Error("Email service not configured");
        errorLogger.log(configError, "ContactForm - Missing EmailJS credentials");
        setSubmitStatus("error");
        setErrorMessage("Email service is not configured. Please contact me directly via email.");
        return;
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        submission_date: new Date().toLocaleString(),
      };

      // Send email using EmailJS with timeout
      const sendPromise = emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      // Add timeout (30 seconds)
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Request timeout")), 30000)
      );

      await Promise.race([sendPromise, timeoutPromise]);
      
      // Success
      errorLogger.info("Contact form submitted successfully", "ContactForm");
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Hide success message after 7 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 7000);
    } catch (error) {
      // Log error with context
      errorLogger.log(
        error instanceof Error ? error : new Error("Unknown error"),
        "ContactForm - Submission failed"
      );

      // Determine error type and set appropriate message
      if (error instanceof Error) {
        if (error.message.includes("timeout")) {
          setSubmitStatus("error");
          setErrorMessage("Request timed out. Please check your connection and try again.");
        } else if (error.message.includes("Failed to fetch") || error.message.includes("Network")) {
          setSubmitStatus("network_error");
          setErrorMessage("Network error. Please check your internet connection.");
        } else if (error.message.includes("not configured")) {
          setSubmitStatus("error");
          setErrorMessage("Email service not configured. Please contact me directly.");
        } else {
          setSubmitStatus("error");
          setErrorMessage("Failed to send message. Please try again or contact me directly via email.");
        }
      } else {
        setSubmitStatus("error");
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
      
      // Hide error message after 10 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMessage("");
      }, 10000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-200/20 via-transparent to-secondary-200/20 dark:from-primary-900/20 dark:to-secondary-900/20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-secondary-100 to-secondary-50 dark:from-secondary-900/30 dark:to-secondary-900/20 rounded-full p-4">
                <Mail className="w-12 h-12 text-secondary-600 dark:text-secondary-400" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-primary-800 dark:text-primary-200">
              Let&apos;s Connect
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-4">
              {siteConfig.tagline}
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-500 italic">
              &quot;Bridging traditional software development with emerging AI technologies&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  Send Me a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                          : "border-gray-300 dark:border-gray-600 focus:ring-secondary-500 focus:border-secondary-500"
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 focus:ring-4`}
                      placeholder="Your name"
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name}
                      </p>
                    )}
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                          : "border-gray-300 dark:border-gray-600 focus:ring-secondary-500 focus:border-secondary-500"
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 focus:ring-4`}
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </p>
                    )}
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                          : "border-gray-300 dark:border-gray-600 focus:ring-secondary-500 focus:border-secondary-500"
                      } bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 focus:ring-4 resize-none`}
                      placeholder="Tell me about your project, question, or just say hi!"
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </span>
                  </motion.button>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-green-800 dark:text-green-300">
                          Thank you! I&apos;ll get back to you soon.
                        </p>
                        <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                          Your message has been sent successfully.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold text-red-800 dark:text-red-300">
                          Oops! Something went wrong.
                        </p>
                        <p className="text-sm text-red-700 dark:text-red-400 mt-1">
                          {errorMessage || "Unable to send message. Please try again or email me directly."}
                        </p>
                        <a
                          href={siteConfig.links.email}
                          className="text-sm text-red-600 dark:text-red-400 underline hover:text-red-700 dark:hover:text-red-500 mt-2 inline-block"
                        >
                          Email me directly: {siteConfig.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Network Error Message */}
                  {submitStatus === "network_error" && (
                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg flex items-start gap-3">
                      <WifiOff className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-semibold text-orange-800 dark:text-orange-300">
                          No Internet Connection
                        </p>
                        <p className="text-sm text-orange-700 dark:text-orange-400 mt-1">
                          {errorMessage || "Please check your internet connection and try again."}
                        </p>
                        <button
                          onClick={() => {
                            setSubmitStatus("idle");
                            setErrorMessage("");
                          }}
                          className="text-sm text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-500 mt-2"
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div className="order-1 md:order-2">
                <motion.h2 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
                >
                  Contact Information
                </motion.h2>
                <div className="space-y-6">
                  {/* Email */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-secondary-100 dark:bg-secondary-900/30 rounded-lg p-3">
                      <Mail className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Email
                      </h3>
                      <a
                        href={siteConfig.links.email}
                        className="text-secondary-600 dark:text-secondary-400 hover:underline"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </motion.div>

                  {/* LinkedIn */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-secondary-100 dark:bg-secondary-900/30 rounded-lg p-3">
                      <Linkedin className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        LinkedIn
                      </h3>
                      <a
                        href={siteConfig.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-600 dark:text-secondary-400 hover:underline break-all"
                      >
                        linkedin.com/in/grace-li-com
                      </a>
                    </div>
                  </motion.div>

                  {/* GitHub */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-secondary-100 dark:bg-secondary-900/30 rounded-lg p-3">
                      <Github className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        GitHub
                      </h3>
                      <a
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-600 dark:text-secondary-400 hover:underline"
                      >
                        github.com/Graceli95
                      </a>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="bg-secondary-100 dark:bg-secondary-900/30 rounded-lg p-3">
                      <MapPin className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Location
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {siteConfig.location}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Additional Info Box */}
                <div className="mt-8 p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-900/30 rounded-lg border border-secondary-100 dark:border-secondary-800">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Let&apos;s Build Something Amazing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you&apos;re looking for a full-stack developer, an AI solutions builder, or just want to connect, feel free to reach out!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

