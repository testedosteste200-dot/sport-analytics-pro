import Link from 'next/link';
import { Activity, ArrowRight, Radio, Zap } from 'lucide-react';

export default function LivePage() {
  return (
    <main className="mx-auto max-w-7xl space-y-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">Acompanhe em tempo real</p><h1 className="page-title">Live Center</h1><p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">O ponto central para partidas em andamento, placares e contexto do jogo.</p></div><span className="inline-flex w-fit items-center gap-2 rounded-full border border-rose-300/20 bg-rose-300/[.06] px-3 py-2 text-xs font-semibold text-rose-200"><span className="h-2 w-2 animate-pulse rounded-full bg-rose-400" /> Central ao vivo</span></header>
      <section className="glass-panel overflow-hidden"><div className="border-b border-white/[.07] bg-gradient-to-r from-rose-400/[.06] to-transparent p-6 sm:p-8"><div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-rose-300/15 bg-rose-300/[.07] text-rose-300"><Radio className="h-5 w-5" /></div><div><h2 className="font-bold text-white">Partidas em andamento</h2><p className="mt-1 text-sm leading-6 text-slate-400">Os eventos serão atualizados a partir do provedor esportivo configurado.</p></div></div></div>
        <div className="p-6 sm:p-8"><div className="rounded-2xl border border-dashed border-white/[.12] bg-black/10 px-5 py-10 text-center"><Activity className="mx-auto h-7 w-7 text-slate-600" /><p className="mt-3 font-semibold text-slate-200">Sem transmissões de dados no momento</p><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">Conecte uma API compatível para receber partidas reais e informações atualizadas.</p><Link href="/admin/api" className="primary-button mt-5"><Zap className="h-4 w-4" /> Conectar dados <ArrowRight className="h-4 w-4" /></Link></div></div>
      </section>
    </main>
  );
}