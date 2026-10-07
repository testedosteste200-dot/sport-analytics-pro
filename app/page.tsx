import Link from 'next/link';
import { ArrowRight, BarChart3, ChartColumn, ShieldCheck, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl pb-10 pt-10">
      <section className="rounded-[28px] border border-slate-800 bg-hero px-6 pb-16 pt-12 shadow-soft md:px-10">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
            <Sparkles className="h-3.5 w-3.5" /> Sports Intelligence
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl">SPORT ANALYTICS PRO</h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Plataforma profissional de análise esportiva com dados reais, dashboards operacionais, competições, estatísticas e gestão de APIs multi-provider.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/register" className="primary-button">Criar conta</Link>
            <Link href="/login" className="secondary-button">Entrar</Link>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="glass-panel p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
            <ChartColumn className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-bold text-white">Visão geral</h2>
          <p className="mt-2 text-sm text-slate-400">Dashboard completo para partidas, live center, padrões e comparação de desempenho.</p>
        </div>
        <div className="glass-panel p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
            <BarChart3 className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-bold text-white">Estatísticas</h2>
          <p className="mt-2 text-sm text-slate-400">Comparações visuais para posse, ataques, escanteios, cartas, chutes e muito mais.</p>
        </div>
        <div className="glass-panel p-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-300">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-bold text-white">Segurança</h2>
          <p className="mt-2 text-sm text-slate-400">Autenticação, autorização RBAC, validação, rate limit e chaves de API somente no servidor.</p>
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Estado do sistema</p>
            <h2 className="mt-2 text-2xl font-bold text-white">Configuração de dados esportivos</h2>
          </div>
          <Link href="/admin/api" className="secondary-button">Configurar API</Link>
        </div>
        <div className="mt-6 rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 p-8 text-slate-300">
          <p>Configure uma API esportiva no painel administrativo para começar a receber dados reais.</p>
          <p className="mt-2 text-sm text-slate-400">Dados não disponíveis.</p>
        </div>
      </section>
    </main>
  );
}
