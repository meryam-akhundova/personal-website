"use client";

import Image from "next/image";
import { experiences } from "@/lib/data";
import ScrollAnimation from "./ScrollAnimation";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 px-1 sm:px-2 lg:px-4 relative overflow-hidden"
      style={{ backgroundColor: 'rgba(236, 218, 154, 0.3)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-white/50"></div>
      <div className="max-w-4xl mr-auto ml-0 relative z-10 pl-12 sm:pl-16 lg:pl-20">
        <ScrollAnimation>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-left" style={{ color: '#543618' }}>
            experience
          </h2>
          <p className="text-lg text-left mb-12 max-w-2xl lowercase leading-relaxed" style={{ color: '#543618' }}>
            text
          </p>
        </ScrollAnimation>

        {experiences.length === 0 ? (
          <ScrollAnimation delay={100}>
            <div className="text-center py-20 glass-card rounded-2xl p-8">
              <p className="text-lg mb-4" style={{ color: '#543618' }}>
                Experience will be displayed here. Add your experiences in{" "}
                <code className="glass px-2 py-1 rounded">
                  lib/data.ts
                </code>
              </p>
            </div>
          </ScrollAnimation>
        ) : (
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ScrollAnimation key={exp.id} delay={index * 100}>
                <div
                  key={exp.id}
                  className="glass-card rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div className="flex-1 flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 relative bg-white/50 rounded-lg flex items-center justify-center glass">
                        {exp.logoUrl ? (
                          <Image
                            src={exp.logoUrl}
                            alt={exp.company}
                            fill
                            className="object-contain p-2"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-2xl font-bold" style={{ color: '#DB5079' }}>
                            {exp.company.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1" style={{ color: '#543618' }}>
                          {exp.title}
                        </h3>
                        <p className="text-lg font-medium mb-1" style={{ color: '#543618' }}>
                          {exp.company}
                        </p>
                        <p className="text-sm mb-2" style={{ color: '#543618' }}>
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    <div className="text-sm sm:text-right mt-2 sm:mt-0" style={{ color: '#543618' }}>
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4 list-disc list-inside">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm leading-relaxed"
                        style={{ color: '#543618' }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-4 border-t" style={{ borderColor: 'rgba(84, 54, 24, 0.2)' }}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/50 text-xs rounded-full glass"
                          style={{ color: '#543618' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
