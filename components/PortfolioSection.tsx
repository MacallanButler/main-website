"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { projectsData } from '../data/projects';

export const PortfolioSection: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [hasScrolled, setHasScrolled] = useState(false);

    const handleScroll = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const scrollPosition = container.scrollLeft;

            const cards = container.querySelectorAll('[data-project-card]');
            let minDistance = Infinity;
            let targetIndex = 0;

            cards.forEach((card, index) => {
                const rect = (card as HTMLElement).getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                // Distance from center of card to center of container
                const cardCenter = rect.left + rect.width / 2;
                const containerCenter = containerRect.left + containerRect.width / 2;
                const distance = Math.abs(cardCenter - containerCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    targetIndex = index;
                }
            });

            setActiveIndex(targetIndex);

            if (scrollPosition > 50 && !hasScrolled) {
                setHasScrolled(true);
            }
        }
    };

    const scrollToProject = (index: number) => {
        if (scrollRef.current) {
            const cards = scrollRef.current.querySelectorAll('[data-project-card]');
            if (cards[index]) {
                cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    };

    // Initial check for active index
    useEffect(() => {
        handleScroll();
        const ref = scrollRef.current;
        if (ref) ref.addEventListener('scroll', handleScroll);
        return () => {
            if (ref) ref.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section id="portfolio" className="py-2 space-y-4 relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 px-1">
                <div className="space-y-1">
                    <h2 className="text-3xl font-mono font-medium text-white tracking-tight">
                        Selected Works
                    </h2>
                    <p className="text-text-secondary text-sm max-w-md">
                        A collection of high-impact digital products.
                    </p>
                </div>

                <div className="hidden md:flex items-center gap-4 text-text-secondary font-mono text-sm">
                    {/* Page Counter */}
                    <span>
                        {activeIndex + 1 < 10 ? `0${activeIndex + 1}` : activeIndex + 1}
                        <span className="opacity-30 mx-2">/</span>
                        {projectsData.length < 10 ? `0${projectsData.length}` : projectsData.length}
                    </span>
                </div>
            </div>

            {/* Carousel Container with Side Controls */}
            <div className="relative group/carousel">
                {/* Left Button */}
                <button
                    onClick={() => scrollToProject(Math.max(0, activeIndex - 1))}
                    disabled={activeIndex === 0}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-black/50 backdrop-blur-sm text-white/90 border border-white/10 hover:bg-rose-500 hover:text-white hover:border-rose-500 disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 hidden md:flex items-center justify-center transform hover:scale-110 active:scale-95 shadow-lg cursor-pointer"
                    aria-label="Previous Project"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                {/* Right Button */}
                <button
                    onClick={() => scrollToProject(Math.min(projectsData.length - 1, activeIndex + 1))}
                    disabled={activeIndex === projectsData.length - 1}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-black/50 backdrop-blur-sm text-white/90 border border-white/10 hover:bg-rose-500 hover:text-white hover:border-rose-500 disabled:opacity-0 disabled:pointer-events-none transition-all duration-300 hidden md:flex items-center justify-center transform hover:scale-110 active:scale-95 shadow-lg cursor-pointer"
                    aria-label="Next Project"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>

                {/* Scroll Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 sm:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4 sm:mx-0 sm:px-0"
                >
                    {projectsData.map((project, index) => (
                        <Link
                            key={index}
                            href={`/projects/${project.id}`}
                            data-project-card
                            className="group relative flex-none w-[85vw] sm:w-[600px] snap-center block"
                            draggable="false"
                        >
                            <div className="space-y-4 w-full">
                                {/* Project Image */}
                                <div className="aspect-video w-full bg-surface rounded-sm relative overflow-hidden ring-1 ring-white/10 group-hover:ring-rose-500/50 transition-all duration-500">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
                                        draggable="false"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

                                    <div className="absolute bottom-4 left-4 font-mono text-xs text-rose-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        VIEW PROJECT_
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <div className="flex items-baseline justify-between">
                                        <h3 className="text-xl font-bold text-text-primary group-hover:text-white transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="font-mono text-xs text-text-secondary uppercase tracking-wider group-hover:text-rose-400/80 transition-colors">
                                            {project.category}
                                        </span>
                                    </div>
                                    <p className="text-text-secondary leading-relaxed text-sm max-w-md group-hover:text-text-primary/90 transition-colors line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}

                    {/* Spacer for end of scroll */}
                    <div className="w-4 sm:w-0 flex-none" />
                </div>
            </div>

            {/* Pagination Dots (Mobile/All) */}
            <div className="flex justify-center gap-3">
                {projectsData.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => scrollToProject(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${idx === activeIndex
                            ? 'w-8 bg-rose-500'
                            : 'w-1.5 bg-white/20 hover:bg-white/40'
                            }`}
                        aria-label={`Go to project ${idx + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Hint (Fades out) */}
            <div className={`
                absolute bottom-0 right-0 pointer-events-none transition-opacity duration-1000
                ${hasScrolled ? 'opacity-0' : 'opacity-100'}
            `}>
                <div className="flex items-center gap-2 text-rose-500 font-mono text-xs animate-pulse opacity-80">
                    <span className="hidden sm:inline">SCROLL</span>
                    <span>→</span>
                </div>
            </div>

        </section>
    );
};
