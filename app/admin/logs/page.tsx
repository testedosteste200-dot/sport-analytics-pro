import Link from 'next/link';
import { requireAdmin } from '@/lib/auth';
import { ArrowLeft, FileClock, ShieldCheck } from 'lucide-react';

export default async function AdminLogsPage() {
  await requireAdmin();
  return (
    <main className="mx-auto max-w-7xl space-y-8">
      <header><Link href="/admin" className="mb-5 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-200"><ArrowLeft className="h-3.5 w-3.5" /> Painel administrativo</Link><p className="eyebrow">Observabilidade</p><h1 className="page-title">Logs e auditoria</h1><p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">Acompanhe eventos importantes e sinais de segurança da plataforma.</p></header>
      <section className="glass-panel p-6 sm:p-8"><div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#69f0c5]/15 bg-[#69f0c5]/[.07] text-[#69f0c5]"><FileClock className="h-5 w-5" /></div><div><h2 className="font-bold text-white">Registro de eventos</h2><p className="mt-1 text-sm leading-6 text-slate-400">Os registros serão exibidos quando o serviço de auditoria estiver ativo.</p></div></div><div className="mt-6 rounded-2xl border border-dashed border-white/[.12] bg-black/10 px-5 py-10 text-center"><ShieldCheck className="mx-auto h-7 w-7 text-slate-600" /><p className="mt-3 font-semibold text-slate-200">Nenhum evento registrado</p><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">Ainda não há logs disponíveis. O painel não cria eventos fictícios.</p></div></section>
    </main>
  );
}