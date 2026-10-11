import Link from 'next/link';
import { CalendarDays, CircleDot, Settings2 } from 'lucide-react';

export default function MatchesPage() {
  return (
    <main className="mx-auto max-w-[1440px] space-y-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="section-label">Calendário esportivo</p><h1 className="mt-2 text-3xl font-black text-white">Jogos e resultados</h1><p className="mt-2 text-sm text-slate-400">Uma visão rápida das partidas e dos resultados disponíveis.</p></div>
        <Link href="/admin/api" className="secondary-button"><Settings2 className="h-4 w-4" /> Configurar dados</Link>
      </header>
      <section className="glass-panel overflow-hidden">
        <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-4"><CalendarDays className="h-5 w-5 text-lime-300" /><h2 className="font-extrabold text-white">Todos os jogos</h2></div>
        <div className="p-4 sm:p-6">
          <div className="score-empty">
            <CircleDot className="mx-auto mb-3 h-8 w-8 text-lime-300" />
            <h3 className="font-bold text-white">Os jogos aparecerão aqui</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-400">Não há partidas para mostrar enquanto um provedor esportivo não estiver configurado. Assim que houver dados reais, esta área poderá exibir placares e horários.</p>
            <Link href="/admin/api" className="primary-button mt-5">Conectar provedor</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
