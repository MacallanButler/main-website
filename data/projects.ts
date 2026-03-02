export interface ProjectData {
    id: string;
    title: string;
    category: string;
    tagline: string;
    description: string; // Short description for cards
    image: string; // Path to project image
    heroImage?: string; // Placeholder for now

    // Case Study Content
    role: string;
    year: string;
    stack: string[];
    liveUrl?: string;

    challenge: {
        title: string;
        description: string;
    };
    solution: {
        title: string;
        description: string;
    };
    features: string[]; // List of key features
}

export const projectsData: ProjectData[] = [
    {
        id: "apex-altitude",
        title: "Apex Altitude",
        category: "High-Availability Booking System",
        tagline: "Scalable booking platform with real-time data integration.",
        description: "A comprehensive booking system engineered for high-availability, featuring real-time weather data aggregation, complex scheduling logic, and secure tier-based transaction flows.",
        image: "/projects/apex-altitude.png",
        role: "Frontend Developer",
        year: "2025",
        stack: ["React", "Vite", "TypeScript", "Tailwind CSS"],
        liveUrl: "https://apex-altitude.netlify.app", // Placeholder - Update after deploying
        challenge: {
            title: "Complex State Management",
            description: "Implementing a seamless booking flow that handles real-time updates (wind conditions, instructor availability) without compromising UI performance or user trust."
        },
        solution: {
            title: "Data-Driven UX",
            description: "Architected a 'Trust & Safety' module extending the core booking engine. Utilized a step-by-step wizard pattern to validate prerequisites against real-time API data, ensuring compliance and reducing drop-off rates."
        },
        features: [
            "Real-time Data Visualization",
            "Complex Scheduling Algorithm",
            "Role-Based Access Control",
            "Interactive FAQ System",
            "Regulatory Compliance Modules",
        ]
    },
    {
        id: "snow-leopard-trust",
        title: "Snow Leopard Trust",
        category: "Data Visualization Platform",
        tagline: "Interactive data storytelling platform for global conservation.",
        description: "An immersive educational portal transforming complex ecological data into engaging, interactive narratives using advanced scroll-based animations and data visualization.",
        image: "/projects/snow-leopard.png",
        role: "Full Stack Developer",
        year: "2024",
        stack: ["HTML5", "CSS3", "JavaScript", "GSAP"],
        liveUrl: "https://www.snowleopard.org",
        challenge: {
            title: "Abstract Data Representation",
            description: "Translating dry scientific data and abstract concepts (like climate change metrics) into a tangible, emotionally resonant user experience for a non-technical audience."
        },
        solution: {
            title: "Immersive Scrollytelling",
            description: "Developed a custom scrolling engine to trigger data visualizations. Users engage with comparative metrics (e.g., population density, territory size) through direct interaction, making the data personal and impactful."
        },
        features: [
            "Dynamic Map Visualization",
            "Interactive Charts & Metrics",
            "Gamified Data Modules",
            "Payment Gateway Integration",
            "Performance Optimized Animations"
        ]
    },
    {
        id: "peak-performance",
        title: "Peak Performance",
        category: "Analytics Dashboard",
        tagline: "High-fidelity training analytics for elite performance.",
        description: "A professional-grade analytics dashboard rendering complex biometric datasets into actionable insights for high-performance use cases.",
        image: "/projects/peak-performance.png",
        role: "Frontend Developer",
        year: "2025",
        stack: ["React", "Recharts", "TypeScript", "Tailwind"],
        liveUrl: "https://peak-performance.netlify.app", // Placeholder - Update after deploying
        challenge: {
            title: "Information Architecture",
            description: "Displaying high-density data (telemetry, biometrics, recovery algorithms) without overwhelming the user or sacrificing render performance on low-power devices."
        },
        solution: {
            title: "Modular Widget System",
            description: "Engineered a composable dashboard architecture where users can define their own layouts. prioritized high-contrast data visualization components for rapid cognitive processing."
        },
        features: [
            "Real-time Data Streaming",
            "Customizable Grid Layouts",
            "Historical Trend Analysis",
            "Exportable PDF/CSV Reports",
            "Dark Theme Optimization"
        ]
    },
    {
        id: "blue-horizon",
        title: "Blue Horizon",
        category: "Geospatial Data Aggregation",
        tagline: "Geospatial discovery platform with transparent pricing logic.",
        description: "A travel technology platform integrating geospatial mapping with transparent inventory management to streamline expedition bookings.",
        image: "/projects/blue-horizon.png",
        role: "Lead Developer",
        year: "2025",
        stack: ["React", "Vite", "Tailwind CSS", "Mapbox GL"],
        liveUrl: "https://blue-horizon.netlify.app", // Placeholder - Update after deploying
        challenge: {
            title: "Aggregating Disparate Data",
            description: "Synthesizing fragmented data sources (weather patterns, marine life databases, pricing APIs) into a unified, user-friendly interface."
        },
        solution: {
            title: "Integrated Geospatial View",
            description: "Implemented a Mapbox-based explorer overlaying real-time conditions on 3D terrain. Developed a predictive algorithm for marine sightings to aid in user decision-making."
        },
        features: [
            "Interactive 3D Mapping",
            "Predictive Analytics Engine",
            "Transparent Pricing Algorithm",
            "User Verification System",
            "Impact & Sustainability Metrics"
        ]
    },
    {
        id: "f1-academy-logic",
        title: "F1 Academy Logic",
        category: "Simulation / EdTech",
        tagline: "Interactive visual simulator for complex strategic modeling.",
        description: "An educational tool simulating complex race strategy algorithms, utilizing interactive graphs to demonstrate predictive modeling and resource degradation.",
        image: "/projects/f1-academy-logic.png",
        role: "UI/UX Designer & Dev",
        year: "2025",
        stack: ["React", "D3.js", "Framer Motion"],
        liveUrl: "https://f1-academy-logic.netlify.app", // Placeholder - Update after deploying
        challenge: {
            title: "Simplifying the Undercut",
            description: "F1 strategy is mathematically complex. Explaining concepts like 'the undercut' or 'tire degradation curves' to casual fans required a visual-first approach rather than text-heavy explanations."
        },
        solution: {
            title: "Gamified Strategy Simulator",
            description: "We built a simplified race simulator where users can make pit stop calls. Visual graphs show the predicted pace versus actuals, helping fans understand the 'why' behind team decisions."
        },
        features: [
            "Interactive Tire Degradation Graphs",
            "Pit Window Predictor",
            "Circuit Specific Strategy Guides",
            "Driver Telemetry Comparison",
            "Race Simulation Mode"
        ],
    },
    {
        id: "solarpunk-arch",
        title: "Solarpunk Architecture",
        category: "E-commerce / Design",
        tagline: "Exploring the future of sustainable, nature-integrated architecture.",
        description: "A portfolio concept showcasing Solarpunk design principles, featuring lush greenery, renewable energy integration, and a hopeful vision of the future.",
        image: "/projects/solarpunk.png",
        role: "Frontend Developer",
        year: "2025",
        stack: ["React", "Vite", "Tailwind CSS"],
        liveUrl: "https://solarpunk-arch.netlify.app", // Placeholder - Update after deploying
        challenge: {
            title: "Visualizing Utopia",
            description: "Solarpunk is a niche aesthetic. The challenge was to create a design that feels futuristic but organic, avoiding the cold, sterile look of traditional sci-fi."
        },
        solution: {
            title: "Organic Brutalism",
            description: "We combined brutalist layout structures with soft, organic overlapping elements and a vibrant color palette to represent the fusion of technology and nature."
        },
        features: [
            "Sustainable Design Showcase",
            "Interactive 'Green' Toggle",
            "Manifesto Section",
            "Community Resource Hub",
            "Responsive Gallery"
        ]
    }
];
