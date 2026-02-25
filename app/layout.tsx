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
        <div className="h-screen flex flex-col p-4 sm:p-6 lg:p-8 overflow-hidden selection:bg-rose-500/30">
          <main className="max-w-6xl mx-auto w-full flex flex-col flex-grow min-h-0">
            {children}
          </main>

          {/* Mobile-only footer */}
          <footer className="md:hidden w-full text-center text-text-secondary/30 text-xs font-mono py-3">
            &copy; {new Date().getFullYear()} Macallan Butler
          </footer>
        </div>
      </body>
    </html>
  );
}
