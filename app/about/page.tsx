"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { 
  technicalSkills, 
  professionalSkills, 
  areasOfExpertise,
  education,
  experience,
  certifications,
  volunteerExperience
} from "@/config/skillsData";
import { Download, Briefcase, GraduationCap, Award, Heart, Globe, ExternalLink } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-200/20 via-transparent to-secondary-200/20 dark:from-primary-900/20 dark:to-secondary-900/20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-primary-800 dark:text-primary-200">
              About Me
            </h1>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                I am a first-generation immigrant with a passion for technology, problem-solving, and building meaningful digital experiences. I specialize in full-stack development using Java, Spring Boot, and React, and I&apos;m expanding my expertise into AI-powered applications with Python, FastAPI, and LangChain.
              </p>
              <p>
                My journey from operations and education into tech has shaped how I approach engineering—with empathy, adaptability, and a focus on building solutions that create real-world impact. I&apos;m passionate about continuous learning and translating complex technical challenges into reliable, user-centered applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Areas of Expertise
          </h2>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Technical Expertise */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300 mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                Technical Expertise
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {areasOfExpertise.technical.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-secondary-600 to-secondary-500 rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Professional Skills */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-primary-700 dark:text-primary-300 mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                Professional Skills
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {areasOfExpertise.professional.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-secondary-600 to-secondary-500 rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Skills with Badges */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Technical Skills
          </h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {technicalSkills.map((skillGroup, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2,
                        background: "linear-gradient(135deg, #64748b 0%, #64748b 25%, #0d9488 75%, #a855f7 100%)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-lg shadow-sm hover:shadow-lg hover:text-white border border-gray-200 dark:border-gray-600 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Training Timeline */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center flex items-center justify-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            Education & Training
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 pb-8 border-l-4 border-gradient-to-b from-secondary-600 via-primary-500 to-secondary-500 last:pb-0"
                  style={{ borderImage: 'linear-gradient(to bottom, #0d9488, #64748b, #14b8a6) 1' }}
                >
                  {/* Animated timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="absolute left-0 top-0 -translate-x-[11px]"
                  >
                    <div className="relative">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-secondary-600 to-secondary-500 ring-4 ring-white dark:ring-gray-900" />
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-secondary-600"
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 ml-4 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {edu.institution}
                        </h3>
                        <p className="text-secondary-600 dark:text-secondary-400 font-semibold">
                          {edu.degree ? `${edu.degree} - ${edu.field}` : edu.field}
                        </p>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-0 text-right">
                        <p>{edu.location}</p>
                        <p>{edu.date}</p>
                      </div>
                    </div>
                    {edu.highlights && (
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, hIndex) => (
                          <li
                            key={hIndex}
                            className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                          >
                            <span className="text-secondary-500 flex-shrink-0">•</span>
                            <span className="text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
            Professional Experience
          </h2>
          
          <div className="max-w-4xl mx-auto grid gap-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-primary-700 dark:text-primary-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                    <p>{exp.date}</p>
                    <p className="text-xs">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, rIndex) => (
                    <li
                      key={rIndex}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <svg className="w-5 h-5 text-secondary-500 dark:text-secondary-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses & Certifications */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            Licenses & Certifications
          </h2>
          
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 hover:shadow-lg transition-shadow duration-300"
                style={{
                  borderImage: "linear-gradient(to bottom, #64748b, #0d9488, #a855f7) 1"
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-secondary-100 to-secondary-50 dark:from-secondary-900/30 dark:to-secondary-900/20 rounded-lg p-3">
                    <Award className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-primary-700 dark:text-primary-400 font-semibold">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {cert.date}
                    </p>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-3 text-xs text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 font-medium transition-colors"
                      >
                        {cert.credentialLabel || "View Credential"}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Experience */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center flex items-center justify-center gap-3">
            <Heart className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
            Volunteer Experience
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {volunteerExperience.map((vol, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-secondary-50 to-primary-50 dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg p-8 border border-secondary-200 dark:border-secondary-900"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-secondary-100 to-primary-100 dark:from-secondary-900/30 dark:to-primary-900/30 rounded-lg p-3">
                    <Heart className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {vol.organization}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{vol.location}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {vol.responsibilities.map((resp, rIndex) => (
                    <li
                      key={rIndex}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-secondary-500 mt-1">✓</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center flex items-center justify-center gap-3">
            <Globe className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            Languages
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="flex flex-wrap justify-center gap-6">
                {siteConfig.languages.map((language, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gradient-to-r from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-900/30 px-6 py-4 rounded-lg border border-secondary-200 dark:border-secondary-800"
                  >
                    <Globe className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {language}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Download CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-secondary-600 dark:from-primary-800 dark:to-secondary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to work together?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s create something amazing together. I&apos;m always open to discussing new opportunities and ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 dark:text-primary-600 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get In Touch
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </Link>
            <a
              href="/resume/Grace_Li_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/20 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

