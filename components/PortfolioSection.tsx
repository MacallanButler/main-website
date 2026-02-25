"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { projectsData } from '../data/projects';

export const PortfolioSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeProject = projectsData[activeIndex];

    const goTo = (index: number) => {
        setActiveIndex(Math.max(0, Math.min(index, projectsData.length - 1)));
    };

    return (
        <section id="portfolio" className="flex flex-col flex-grow min-h-0 gap-3">
            {/* Header row */}
            <div className="flex items-end justify-between flex-shrink-0">
                <h2 className="text-lg font-mono font-medium text-white/60 tracking-tight">
                    Selected Works
                </h2>
                <span className="text-text-secondary font-mono text-xs">
                    {activeIndex + 1 < 10 ? `0${activeIndex + 1}` : activeIndex + 1}
                    <span className="opacity-30 mx-1.5">/</span>
                    {projectsData.length < 10 ? `0${projectsData.length}` : projectsData.length}
                </span>
            </div>

            {/* Featured Project Card */}
            <div className="relative flex-grow min-h-0 group/featured">
                <Link
                    href={`/projects/${activeProject.id}`}
                    className="block h-full relative rounded-lg overflow-hidden ring-1 ring-white/[0.08] hover:ring-rose-500/30 transition-all duration-500"
                >
                    <img
                        src={activeProject.image}
                        alt={activeProject.title}
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-700 ease-out hover:scale-[1.02]"
                        draggable="false"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    {/* Project info */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                        <div className="flex items-end justify-between gap-4">
                            <div className="space-y-1">
                                <span className="font-mono text-[11px] text-rose-400 uppercase tracking-widest">
                                    {activeProject.category}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-white">
                                    {activeProject.title}
                                </h3>
                                <p className="text-white/60 text-sm max-w-md leading-relaxed hidden sm:block">
                                    {activeProject.description}
                                </p>
                            </div>
                            <span className="font-mono text-xs text-rose-400 opacity-0 group-hover/featured:opacity-100 transform translate-y-2 group-hover/featured:translate-y-0 transition-all duration-300 flex-shrink-0">
                                VIEW →
                            </span>
                        </div>
                    </div>

                    {/* Arrow buttons */}
                    <button
                        onClick={(e) => { e.preventDefault(); goTo(activeIndex - 1); }}
                        disabled={activeIndex === 0}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/40 backdrop-blur-sm text-white/80 border border-white/10 hover:bg-rose-500 hover:text-white hover:border-rose-500 disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 hidden md:flex items-center justify-center hover:scale-110 active:scale-95 cursor-pointer"
                        aria-label="Previous Project"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>
                    <button
                        onClick={(e) => { e.preventDefault(); goTo(activeIndex + 1); }}
                        disabled={activeIndex === projectsData.length - 1}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/40 backdrop-blur-sm text-white/80 border border-white/10 hover:bg-rose-500 hover:text-white hover:border-rose-500 disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 hidden md:flex items-center justify-center hover:scale-110 active:scale-95 cursor-pointer"
                        aria-label="Next Project"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </Link>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-1.5 flex-shrink-0 overflow-x-auto scrollbar-hide">
                {projectsData.map((project, idx) => (
                    <button
                        key={project.id}
                        onClick={() => goTo(idx)}
                        className={`relative flex-1 min-w-0 h-12 md:h-14 rounded-md overflow-hidden transition-all duration-300 cursor-pointer ring-1
                            ${idx === activeIndex
                                ? 'ring-rose-500/60 opacity-100'
                                : 'ring-white/[0.06] opacity-40 hover:opacity-70'
                            }`}
                        aria-label={`View ${project.title}`}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            draggable="false"
                        />
                    </button>
                ))}
            </div>
        </section>
    );
};
