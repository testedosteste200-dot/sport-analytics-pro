import Link from 'next/link';
import { ArrowRight, CalendarDays, Trophy } from 'lucide-react';

export default function MatchesPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">Agenda esportiva</p><h1 className="page-title">Partidas</h1><p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">Consulte calendário, resultados e informações das partidas.</p></div><span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[.08] bg-white/[.03] px-3 py-2 text-xs text-slate-400"><CalendarDays className="h-4 w-4 text-[#69f0c5]" /> Calendário</span></header>
      <section className="glass-panel p-6 sm:p-8"><div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-300/15 bg-sky-300/[.07] text-sky-300"><Trophy className="h-5 w-5" /></div><div><h2 className="font-bold text-white">Calendário e resultados</h2><p className="mt-1 text-sm leading-6 text-slate-400">A programação e os resultados serão apresentados quando houver uma fonte de dados conectada.</p></div></div>
      <div className="mt-6 rounded-2xl border border-dashed border-white/[.12] bg-black/10 px-5 py-10 text-center"><p className="font-semibold text-slate-200">Nenhuma partida disponível</p><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">Os dados não estão disponíveis. Configure uma API esportiva para carregar partidas reais.</p><Link href="/admin/api" className="secondary-button mt-5">Configurar API <ArrowRight className="h-4 w-4" /></Link></div></section>
    </main>
  );
}