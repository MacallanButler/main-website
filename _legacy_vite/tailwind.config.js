/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0f0f11', // Deep charcoal
                surface: '#18181b', // Slightly lighter for subtle contrast if needed
                text: {
                    primary: '#e0e0e0', // Soft off-white
                    secondary: '#a1a1aa', // Muted text
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            backgroundImage: {
                'accent-gradient': 'linear-gradient(to right, #fbbf24, #f43f5e)', // amber-400 to rose-500
            },
        },
    },
    plugins: [],
}
