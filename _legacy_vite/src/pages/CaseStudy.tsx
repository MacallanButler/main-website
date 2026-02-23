import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { projectsData } from '../data/projects';

export const CaseStudy: React.FC = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const project = projectsData.find(p => p.id === projectId);

    useEffect(() => {
        if (!project) {
            // Optional: Redirect to home or show 404
            // navigate('/');
        }
    }, [project, navigate]);

    if (!project) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-4">
                <h2 className="text-2xl text-white">Project not found</h2>
                <Link to="/" className="text-rose-400 hover:text-rose-300">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="space-y-12 animate-in fade-in duration-500">

            {/* Navigation / Breadcrumb */}
            <div className="border-b border-white/10 pb-4">
                <Link to="/" className="text-text-secondary hover:text-white transition-colors font-mono text-sm flex items-center gap-2">
                    ← Back to Home
                </Link>
            </div>

            {/* Header Section */}
            <header className="space-y-6">
                <div className="space-y-2">
                    <span className="font-mono text-rose-400 text-sm tracking-wider uppercase">Case Study: {project.category}</span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary">
                        {project.title}
                    </h1>
                </div>
                <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl leading-relaxed font-light">
                    {project.tagline}
                </p>
            </header>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    {/* Hero Image */}
                    <div className="aspect-video w-full bg-surface rounded-lg border border-white/5 flex items-center justify-center text-text-secondary overflow-hidden relative group">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                        />
                    </div>

                    <div className="space-y-8">
                        <section className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-sm font-mono text-rose-400 uppercase tracking-wider">The Challenge</h3>
                                <h4 className="text-2xl font-bold text-white">{project.challenge.title}</h4>
                            </div>
                            <p className="text-text-secondary leading-relaxed text-lg">
                                {project.challenge.description}
                            </p>
                        </section>

                        <section className="space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-sm font-mono text-rose-400 uppercase tracking-wider">The Solution</h3>
                                <h4 className="text-2xl font-bold text-white">{project.solution.title}</h4>
                            </div>
                            <p className="text-text-secondary leading-relaxed text-lg">
                                {project.solution.description}
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h3 className="text-2xl font-bold text-white">Key Features</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-text-secondary">
                                        <span className="text-rose-400 mt-1.5 text-xs">●</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>
                </div>

                {/* Sidebar Details */}
                <aside className="space-y-8">
                    <div className="bg-surface p-6 rounded-lg border border-white/5 space-y-6 sticky top-8">
                        <h4 className="font-bold text-white text-lg border-b border-white/10 pb-2">Project Details</h4>

                        <dl className="space-y-4 text-sm">
                            <div className="flex flex-col gap-1">
                                <dt className="text-text-secondary font-mono text-xs uppercase">Role</dt>
                                <dd className="text-white font-medium">{project.role}</dd>
                            </div>
                            <div className="flex flex-col gap-1">
                                <dt className="text-text-secondary font-mono text-xs uppercase">Year</dt>
                                <dd className="text-white font-medium">{project.year}</dd>
                            </div>
                            <div className="flex flex-col gap-1">
                                <dt className="text-text-secondary font-mono text-xs uppercase">Tech Stack</dt>
                                <dd className="flex flex-wrap gap-2">
                                    {project.stack.map(tech => (
                                        <span key={tech} className="px-2 py-1 bg-white/5 rounded text-xs text-rose-200/80 border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </dd>
                            </div>
                        </dl>

                        {project.liveUrl && project.liveUrl !== '#' && (
                            <Button className="w-full" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                Visit Live Site
                            </Button>
                        )}
                    </div>
                </aside>
            </div>
        </div>
    );
};
