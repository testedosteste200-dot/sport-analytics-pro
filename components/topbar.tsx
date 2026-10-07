import Link from 'next/link';
import { Activity, BarChart3, ShieldCheck, Sparkles, Trophy } from 'lucide-react';

export function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-sport-accent text-slate-950 shadow-soft">
        <BarChart3 className="h-5 w-5" />
      </div>
      <div>
        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">SPORT</div>
        <div className="text-lg font-black tracking-tight text-white">ANALYTICS PRO</div>
      </div>
    </div>
  );
}

export function StatsCard({
  title,
  value,
  detail,
  icon,
}: {
  title: string;
  value: string;
  detail: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-soft">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-400">{title}</span>
        <div className="rounded-lg bg-brand-500/10 p-2 text-brand-300">{icon}</div>
      </div>
      <div className="mt-4 text-3xl font-black text-white">{value}</div>
      <div className="mt-2 text-sm text-slate-400">{detail}</div>
    </div>
  );
}

export function TopMenu() {
  return (
    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-6 py-4 backdrop-blur-xl">
      <div className="hidden md:block">
        <BrandMark />
      </div>
      <div className="flex items-center gap-3 text-sm text-slate-300">
        <Link href="/dashboard" className="rounded-full border border-slate-700 px-3 py-1.5 hover:border-brand-400 hover:text-white">Dashboard</Link>
        <Link href="/matches" className="rounded-full border border-slate-700 px-3 py-1.5 hover:border-brand-400 hover:text-white">Partidas</Link>
        <Link href="/live" className="rounded-full border border-slate-700 px-3 py-1.5 hover:border-brand-400 hover:text-white">Ao Vivo</Link>
        <Link href="/favorites" className="rounded-full border border-slate-700 px-3 py-1.5 hover:border-brand-400 hover:text-white">Favoritos</Link>
      </div>
    </div>
  );
}

export function InfoStrip() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
        <div className="flex items-center gap-2 text-brand-300"><Activity className="h-4 w-4" /> Live</div>
        <div className="mt-2 text-xl font-bold text-white">0</div>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
        <div className="flex items-center gap-2 text-brand-300"><Trophy className="h-4 w-4" /> Competições</div>
        <div className="mt-2 text-xl font-bold text-white">0</div>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
        <div className="flex items-center gap-2 text-brand-300"><Sparkles className="h-4 w-4" /> Análises</div>
        <div className="mt-2 text-xl font-bold text-white">0</div>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
        <div className="flex items-center gap-2 text-brand-300"><ShieldCheck className="h-4 w-4" /> Status</div>
        <div className="mt-2 text-xl font-bold text-white">Standby</div>
      </div>
    </div>
  );
}
