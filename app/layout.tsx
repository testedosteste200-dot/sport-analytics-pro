import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Sidebar, MobileNav } from '@/components/sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SPORT ANALYTICS PRO',
  description: 'Plataforma profissional de inteligência e análise esportiva.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen text-slate-100 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="min-h-screen">
            <div className="mx-auto flex min-h-screen w-full max-w-[1800px]">
              <Sidebar />
              <main className="min-w-0 flex-1 px-4 pb-28 pt-6 sm:px-6 md:px-8 md:pb-12 md:pt-9 xl:px-10">
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