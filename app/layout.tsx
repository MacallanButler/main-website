import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' });

export const metadata: Metadata = {
  title: 'Macallan Butler - Portfolio',
  description: 'Building scalable, user-centric applications with precision and care.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <div className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 selection:bg-rose-500/30 py-6 md:py-8">
          <main className="max-w-4xl mx-auto w-full space-y-8 md:space-y-10 flex-grow">
            {children}
          </main>

          <footer className="w-full text-center text-text-secondary/40 text-sm py-4 mt-auto">
            &copy; {new Date().getFullYear()} Macallan Butler
          </footer>
        </div>
      </body>
    </html>
  );
}
