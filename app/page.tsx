import { Button } from '@/components/Button';
import { PortfolioSection } from '@/components/PortfolioSection';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row flex-grow min-h-0 gap-8 md:gap-0">
      {/* Left Column — Hero */}
      <aside className="flex-shrink-0 md:w-[35%] md:max-w-sm flex flex-col justify-between md:pr-10 md:border-r md:border-white/5">
        <div className="space-y-5">
          <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            <span className="bg-clip-text text-transparent bg-accent-gradient">
              Macallan Butler
            </span>
          </h1>
          <p className="text-base md:text-lg text-text-secondary font-light leading-relaxed">
            Building <span className="text-white font-medium">scalable</span>, <span className="text-white font-medium">user-centric</span> applications with precision and care.
          </p>

          <div className="flex flex-row md:flex-col gap-3 pt-2">
            <Button variant="primary" href="mailto:hello@macallanbutler.com">
              Get in touch
            </Button>
            <Button variant="secondary" href="/resume.pdf" download="Macallan_Butler_Resume.pdf">
              Download Resume
            </Button>
          </div>
        </div>

        {/* Footer — only visible on desktop, anchored to bottom */}
        <div className="hidden md:block text-text-secondary/30 text-xs font-mono pt-8">
          &copy; {new Date().getFullYear()} Macallan Butler
        </div>
      </aside>

      {/* Right Column — Projects */}
      <div className="flex-grow min-h-0 md:pl-8 flex flex-col">
        <PortfolioSection />
      </div>
    </div>
  );
}
