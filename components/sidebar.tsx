'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Activity, BarChart3, Bell, Crown, Gauge, Heart, Shield, Trophy } from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Gauge },
  { href: '/matches', label: 'Partidas', icon: Trophy },
  { href: '/live', label: 'Ao Vivo', icon: Activity },
  { href: '/competitions', label: 'Competições', icon: BarChart3 },
  { href: '/favorites', label: 'Favoritos', icon: Heart },
  { href: '/notifications', label: 'Notificações', icon: Bell },
  { href: '/admin', label: 'Administração', icon: Crown },
];

function Brand() {
  return (
    <Link href="/" className="group mb-10 flex items-center gap-3 rounded-2xl focus-visible:outline-offset-4" aria-label="Sport Analytics Pro — página inicial">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#78f4d0] to-[#5cc7ff] text-slate-950 shadow-[0_8px_28px_rgba(105,240,197,.16)] transition group-hover:scale-[1.03]">
        <BarChart3 className="h-5 w-5" strokeWidth={2.5} />
      </div>
      <div>
        <div className="text-[10px] font-bold uppercase tracking-[.24em] text-[#7ee8ca]">Sport intelligence</div>
        <div className="mt-0.5 text-[17px] font-extrabold tracking-tight text-white">Analytics <span className="text-slate-400">Pro</span></div>
      </div>
    </Link>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="sticky top-0 hidden h-screen w-[264px] shrink-0 border-r border-white/[.07] bg-[#080d18]/85 px-5 py-7 backdrop-blur-2xl md:flex md:flex-col">
      <Brand />
      <div className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[.2em] text-slate-500">Workspace</div>
      <nav aria-label="Navegação principal" className="space-y-1.5">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || (href !== '/' && pathname.startsWith(href + '/'));
          return (
            <Link key={href} href={href} aria-current={active ? 'page' : undefined}
              className={`group relative flex items-center gap-3 rounded-xl border px-3 py-3 text-[13px] font-semibold transition duration-200 ${active ? 'border-[#69f0c5]/20 bg-[#69f0c5]/[.09] text-[#9af5d9] shadow-[inset_3px_0_0_#69f0c5]' : 'border-transparent text-slate-400 hover:border-white/[.06] hover:bg-white/[.035] hover:text-slate-100'}`}>
              <Icon className={`h-[17px] w-[17px] ${active ? 'text-[#69f0c5]' : 'text-slate-500 group-hover:text-slate-300'}`} />
              <span>{label}</span>
              {href === '/live' && <span className="ml-auto flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-rose-400" /> Live</span>}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto rounded-2xl border border-white/[.08] bg-gradient-to-br from-slate-900/90 to-slate-900/35 p-4">
        <div className="mb-3 flex items-center gap-2 text-xs font-bold text-slate-200"><Shield className="h-4 w-4 text-[#69f0c5]" /> Segurança em primeiro lugar</div>
        <p className="text-xs leading-5 text-slate-500">Credenciais e chaves de integração protegidas no servidor.</p>
        <div className="mt-4 flex items-center gap-2 border-t border-white/[.07] pt-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Plataforma protegida</div>
      </div>
    </aside>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  const items = [
    { href: '/dashboard', label: 'Início', icon: Gauge },
    { href: '/matches', label: 'Jogos', icon: Trophy },
    { href: '/live', label: 'Ao vivo', icon: Activity },
    { href: '/competitions', label: 'Ligas', icon: BarChart3 },
    { href: '/favorites', label: 'Favoritos', icon: Heart },
  ];
  return (
    <nav aria-label="Navegação móvel" className="fixed inset-x-0 bottom-0 z-50 border-t border-white/[.08] bg-[#080d18]/95 px-2 pb-[max(env(safe-area-inset-bottom),.5rem)] pt-2 backdrop-blur-2xl md:hidden">
      <div className="mx-auto flex max-w-lg justify-around">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || pathname.startsWith(href + '/');
          return <Link key={href} href={href} aria-current={active ? 'page' : undefined} className={`flex min-w-0 flex-1 flex-col items-center gap-1 rounded-xl px-1 py-2 text-[10px] font-semibold transition ${active ? 'text-[#69f0c5]' : 'text-slate-500 hover:text-slate-200'}`}><Icon className="h-[18px] w-[18px]" /><span>{label}</span></Link>;
        })}
      </div>
    </nav>
  );
}