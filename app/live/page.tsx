import Link from 'next/link';
import { Activity, Radio, Settings2 } from 'lucide-react';

export default function LivePage() {
  return (
    <main className="mx-auto max-w-[1440px] space-y-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="section-label">Atualizações de partidas</p><h1 className="mt-2 flex items-center gap-3 text-3xl font-black text-white"><span className="relative flex h-3 w-3"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-60" /><span className="relative inline-flex h-3 w-3 rounded-full bg-lime-400" /></span>Central ao vivo</h1><p className="mt-2 text-sm text-slate-400">Placar e acompanhamento das partidas em andamento.</p></div>
        <Link href="/admin/api" className="secondary-button"><Settings2 className="h-4 w-4" /> Configurar API</Link>
      </header>
      <section className="glass-panel overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
          <div className="flex items-center gap-2"><Radio className="h-5 w-5 text-lime-300" /><h2 className="font-extrabold text-white">Em andamento</h2></div>
          <span className="rounded-full border border-lime-400/20 bg-lime-400/10 px-2.5 py-1 text-[11px] font-bold text-lime-300">LIVE</span>
        </div>
        <div className="p-4 sm:p-6"><div className="score-empty"><Activity className="mx-auto mb-3 h-8 w-8 text-lime-300" /><h3 className="font-bold text-white">Aguardando dados ao vivo</h3><p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-400">Configure um provedor esportivo para carregar partidas reais. Nenhum placar de demonstração é apresentado como se fosse ao vivo.</p><Link href="/admin/api" className="primary-button mt-5">Configurar provedor</Link></div></div>
      </section>
    </main>
  );
}
