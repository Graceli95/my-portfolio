"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { events, eventCategories } from "@/config/eventsData";
import { Calendar, MapPin, Users, Award, Code, Rocket, ExternalLink } from "lucide-react";
import ImageLightbox from "@/components/events/ImageLightbox";

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxEventTitle, setLightboxEventTitle] = useState("");

  // Filter events by category
  const filteredEvents = selectedCategory === "all"
    ? events
    : events.filter((event) => event.category === selectedCategory);

  // Get event counts by category
  const getCategoryCount = (category: string) => {
    return events.filter((event) => event.category === category).length;
  };

  // Icon mapping for categories
  const categoryIcons: Record<string, any> = {
    conference: Award,
    hackathon: Code,
    community: Users,
    professional: Rocket,
  };

  // Lightbox handlers
  const openLightbox = (images: string[], index: number, eventTitle: string) => {
    setLightboxImages(images);
    setLightboxIndex(index);
    setLightboxEventTitle(eventTitle);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const previousImage = () => {
    setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
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
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full p-4">
                <Calendar className="w-12 h-12 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 pb-4 leading-relaxed bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 dark:from-primary-400 dark:via-primary-300 dark:to-secondary-400 bg-clip-text text-transparent">
              Events, Conferences & Community Engagement
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Continuous learning through professional development and community involvement
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* All Categories */}
              <button
                onClick={() => setSelectedCategory("all")}
                className={`p-4 rounded-xl text-left transition-all duration-200 ${
                  selectedCategory === "all"
                    ? "bg-gradient-to-r from-primary-600 to-secondary-500 text-white shadow-lg scale-105"
                    : "bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">All Events</span>
                </div>
                <p className="text-sm opacity-90">{events.length} total</p>
              </button>

              {/* Individual Categories */}
              {Object.entries(eventCategories).map(([key, value]) => {
                const Icon = categoryIcons[key];
                const count = getCategoryCount(key);
                const isActive = selectedCategory === key;

                return (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`p-4 rounded-xl text-left transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-primary-600 to-secondary-500 text-white shadow-lg scale-105"
                        : "bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5" />
                      <span className="font-semibold text-sm">{value.label}</span>
                    </div>
                    <p className={`text-xs ${isActive ? "opacity-90" : "text-gray-600 dark:text-gray-400"}`}>
                      {count} {count === 1 ? "event" : "events"}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Events Display */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Results Count */}
            <div className="mb-8">
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Showing{" "}
                <span className="font-semibold text-primary-600 dark:text-primary-400">
                  {filteredEvents.length}
                </span>{" "}
                {filteredEvents.length === 1 ? "event" : "events"}
                {selectedCategory !== "all" && (
                  <span>
                    {" "}in{" "}
                    <span className="font-semibold text-secondary-600 dark:text-secondary-400">
                      {eventCategories[selectedCategory as keyof typeof eventCategories].label}
                    </span>
                  </span>
                )}
              </p>
            </div>

            {/* Events List */}
            {filteredEvents.length > 0 ? (
              <div className="space-y-6">
                {filteredEvents.map((event) => {
                  const Icon = categoryIcons[event.category];
                  return (
                    <div
                      key={event.id}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          {/* Event Content */}
                          <div className="flex-1">
                            {/* Category Badge & Icon */}
                            <div className="flex items-center gap-3 mb-3">
                              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-lg p-2">
                                <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                              </div>
                              <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full">
                                {eventCategories[event.category].label}
                              </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                              {event.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                              {event.description}
                            </p>

                            {/* Date & Location */}
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-secondary-600 dark:text-secondary-400" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                          </div>

                          {/* Link (if available) */}
                          {event.link && (
                            <div className="md:self-center">
                              <a
                                href={event.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-secondary-500 text-white rounded-lg hover:from-primary-700 hover:to-secondary-600 transition-all duration-200 shadow-md hover:shadow-lg"
                              >
                                <span className="text-sm font-medium">Learn More</span>
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </div>
                          )}
                        </div>

                        {/* Horizontal Scroll Image Gallery (if images available) */}
                        {event.images && event.images.length > 0 && (
                          <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
                              {event.images.map((image, index) => (
                                <button
                                  key={index}
                                  onClick={() => openLightbox(event.images!, index, event.title)}
                                  className="flex-shrink-0 w-64 h-48 relative rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-600 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-lg group cursor-pointer"
                                  aria-label={`View ${event.title} - Image ${index + 1}`}
                                >
                                  <Image
                                    src={image}
                                    alt={`${event.title} - Image ${index + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                  {/* Click hint overlay */}
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-gray-800/90 rounded-full px-3 py-1 text-xs font-medium text-gray-900 dark:text-white">
                                      Click to view
                                    </div>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
                  No events found in this category yet.
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mb-6">
                  Check back soon for updates on conferences, hackathons, and community events!
                </p>
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  View All Events
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-700 dark:to-secondary-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 rounded-full p-4">
              <Users className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Interested in connecting at an upcoming event?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            I&apos;m always excited to attend tech conferences, hackathons, and community meetups. Let&apos;s connect and collaborate!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Users className="w-5 h-5" />
            Let&apos;s Connect
          </Link>
        </div>
      </section>

      {/* Image Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrevious={previousImage}
          eventTitle={lightboxEventTitle}
        />
      )}
    </div>
  );
}

