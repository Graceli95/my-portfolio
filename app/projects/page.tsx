"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/config/projectsData";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectGalleryLightbox from "@/components/projects/ProjectGalleryLightbox";
import { Github, ExternalLink, Code2, Layers, Filter, ZoomIn } from "lucide-react";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all");
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Get unique technologies for filter
  const allTechnologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  ).sort();

  // Filter projects based on selected technology
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter((project) => 
        project.technologies.some((tech) => 
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      );

  // Get technology categories for quick filters
  const techCategories = [
    { name: "All", value: "all", icon: Layers },
    { name: "AI/ML", value: "langchain", icon: Code2 },
    { name: "Full Stack", value: "spring boot", icon: Code2 },
    { name: "Frontend", value: "react", icon: Code2 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-200/20 via-transparent to-secondary-200/20 dark:from-primary-900/20 dark:to-secondary-900/20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-primary-800 dark:text-primary-200">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              A collection of full-stack and AI-powered applications showcasing my technical skills and problem-solving abilities
            </p>
            <div className="flex flex-wrap gap-2 justify-center items-center text-sm text-gray-600 dark:text-gray-400">
              <Code2 className="w-5 h-5 text-primary-500 dark:text-primary-400" />
              <span>{projects.length} Projects</span>
              <span className="mx-2">•</span>
              <Github className="w-5 h-5 text-primary-500 dark:text-primary-400" />
              <span>All Open Source</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Filter by Technology
              </h2>
            </div>
            
            {/* Quick Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {techCategories.map((category) => {
                const Icon = category.icon;
                const isActive = filter === category.value;
                return (
                  <button
                    key={category.value}
                    onClick={() => setFilter(category.value)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 border-2 ${
                      isActive
                        ? "bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg scale-105 border-secondary-500"
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700 hover:border-secondary-300"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                  </button>
                );
              })}
            </div>

            {/* All Technologies Dropdown */}
            <div className="mt-4">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full sm:w-auto px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-secondary-500 dark:focus:ring-secondary-400"
              >
                <option value="all">All Technologies</option>
                {allTechnologies.map((tech) => (
                  <option key={tech} value={tech.toLowerCase()}>
                    {tech}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Results Count */}
            <div className="mb-8 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Showing{" "}
                <span className="font-semibold text-secondary-600 dark:text-secondary-400">
                  {filteredProjects.length}
                </span>{" "}
                {filteredProjects.length === 1 ? "project" : "projects"}
                {filter !== "all" && (
                  <span>
                    {" "}
                    with{" "}
                    <span className="font-semibold text-secondary-600 dark:text-secondary-400">
                      {filter}
                    </span>
                  </span>
                )}
              </p>
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <AnimatePresence mode="wait">
                <motion.div
                  key={filter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                    >
                    {/* Project Image */}
                    <div 
                      className="relative h-52 bg-gray-50 dark:bg-gray-900 overflow-hidden group cursor-pointer"
                      onClick={() => {
                        setSelectedProject(project);
                        setGalleryOpen(true);
                      }}
                    >
                      {project.image ? (
                        <>
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          {/* Hover Overlay with Zoom Icon */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-gray-800/90 rounded-full p-3 transform group-hover:scale-110">
                              <ZoomIn className="w-6 h-6 text-gray-900 dark:text-white" />
                            </div>
                          </div>
                        </>
                        ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Code2 className="w-20 h-20 text-secondary-300 dark:text-secondary-700" />
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4">
                      {/* Title & Description Section */}
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 6).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 6 && (
                            <span className="px-2.5 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-md">
                              +{project.technologies.length - 6}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2 justify-center">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-900 dark:border-gray-600 text-gray-900 dark:text-gray-300 rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white transition-all"
                          >
                            <Github className="w-4 h-4" />
                            <span className="text-sm font-medium">GitHub</span>
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all shadow-md hover:shadow-lg"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm font-medium">Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            ) : (
              <div className="text-center py-12">
                <Code2 className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  No projects found with the selected filter.
                </p>
                <button
                  onClick={() => setFilter("all")}
                  className="mt-4 px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200"
                >
                  Clear Filter
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-secondary-600 dark:from-primary-800 dark:to-secondary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Interested in working together?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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
              href="https://github.com/Graceli95"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/20 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
              View GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Lightbox */}
      {galleryOpen && selectedProject && (
        <ProjectGalleryLightbox
          images={selectedProject.images}
          descriptions={selectedProject.imageDescriptions}
          projectTitle={selectedProject.title}
          onClose={() => {
            setGalleryOpen(false);
            setSelectedProject(null);
          }}
        />
      )}
    </div>
  );
}

