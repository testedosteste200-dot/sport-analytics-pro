import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Sidebar } from '@/components/sidebar';
import { MobileNav } from '@/components/sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SPORT ANALYTICS PRO',
  description: 'Professional sports analytics platform with real data and API management.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-950 text-slate-100`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen bg-slate-950">
            <div className="flex">
              <Sidebar />
              <main className="min-h-screen flex-1 px-4 pb-24 pt-6 md:px-8 md:pb-10">
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
