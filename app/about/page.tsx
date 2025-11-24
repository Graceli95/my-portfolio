"use client";

import Link from "next/link";
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
import { Download, Briefcase, GraduationCap, Award, Heart, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-200/20 via-transparent to-secondary-200/20 dark:from-primary-900/20 dark:to-secondary-900/20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 dark:from-primary-400 dark:via-primary-300 dark:to-secondary-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {siteConfig.about.bio}
            </p>
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
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6" />
                Technical Expertise
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {areasOfExpertise.technical.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-secondary-600 dark:text-secondary-400 mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6" />
                Professional Skills
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {areasOfExpertise.professional.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
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
              <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
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
                <div 
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-primary-300 dark:border-primary-700 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 ring-4 ring-white dark:ring-gray-900"></div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 ml-4 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {edu.institution}
                        </h3>
                        <p className="text-primary-600 dark:text-primary-400 font-semibold">
                          {edu.field}
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
                  </div>
                </div>
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
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                    <p>{exp.date}</p>
                    <p className="text-xs">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, rIndex) => (
                    <li
                      key={rIndex}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-primary-500 mt-1">→</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border-l-4 border-gradient-to-b from-primary-500 to-secondary-500 hover:shadow-lg transition-shadow duration-300"
                style={{
                  borderImage: "linear-gradient(to bottom, #a855f7, #14b8a6) 1"
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-lg p-3">
                    <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400 font-semibold">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      {cert.date}
                    </p>
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
                    className="flex items-center gap-3 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 px-6 py-4 rounded-lg border border-primary-200 dark:border-primary-800"
                  >
                    <Globe className="w-6 h-6 text-primary-600 dark:text-primary-400" />
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
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-700 dark:to-secondary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Want to know more?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Download my resume for a complete overview of my experience, skills, and accomplishments.
          </p>
          <a
            href="/resume/Grace_Li_Resume.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Download className="w-5 h-5" />
            Download My Resume (PDF)
          </a>
          
          <div className="mt-12">
            <p className="text-white/90 mb-4">Ready to work together?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/20 transform hover:-translate-y-0.5 transition-all duration-200"
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

