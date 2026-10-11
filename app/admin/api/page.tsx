import Link from 'next/link';
import { requireAdmin } from '@/lib/auth';
import { ArrowLeft, CheckCircle2, KeyRound, Link2, ShieldCheck } from 'lucide-react';

export default async function AdminApiPage() {
  await requireAdmin();
  return (
    <main className="mx-auto max-w-7xl space-y-8">
      <header><Link href="/admin" className="mb-5 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-200"><ArrowLeft className="h-3.5 w-3.5" /> Painel administrativo</Link><p className="eyebrow">Conectividade</p><h1 className="page-title">Provedores de dados</h1><p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">Gerencie as fontes que alimentam partidas, classificações e estatísticas.</p></header>
      <section className="glass-panel overflow-hidden"><div className="flex items-start gap-4 border-b border-white/[.07] p-6 sm:p-8"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-sky-300/15 bg-sky-300/[.07] text-sky-300"><Link2 className="h-5 w-5" /></div><div><h2 className="font-bold text-white">Integração esportiva</h2><p className="mt-1 text-sm leading-6 text-slate-400">Conecte um provedor compatível para começar a receber dados reais.</p></div><span className="ml-auto rounded-full border border-amber-300/20 bg-amber-300/[.06] px-2.5 py-1 text-[10px] font-bold text-amber-200">Pendente</span></div>
        <div className="p-6 sm:p-8"><div className="grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border border-white/[.07] bg-white/[.025] p-5"><KeyRound className="h-5 w-5 text-[#69f0c5]" /><h3 className="mt-3 font-semibold text-white">Credenciais no servidor</h3><p className="mt-2 text-sm leading-6 text-slate-400">Armazene tokens e chaves em variáveis de ambiente seguras.</p></div><div className="rounded-2xl border border-white/[.07] bg-white/[.025] p-5"><CheckCircle2 className="h-5 w-5 text-[#69f0c5]" /><h3 className="mt-3 font-semibold text-white">Dados verificáveis</h3><p className="mt-2 text-sm leading-6 text-slate-400">A interface só apresenta informações retornadas por uma fonte configurada.</p></div></div><div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-300/15 bg-amber-300/[.04] p-5"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-200" /><div><p className="font-semibold text-amber-100">Serviço ainda não configurado</p><p className="mt-1 text-sm leading-6 text-slate-400">A configuração da integração precisa ser concluída no ambiente de servidor. A chave de API nunca deve ser exposta no frontend.</p></div></div></div>
      </section>
    </main>
  );
}