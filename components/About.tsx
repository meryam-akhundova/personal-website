"use client";

import { skills } from "@/lib/data";
import ScrollAnimation from "./ScrollAnimation";
import ParallaxSection from "./ParallaxSection";

export default function About() {
  // Flatten all skills into a single array
  const allSkills = Object.values(skills).flat();

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-1 sm:px-2 lg:px-4 relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 229, 212, 0.4) 0%, rgba(255, 229, 212, 0.3) 100%)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        {/* Animated glossy shine - smoother gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(110deg, transparent 0%, rgba(255, 255, 255, 0.15) 25%, rgba(255, 255, 255, 0.25) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 100%)',
            backgroundSize: '300% 100%',
            animation: 'shimmer 10s ease-in-out infinite',
            transform: 'skewX(-20deg)',
            filter: 'blur(20px)',
            WebkitFilter: 'blur(20px)',
          }}
        />
        {/* Subtle animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)',
            animation: 'pulse 8s ease-in-out infinite',
            filter: 'blur(30px)',
            WebkitFilter: 'blur(30px)',
          }}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-white/50"></div>
      <ParallaxSection speed={0.3}>
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
                hello! i'm a first-year software engineering student at the university of waterloo.
              </p>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: '#543618' }}>
                i'm currently searching for co-op opportunities for the summer of 2026.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#543618' }}>
                i have experience in full-stack development and am looking to explore various fields of software engineering!
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
      </ParallaxSection>
    </section>
  );
}
