import Link from 'next/link';
import { Activity, ArrowRight, BarChart3, CalendarDays, CircleDot, Trophy } from 'lucide-react';
import { requireUser } from '@/lib/auth';
import { DataState } from '@/components/data-state';
import { sportsProvider } from '@/services/sports/provider';

export default async function DashboardPage() {
  await requireUser();

  const [liveMatches, standings] = await Promise.all([
    sportsProvider.getLiveMatches(),
    sportsProvider.getStandings(),
  ]);

  const stats = [
    { label: 'Jogos ao vivo', value: liveMatches.data?.length ?? 0, icon: Activity },
    { label: 'Competições', value: standings.data?.length ?? 0, icon: Trophy },
    { label: 'Dados esportivos', value: liveMatches.ok ? 'Conectado' : 'Pendente', icon: CircleDot },
  ];

  return (
    <div className="mx-auto max-w-[1440px] space-y-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-label">Central esportiva</p>
          <h1 className="mt-2 text-3xl font-black text-white">Visão geral</h1>
          <p className="mt-2 text-sm text-slate-400">Acompanhe o estado dos dados e acesse as principais áreas.</p>
        </div>
        <Link href="/matches" className="secondary-button">Ver partidas <ArrowRight className="h-4 w-4" /></Link>
      </header>

      <section className="grid gap-3 sm:grid-cols-3">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="glass-panel flex items-center gap-4 p-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-400/10 text-lime-300"><Icon className="h-5 w-5" /></div>
            <div><p className="text-sm text-slate-400">{label}</p><p className="mt-1 text-xl font-black text-white">{value}</p></div>
          </div>
        ))}
      </section>

      <section className="glass-panel overflow-hidden">
        <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
          <div className="flex items-center gap-2"><Activity className="h-5 w-5 text-lime-300" /><h2 className="font-extrabold text-white">Partidas ao vivo</h2></div>
          <span className="rounded-full bg-slate-800 px-2.5 py-1 text-[11px] font-bold text-slate-300">LIVE CENTER</span>
        </div>
        <div className="p-4 sm:p-5">
          {liveMatches.ok && liveMatches.data?.length ? (
            <DataState status="success" title="Partidas carregadas"><p className="text-sm text-slate-400">O provedor retornou {liveMatches.data.length} partida(s). A integração de placares detalhados pode ser exibida aqui conforme o formato do provedor.</p></DataState>
          ) : (
            <DataState status="empty" title={liveMatches.message || 'Nenhuma partida disponível'} description={liveMatches.error || 'Configure um provedor de dados esportivos no painel administrativo.'} action={<Link href="/admin/api" className="secondary-button mt-4">Configurar API</Link>} />
          )}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="glass-panel p-5">
          <div className="mb-3 flex items-center gap-2"><BarChart3 className="h-5 w-5 text-lime-300" /><h2 className="font-extrabold text-white">Classificações</h2></div>
          {standings.ok && standings.data?.length ? <p className="text-sm text-slate-400">Dados de classificação recebidos do provedor.</p> : <p className="text-sm leading-6 text-slate-400">{standings.error || 'As classificações serão exibidas quando houver dados disponíveis.'}</p>}
          <Link href="/competitions" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-lime-300">Ver competições <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="glass-panel p-5">
          <div className="mb-3 flex items-center gap-2"><CalendarDays className="h-5 w-5 text-lime-300" /><h2 className="font-extrabold text-white">Calendário de jogos</h2></div>
          <p className="text-sm leading-6 text-slate-400">Consulte a área de partidas para verificar resultados e próximos eventos disponibilizados pela integração.</p>
          <Link href="/matches" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-lime-300">Abrir calendário <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  );
}
