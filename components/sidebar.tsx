import Link from 'next/link';
import { Activity, BarChart3, Bell, Crown, Gauge, Heart, Shield, Trophy } from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Gauge },
  { href: '/matches', label: 'Partidas', icon: Trophy },
  { href: '/live', label: 'Ao Vivo', icon: Activity },
  { href: '/competitions', label: 'Competições', icon: BarChart3 },
  { href: '/favorites', label: 'Favoritos', icon: Heart },
  { href: '/notifications', label: 'Notificações', icon: Bell },
  { href: '/admin', label: 'Admin Panel', icon: Crown },
];

export function Sidebar() {
  return (
    <aside className="hidden h-screen w-72 border-r border-slate-800 bg-slate-950/80 p-6 md:block">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-sport-accent text-slate-950">
          <BarChart3 className="h-5 w-5" />
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-200">Sport</div>
          <div className="text-xl font-black text-white">Analytics Pro</div>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-slate-300 transition hover:border-slate-700 hover:bg-slate-900 hover:text-white"
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-brand-300"><Shield className="h-4 w-4" /> Segurança</div>
        <p className="text-sm text-slate-400">Credenciais e dados sensíveis ficam no backend.</p>
      </div>
    </aside>
  );
}

export function MobileNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex justify-around border-t border-slate-800 bg-slate-950/90 px-4 py-3 md:hidden">
      {[
        { href: '/dashboard', label: 'Início' },
        { href: '/matches', label: 'Jogos' },
        { href: '/live', label: 'Ao Vivo' },
        { href: '/favorites', label: 'Favoritos' },
        { href: '/settings', label: 'Perfil' },
      ].map(({ href, label }) => (
        <Link key={href} href={href} className="text-center text-xs text-slate-300 hover:text-white">
          {label}
        </Link>
      ))}
    </nav>
  );
}
