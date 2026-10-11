import Link from 'next/link';
import { requireUser } from '@/lib/auth';
import { DataState } from '@/components/data-state';
import { sportsProvider } from '@/services/sports/provider';
import { Activity, ArrowRight, CalendarDays, ChartNoAxesCombined, Clock3, Trophy } from 'lucide-react';

export default async function DashboardPage() {
  await requireUser();
  const liveMatches = await sportsProvider.getLiveMatches();
  const standings = await sportsProvider.getStandings();
  const stats = [
    { label: 'Partidas ao vivo', value: liveMatches.data?.length.toString() ?? '—', detail: liveMatches.ok ? 'Dados do provedor' : 'Aguardando conexão', icon: Activity, accent: 'text-rose-300 bg-rose-300/[.07] border-rose-300/15' },
    { label: 'Jogos de hoje', value: '—', detail: 'Não disponível', icon: CalendarDays, accent: 'text-sky-300 bg-sky-300/[.07] border-sky-300/15' },
    { label: 'Próximos jogos', value: '—', detail: 'Não disponível', icon: Clock3, accent: 'text-violet-300 bg-violet-300/[.07] border-violet-300/15' },
    { label: 'Classificações', value: standings.ok ? 'Conectado' : '—', detail: standings.ok ? 'Fonte disponível' : 'Aguardando conexão', icon: Trophy, accent: 'text-[#69f0c5] bg-[#69f0c5]/[.07] border-[#69f0c5]/15' },
  ];
  return (
    <div className="mx-auto max-w-7xl space-y-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="eyebrow">Seu centro de comando</p><h1 className="page-title">Visão geral</h1><p className="mt-3 text-sm leading-6 text-slate-400">Acompanhe o cenário esportivo e o status das suas fontes de dados.</p></div>
        <Link href="/matches" className="secondary-button w-fit">Explorar partidas <ArrowRight className="h-4 w-4" /></Link>
      </header>
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({label,value,detail,icon:Icon,accent})=><article key={label} className="glass-panel p-5"><div className="flex items-center justify-between gap-3"><span className="text-sm font-medium text-slate-400">{label}</span><span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${accent}`}><Icon className="h-4 w-4" /></span></div><p className="mt-5 text-3xl font-extrabold tracking-tight text-white">{value}</p><p className="mt-1.5 text-xs text-slate-500">{detail}</p></article>)}
      </section>
      <section className="glass-panel overflow-hidden">
        <div className="flex flex-col gap-3 border-b border-white/[.07] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-300/15 bg-rose-300/[.07] text-rose-300"><Activity className="h-5 w-5" /></div><div><h2 className="font-bold text-white">Partidas em destaque</h2><p className="mt-1 text-xs text-slate-500">Centro de partidas ao vivo</p></div></div><span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[.08] bg-white/[.025] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400"><span className={`h-1.5 w-1.5 rounded-full ${liveMatches.ok ? 'bg-emerald-400' : 'bg-amber-300'}`} />{liveMatches.ok ? 'Fonte conectada' : 'Aguardando dados'}</span></div>
        <div className="p-5 sm:p-6"><DataState status={liveMatches.ok ? (liveMatches.data?.length ? 'success' : 'empty') : 'error'} title={liveMatches.message || 'Partidas indisponíveis'} description={liveMatches.error || 'Configure um provedor esportivo para começar a receber dados reais.'} action={<Link href="/admin/api" className="secondary-button mt-4 w-fit">Configurar provedor <ArrowRight className="h-4 w-4" /></Link>}>{liveMatches.data && liveMatches.data.length > 0 ? <div className="rounded-xl border border-white/[.07] bg-white/[.02] p-4 text-sm text-slate-300">Partidas disponíveis no provedor conectado.</div> : null}</DataState></div>
      </section>
      <section className="grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
        <div className="glass-panel p-5 sm:p-6"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#69f0c5]/15 bg-[#69f0c5]/[.07] text-[#69f0c5]"><Trophy className="h-5 w-5" /></div><div><h2 className="font-bold text-white">Classificação</h2><p className="mt-1 text-xs text-slate-500">Tabelas e posições</p></div></div><div className="mt-5"><DataState status={standings.ok ? 'success' : 'error'} title={standings.message || 'Classificação indisponível'} description={standings.error || 'Conecte uma API esportiva para carregar as tabelas.'}>{<p className="text-sm leading-6 text-slate-400">Tabela e posições serão exibidas quando a fonte de dados estiver conectada.</p>}</DataState></div></div>
        <div className="relative overflow-hidden rounded-2xl border border-[#69f0c5]/15 bg-gradient-to-br from-[#102b2b] to-[#101827] p-6"><div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#69f0c5]/[.08] blur-2xl" /><ChartNoAxesCombined className="h-6 w-6 text-[#69f0c5]" /><h2 className="mt-5 text-lg font-bold text-white">De dados a decisões</h2><p className="mt-2 text-sm leading-6 text-slate-400">Conecte uma fonte confiável para desbloquear a experiência completa de análise esportiva.</p><Link href="/admin/api" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#8af4d3] hover:text-white">Gerenciar integração <ArrowRight className="h-4 w-4" /></Link></div>
      </section>
    </div>
  );
}