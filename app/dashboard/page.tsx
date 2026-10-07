import { requireUser } from '@/lib/auth';
import { DataState } from '@/components/data-state';
import { sportsProvider } from '@/services/sports/provider';

export default async function DashboardPage() {
  await requireUser();

  const liveMatches = await sportsProvider.getLiveMatches();
  const standings = await sportsProvider.getStandings();

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-brand-300">Visão Geral</p>
          <h1 className="mt-2 text-3xl font-black text-white">Dashboard</h1>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <div className="glass-panel p-4"><div className="text-sm text-slate-400">Jogos ao vivo</div><div className="mt-3 text-3xl font-black text-white">{liveMatches.data?.length ?? 0}</div></div>
        <div className="glass-panel p-4"><div className="text-sm text-slate-400">Jogos de hoje</div><div className="mt-3 text-3xl font-black text-white">0</div></div>
        <div className="glass-panel p-4"><div className="text-sm text-slate-400">Próximos jogos</div><div className="mt-3 text-3xl font-black text-white">0</div></div>
        <div className="glass-panel p-4"><div className="text-sm text-slate-400">Análises disponíveis</div><div className="mt-3 text-3xl font-black text-white">0</div></div>
        <div className="glass-panel p-4"><div className="text-sm text-slate-400">Alertas recentes</div><div className="mt-3 text-3xl font-black text-white">0</div></div>
      </section>

      <section className="glass-panel p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Partidas em destaque</h2>
          <span className="text-xs uppercase tracking-[0.2em] text-brand-300">Dados reais</span>
        </div>
        <DataState
          status={liveMatches.ok ? 'success' : 'error'}
          title={liveMatches.message || 'Dados não disponíveis.'}
          description={liveMatches.error || 'Configure uma API esportiva no painel administrativo para começar a receber dados reais.'}
        >
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-slate-300">
            {liveMatches.data && liveMatches.data.length > 0 ? (
              <p>Partidas ao vivo disponíveis quando o provider estiver configurado.</p>
            ) : (
              <p>Dados não disponíveis.</p>
            )}
          </div>
        </DataState>
      </section>

      <section className="glass-panel p-6">
        <h2 className="text-xl font-bold text-white">Classificação</h2>
        <DataState
          status={standings.ok ? 'success' : 'error'}
          title={standings.message || 'Dados não disponíveis.'}
          description={standings.error || 'Configure uma API esportiva no painel administrativo para começar a receber dados reais.'}
        >
          <div className="mt-4 text-sm text-slate-400">Tabela e posições serão exibidas quando a API estiver conectada.</div>
        </DataState>
      </section>
    </div>
  );
}
