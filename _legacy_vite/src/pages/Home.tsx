import React from 'react';
import { Button } from '../components/Button';
import { PortfolioSection } from '../components/PortfolioSection';

export const Home: React.FC = () => {
    return (
        <>
            <header className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                    <span className="bg-clip-text text-transparent bg-accent-gradient">
                        Macallan Butler
                    </span>
                </h1>
                <p className="text-lg sm:text-xl text-text-secondary max-w-2xl font-light leading-relaxed">
                    Building <span className="text-white font-medium">scalable</span>, <span className="text-white font-medium">user-centric</span> applications with precision and care.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button variant="primary" href="mailto:hello@macallanbutler.com">
                        Get in touch
                    </Button>
                    <Button variant="secondary" href="/resume.pdf" download="Macallan_Butler_Resume.pdf">
                        Download Resume
                    </Button>
                </div>
            </header>

            <PortfolioSection />
        </>
    );
};
