import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
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
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-white/50 section-divider"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center" style={{ color: '#543618' }}>
          experience
        </h2>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: '#543618' }}>
          my professional journey and the experiences that have shaped my growth
          as a software engineer.
        </p>

        {experiences.length === 0 ? (
          <div className="text-center py-20">
            <div className="glass-card rounded-2xl p-12 max-w-lg mx-auto">
              <p className="text-lg mb-4" style={{ color: '#543618' }}>
                experience will be displayed here. add your experiences in{" "}
                <code className="bg-white/30 px-2 py-1 rounded">
                  lib/data.ts
                </code>
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative pl-8 pb-8"
                style={{ borderLeft: '2px solid #DB5079' }}
              >
                {index !== experiences.length - 1 && (
                  <div
                    className="absolute top-0 w-3 h-3 rounded-full"
                    style={{ left: '-7px', backgroundColor: '#DB5079' }}
                  ></div>
                )}
                <div className="glass-card p-6 rounded-2xl">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold" style={{ color: '#543618' }}>
                        {exp.title}
                      </h3>
                      <p className="text-lg" style={{ color: '#DB5079' }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right mt-2 sm:mt-0">
                      <p style={{ color: '#543618' }}>{exp.period}</p>
                      <p className="text-sm opacity-70" style={{ color: '#543618' }}>{exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start" style={{ color: '#543618' }}>
                        <span
                          className="w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0"
                          style={{ backgroundColor: '#DB5079' }}
                        ></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/50 rounded-full text-sm font-bold"
                          style={{ color: '#DB5079' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
