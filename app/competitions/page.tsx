import Link from 'next/link';
import { ArrowRight, Flag, Settings2, Trophy } from 'lucide-react';

export default function CompetitionsPage() {
  return (
    <main className="mx-auto max-w-[1440px] space-y-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="section-label">Ligas e torneios</p><h1 className="mt-2 text-3xl font-black text-white">Competições</h1><p className="mt-2 text-sm text-slate-400">Acesse competições e classificações do seu provedor esportivo.</p></div>
        <Link href="/admin/api" className="secondary-button"><Settings2 className="h-4 w-4" /> Configurar dados</Link>
      </header>
      <section className="glass-panel overflow-hidden">
        <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-4"><Trophy className="h-5 w-5 text-lime-300" /><h2 className="font-extrabold text-white">Competições disponíveis</h2></div>
        <div className="p-4 sm:p-6"><div className="score-empty"><Flag className="mx-auto mb-3 h-8 w-8 text-lime-300" /><h3 className="font-bold text-white">Nenhuma competição carregada</h3><p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-400">Quando o provedor estiver conectado, as ligas e suas classificações poderão ser listadas aqui.</p><Link href="/admin/api" className="secondary-button mt-5">Abrir configuração <ArrowRight className="h-4 w-4" /></Link></div></div>
      </section>
    </main>
  );
}
