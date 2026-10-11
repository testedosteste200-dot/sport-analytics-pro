import Link from 'next/link';
import { requireAdmin } from '@/lib/auth';
import { ArrowLeft, BrainCircuit, ShieldCheck, Sparkles } from 'lucide-react';

export default async function AdminAiPage() {
  await requireAdmin();
  return (
    <main className="mx-auto max-w-7xl space-y-8">
      <header><Link href="/admin" className="mb-5 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-200"><ArrowLeft className="h-3.5 w-3.5" /> Painel administrativo</Link><p className="eyebrow">Inteligência assistida</p><h1 className="page-title">Configuração de IA</h1><p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">Área de configuração para serviços inteligentes da plataforma.</p></header>
      <section className="glass-panel overflow-hidden"><div className="flex items-start gap-4 border-b border-white/[.07] bg-gradient-to-r from-violet-300/[.06] to-transparent p-6 sm:p-8"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-300/15 bg-violet-300/[.07] text-violet-300"><BrainCircuit className="h-5 w-5" /></div><div><h2 className="font-bold text-white">Serviço de IA</h2><p className="mt-1 text-sm leading-6 text-slate-400">A integração ainda não foi configurada neste ambiente.</p></div></div><div className="p-6 sm:p-8"><div className="rounded-2xl border border-amber-300/15 bg-amber-300/[.04] p-5"><div className="flex items-start gap-3"><Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-amber-200" /><div><p className="font-semibold text-amber-100">Configuração necessária</p><p className="mt-1 text-sm leading-6 text-slate-400">Configure as variáveis do serviço no ambiente de servidor antes de habilitar recursos de IA.</p></div></div></div><div className="mt-4 flex items-center gap-2 text-xs leading-5 text-slate-500"><ShieldCheck className="h-4 w-4 shrink-0 text-[#69f0c5]" /> Chaves secretas não devem ser enviadas ao cliente ou versionadas no repositório.</div></div></section>
    </main>
  );
}