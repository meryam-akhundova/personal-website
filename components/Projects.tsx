"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { useRef } from "react";
import ScrollAnimation from "./ScrollAnimation";

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-1 sm:px-2 lg:px-4 relative overflow-hidden"
      style={{ backgroundColor: 'rgba(219, 185, 173, 0.3)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-white/50"></div>
      <div className="max-w-4xl mr-auto ml-0 mb-12 relative z-10 pl-12 sm:pl-16 lg:pl-20">
        <ScrollAnimation>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-left" style={{ color: '#543618' }}>
            featured projects
          </h2>
          <p className="text-lg text-left mb-12 max-w-2xl lowercase leading-relaxed" style={{ color: '#543618' }}>
            text
          </p>
        </ScrollAnimation>
      </div>

      {projects.length === 0 ? (
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-20 glass-card rounded-2xl p-8">
            <p className="text-lg mb-4" style={{ color: '#543618' }}>
              Projects will be displayed here. Add your projects in{" "}
              <code className="glass px-2 py-1 rounded">
                lib/data.ts
              </code>
            </p>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mr-auto ml-0 relative z-10 pl-12 sm:pl-16 lg:pl-20">
          <ScrollAnimation delay={200}>
            <div className="relative">
              {/* Left scroll button */}
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white/90 rounded-full p-3 shadow-lg glass-strong transition-all"
                aria-label="Scroll left"
              >
                <svg
                  className="w-6 h-6"
                  style={{ color: '#543618' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Scrollable container */}
              <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-16 py-4"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {projects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group block flex-shrink-0 w-80 transform-gpu"
                    style={{ transformOrigin: 'center center' }}
                  >
                    <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                      {project.imageUrl ? (
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300 grayscale"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white/30">
                          <svg
                            className="w-24 h-24"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-2 transition-colors group-hover:text-brown-moss"
                        style={{ color: '#543618' }}
                      >
                        {project.title}
                      </h3>
                      <p className="mb-4 text-sm line-clamp-2 leading-relaxed" style={{ color: '#543618' }}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/50 text-xs rounded-full glass"
                            style={{ color: '#543618' }}
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 bg-white/50 text-xs rounded-full glass" style={{ color: '#543618' }}>
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="font-medium flex items-center gap-2 text-sm group-hover:text-[#DB5079] transition-colors" style={{ color: '#543618' }}>
                        view details
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Right scroll button */}
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white/90 rounded-full p-3 shadow-lg glass-strong transition-all"
                aria-label="Scroll right"
              >
                <svg
                  className="w-6 h-6"
                  style={{ color: '#543618' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </ScrollAnimation>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
