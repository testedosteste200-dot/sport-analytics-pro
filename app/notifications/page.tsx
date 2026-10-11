import Link from 'next/link';
import { ArrowRight, BellRing, Settings2 } from 'lucide-react';

export default function NotificationsPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-8">
      <header><p className="eyebrow">Fique por dentro</p><h1 className="page-title">Notificações</h1><p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">Alertas e eventos importantes reunidos em um só lugar.</p></header>
      <section className="glass-panel p-6 sm:p-8"><div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-300/15 bg-violet-300/[.07] text-violet-300"><BellRing className="h-5 w-5" /></div><div><h2 className="font-bold text-white">Central de alertas</h2><p className="mt-1 text-sm leading-6 text-slate-400">As notificações aparecerão aqui quando os serviços de dados estiverem ativos.</p></div></div>
      <div className="mt-6 rounded-2xl border border-dashed border-white/[.12] bg-black/10 px-5 py-10 text-center"><BellRing className="mx-auto h-7 w-7 text-slate-600" /><p className="mt-3 font-semibold text-slate-200">Você está em dia</p><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">Não há alertas disponíveis neste momento. Conecte seu provedor para ativar o fluxo de dados.</p><Link href="/admin/api" className="secondary-button mt-5"><Settings2 className="h-4 w-4" /> Gerenciar integrações <ArrowRight className="h-4 w-4" /></Link></div></section>
    </main>
  );
}