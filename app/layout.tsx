import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Sidebar } from '@/components/sidebar';
import { MobileNav } from '@/components/sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GreenScore Live | Inteligência Esportiva',
  description: 'Plataforma de análise de futebol com estatísticas, tendências e inteligência esportiva.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-950 text-slate-100`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen bg-slate-950">
            <div className="flex">
              <Sidebar />
              <main className="min-h-screen flex-1 px-3 pb-24 pt-4 sm:px-5 md:px-8 md:pb-10 md:pt-6">
                {children}
              </main>
            </div>
            <MobileNav />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
