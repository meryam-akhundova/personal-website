"use client";

import { skills } from "@/lib/data";
import ScrollAnimation from "./ScrollAnimation";

export default function About() {
  // Flatten all skills into a single array
  const allSkills = Object.values(skills).flat();

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-1 sm:px-2 lg:px-4 relative overflow-hidden"
      style={{ backgroundColor: 'rgba(180, 188, 177, 0.3)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-white/50"></div>
      <div className="max-w-6xl mr-auto ml-0 relative z-10 pl-12 sm:pl-16 lg:pl-20">
        <ScrollAnimation>
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-left" style={{ color: '#543618' }}>
            about me
          </h2>
        </ScrollAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Text Section Card */}
          <ScrollAnimation delay={100}>
            <div className="glass-card rounded-2xl p-8 sm:p-12">
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#543618' }}>
                text
              </p>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#543618' }}>
                text
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#543618' }}>
                text
              </p>
            </div>
          </ScrollAnimation>

          {/* Tech Stack Section Card */}
          <ScrollAnimation delay={200}>
            <div className="glass-card rounded-2xl p-8 sm:p-12">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#543618' }}>
                tech stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {allSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/50 rounded-full text-sm font-bold glass"
                    style={{ color: '#DB5079' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
