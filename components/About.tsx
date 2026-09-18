"use client";

import { education, skillLabels, skills } from "@/lib/data";

export default function About() {
  const skillEntries = Object.entries(skills) as [keyof typeof skills, string[]][];

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
          zIndex: 0,
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
      <div className="absolute top-0 left-0 right-0 h-px bg-white/50 section-divider"></div>
      <div className="max-w-6xl mr-auto ml-0 relative z-10 pl-12 sm:pl-16 lg:pl-20">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-left" style={{ color: '#543618' }}>
          about me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Text Section Card */}
          <div className="glass-card rounded-2xl p-8 sm:p-12">
            <p className="text-lg mb-6 leading-relaxed" style={{ color: '#543618' }}>
              hello! i&apos;m a second-year software engineering student at the university of waterloo.
            </p>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: '#543618' }}>
              i recently finished a tools developer co-op at mappedin, where i built location-update tooling, data-sync pipelines, and workflow automation for a team of 20+ mappers.
            </p>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: '#543618' }}>
              right now i&apos;m building parla, a language-learning app with ai-powered conversations, and i&apos;m always looking to explore new areas of software engineering.
            </p>
            <div className="pt-2">
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#543618' }}>
                education
              </h3>
              <p className="text-lg font-medium" style={{ color: '#DB5079' }}>
                {education.degree}
              </p>
              <p className="text-base" style={{ color: '#543618' }}>
                {education.school} · {education.location}
              </p>
              <p className="text-sm opacity-70 mb-3" style={{ color: '#543618' }}>
                {education.period}
              </p>
              {education.awards && education.awards.length > 0 && (
                <ul className="space-y-1">
                  {education.awards.map((award) => (
                    <li key={award} className="text-sm" style={{ color: '#543618' }}>
                      {award}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Tech Stack Section Card */}
          <div className="glass-card rounded-2xl p-8 sm:p-12">
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#543618' }}>
              tech stack
            </h3>
            <div className="space-y-5">
              {skillEntries.map(([key, items]) => (
                <div key={key}>
                  <p className="text-sm font-semibold mb-2 opacity-70" style={{ color: '#543618' }}>
                    {skillLabels[key]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
