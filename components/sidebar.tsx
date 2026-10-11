'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Activity, BarChart3, Bell, CalendarDays, Crown, Gauge, Heart, Home, Shield, Trophy } from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Visão geral', icon: Gauge },
  { href: '/matches', label: 'Jogos e resultados', icon: Trophy },
  { href: '/live', label: 'Ao vivo', icon: Activity },
  { href: '/competitions', label: 'Competições', icon: BarChart3 },
  { href: '/favorites', label: 'Meus favoritos', icon: Heart },
  { href: '/notifications', label: 'Notificações', icon: Bell },
  { href: '/admin', label: 'Administração', icon: Crown },
];

function NavLink({ href, label, icon: Icon }: { href: string; label: string; icon: typeof Gauge }) {
  const pathname = usePathname();
  const active = pathname === href || (href !== '/dashboard' && pathname.startsWith(href + '/'));
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={`group flex items-center gap-3 rounded-lg border px-3 py-3 text-sm font-semibold transition ${active ? 'border-lime-400/30 bg-lime-400/10 text-lime-300' : 'border-transparent text-slate-400 hover:bg-slate-800/80 hover:text-white'}`}
    >
      <Icon className="h-[18px] w-[18px] shrink-0" />
      <span>{label}</span>
      {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-lime-400" />}
    </Link>
  );
}

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-[250px] shrink-0 flex-col border-r border-slate-800 bg-[#101821] px-4 py-5 md:flex">
      <Link href="/" className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-slate-950">
          <Activity className="h-6 w-6" strokeWidth={2.8} />
        </div>
        <div className="min-w-0">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-lime-300">SPORTS CENTER</div>
          <div className="text-[16px] font-black tracking-tight text-white">ANALYTICS PRO</div>
        </div>
      </Link>

      <div className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Menu principal</div>
      <nav className="space-y-1">
        {navItems.map((item) => <NavLink key={item.href} {...item} />)}
      </nav>

      <div className="mt-auto rounded-xl border border-slate-800 bg-[#151f29] p-4">
        <div className="mb-2 flex items-center gap-2 text-sm font-bold text-white">
          <Shield className="h-4 w-4 text-lime-300" /> Dados protegidos
        </div>
        <p className="text-xs leading-5 text-slate-400">Chaves de API e credenciais permanecem no servidor.</p>
      </div>
    </aside>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  const items = [
    { href: '/dashboard', label: 'Início', icon: Home },
    { href: '/matches', label: 'Jogos', icon: CalendarDays },
    { href: '/live', label: 'Ao vivo', icon: Activity },
    { href: '/favorites', label: 'Favoritos', icon: Heart },
    { href: '/notifications', label: 'Alertas', icon: Bell },
  ];

  return (
    <nav aria-label="Navegação principal" className="fixed inset-x-0 bottom-0 z-50 flex justify-around border-t border-slate-700 bg-[#101821]/95 px-2 pb-[max(0.65rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl md:hidden">
      {items.map(({ href, label, icon: Icon }) => {
        const active = pathname === href || pathname.startsWith(href + '/');
        return (
          <Link key={href} href={href} aria-current={active ? 'page' : undefined} className={`flex min-w-0 flex-col items-center gap-1 px-2 py-1 text-[10px] font-semibold ${active ? 'text-lime-300' : 'text-slate-400'}`}>
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
