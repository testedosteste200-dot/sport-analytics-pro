import Link from 'next/link';
import { ArrowLeft, BrainCircuit, Info } from 'lucide-react';
import { sportsProvider } from '@/services/sports/provider';
import { buildMatchInsights } from '@/lib/match-analysis';
export const dynamic = 'force-dynamic';
export default async function MatchAnalysisDetail({ params }: { params: { matchId: string } }) {
 const [matchResult, h2hResult, statsResult] = await Promise.all([sportsProvider.getMatch(params.matchId), sportsProvider.getH2H(params.matchId), sportsProvider.getStatistics()]);
 const match = matchResult.ok ? matchResult.data : null;
 const homeName = match?.homeTeam?.name ?? match?.teams?.home?.name ?? match?.home?.name ?? 'Mandante';
 const awayName = match?.awayTeam?.name ?? match?.teams?.away?.name ?? match?.away?.name ?? 'Visitante';
 const competition = match?.competition?.name ?? match?.league?.name ?? 'Competição';
 const insights = buildMatchInsights(homeName, awayName, match?.recentHome ?? [], match?.recentAway ?? [], h2hResult.ok ? h2hResult.data : []);
 return <main className="space-y-6"><Link href="/analysis" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"><ArrowLeft className="h-4 w-4"/>Todas as análises</Link><header><p className="text-sm uppercase tracking-[0.2em] text-brand-300">{competition}</p><h1 className="mt-2 text-3xl font-black text-white">{homeName} <span className="text-slate-500">vs</span> {awayName}</h1><p className="mt-2 text-sm text-slate-400">Relatório baseado nos dados disponíveis para esta partida.</p></header>
 {!match && <div className="glass-panel flex gap-3 p-5"><Info className="mt-1 h-5 w-5 shrink-0 text-amber-300"/><div><h2 className="font-semibold text-white">Partida indisponível</h2><p className="mt-1 text-sm leading-6 text-slate-400">O provedor não retornou dados reais para este identificador. Nenhuma previsão foi inventada. Configure a integração para fornecer partidas, estatísticas recentes e confrontos diretos.</p></div></div>}
 {insights.map((insight, index) => <article key={insight.title + index} className="glass-panel p-5"><div className="flex items-start gap-3"><BrainCircuit className="mt-1 h-5 w-5 shrink-0 text-brand-300"/><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h2 className="font-bold text-white">{insight.title}</h2><span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-300">Confiança {insight.confidence}</span></div><p className="mt-2 text-sm leading-6 text-slate-300">{insight.detail}</p><p className="mt-3 text-xs text-slate-500">Base: {insight.basis}</p></div></div></article>)}
 <p className="text-xs leading-5 text-slate-500">Amostras pequenas, desfalques, escalações e mudanças de treinador podem alterar o cenário. Tendências não são garantias.</p></main>;
}
