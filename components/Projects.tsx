import Image from "next/image";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-1 sm:px-2 lg:px-4 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-white/50 section-divider"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center" style={{ color: '#543618' }}>
          featured projects
        </h2>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto" style={{ color: '#543618' }}>
          a collection of projects i&apos;ve built to learn new technologies and
          solve interesting problems.
        </p>

        {projects.length === 0 ? (
          <div className="text-center py-20">
            <div className="glass-card rounded-2xl p-12 max-w-lg mx-auto">
              <p className="text-lg mb-4" style={{ color: '#543618' }}>
                projects will be displayed here. add your projects in{" "}
                <code className="bg-white/30 px-2 py-1 rounded">
                  lib/data.ts
                </code>
              </p>
              <p style={{ color: '#543618' }}>
                include project images in the{" "}
                <code className="bg-white/30 px-2 py-1 rounded">
                  public/projects/
                </code>{" "}
                directory
              </p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden"
              >
                {project.imageUrl && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-1" style={{ color: '#543618' }}>
                    {project.title}
                  </h3>
                  {project.period && (
                    <p className="text-sm mb-2 opacity-70" style={{ color: '#543618' }}>
                      {project.period}
                    </p>
                  )}
                  <p className="mb-4" style={{ color: '#543618' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/50 rounded-full text-sm font-bold"
                        style={{ color: '#DB5079' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:opacity-70 transition-opacity"
                        style={{ color: '#543618' }}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:opacity-70 transition-opacity"
                        style={{ color: '#543618' }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {project.liveLabel ?? "Live Demo"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
