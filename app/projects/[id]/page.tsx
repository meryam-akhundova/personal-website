import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import MobileCarousel from "@/components/MobileCarousel";
import { projects } from "@/lib/data";

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen">
            <Navigation />
            <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center mb-8 glass-card rounded-lg px-4 py-2 text-brown-moss hover:text-brown-moss transition-colors"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
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
                        back to projects
                    </Link>

                    <div className="glass-card rounded-3xl overflow-hidden">
                        {(project.images && project.images.length > 0) || project.imageUrl ? (
                            (project.id === "project-1" || project.id === "project-3" || project.id === "project-4") ? (
                                <MobileCarousel
                                    images={project.images || (project.imageUrl ? [project.imageUrl] : [])}
                                    alt={project.title}
                                />
                            ) : (
                                <ImageCarousel
                                    images={project.images || (project.imageUrl ? [project.imageUrl] : [])}
                                    alt={project.title}
                                    projectId={project.id}
                                />
                            )
                        ) : null}

                        <div className="p-8 sm:p-12">
                            <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#543618' }}>
                                {project.title}
                            </h1>

                            {project.longDescription && (
                                <div className="mb-8">
                                    <h2 className="text-2xl font-semibold mb-4 lowercase" style={{ color: '#543618' }}>
                                        about this project
                                    </h2>
                                    <p className="text-lg leading-relaxed" style={{ color: '#543618' }}>
                                        {project.longDescription}
                                    </p>
                                </div>
                            )}

                            <div className="mb-8">
                                <h2 className="text-2xl font-semibold mb-4 lowercase" style={{ color: '#543618' }}>
                                    tech stack
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-4 py-2 rounded-full text-sm font-medium glass"
                                            style={{ backgroundColor: 'rgba(212, 220, 209, 0.4)', color: '#543618' }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* Bluevale Buzz (project-1), Stellify (project-3), TeddyTrail (project-4), and CabbageMeet (project-2): no GitHub links */}
                                {project.id !== "project-1" && project.id !== "project-2" && project.id !== "project-3" && project.id !== "project-4" && project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-all font-semibold shadow-lg glass btn-primary"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        view code
                                    </a>
                                )}
                                {/* Fitspo (project-5): keep github, remove live demo */}
                                {/* Bluevale Buzz (project-1) and Stellify (project-3): no links */}
                                {/* BerryBlitz (project-6): no live demo */}
                                {/* TeddyTrail (project-4): "devpost" instead of "live demo" */}
                                {/* CabbageMeet (project-2): "video demo" instead of "live demo" */}
                                {/* Other projects: show live demo if available */}
                                {project.id !== "project-1" && project.id !== "project-3" && project.id !== "project-5" && project.id !== "project-6" && project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-6 py-3 border-2 rounded-lg transition-colors font-semibold glass btn-secondary"
                                    >
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
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                        {project.id === "project-4" ? "devpost" : project.id === "project-2" ? "video demo" : "live demo"}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
