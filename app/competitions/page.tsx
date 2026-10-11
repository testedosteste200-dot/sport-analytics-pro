import Link from 'next/link';
import { ArrowRight, Globe2, Trophy } from 'lucide-react';

export default function CompetitionsPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="eyebrow">Explore o cenário</p><h1 className="page-title">Competições</h1><p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">Acompanhe ligas, torneios e tabelas de classificação em um só lugar.</p></div>
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[.08] bg-white/[.03] px-3 py-2 text-xs text-slate-400"><Globe2 className="h-4 w-4 text-[#69f0c5]" /> Dados globais</span>
      </header>
      <section className="glass-panel overflow-hidden">
        <div className="flex items-start gap-4 border-b border-white/[.07] p-6 sm:p-8"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#69f0c5]/15 bg-[#69f0c5]/[.07] text-[#69f0c5]"><Trophy className="h-5 w-5" /></div><div><h2 className="font-bold text-white">Classificações e torneios</h2><p className="mt-1 text-sm leading-6 text-slate-400">Quando a integração estiver ativa, as competições e posições serão exibidas aqui.</p></div></div>
        <div className="p-6 sm:p-8"><div className="rounded-2xl border border-dashed border-white/[.12] bg-black/10 px-5 py-10 text-center"><p className="font-semibold text-slate-200">Nenhuma competição disponível ainda</p><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">Conecte um provedor esportivo para carregar dados reais. Não exibimos estatísticas fictícias.</p><Link href="/admin/api" className="primary-button mt-5">Configurar provedor <ArrowRight className="h-4 w-4" /></Link></div></div>
      </section>
    </main>
  );
}