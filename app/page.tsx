import Link from 'next/link';
import { Activity, ArrowRight, BarChart3, CalendarDays, CheckCircle2, ChevronRight, CircleDot, ShieldCheck, Star, Trophy, Zap } from 'lucide-react';

const sports = [
  { label: 'Futebol', emoji: '⚽' },
  { label: 'Basquete', emoji: '🏀' },
  { label: 'Tênis', emoji: '🎾' },
  { label: 'Vôlei', emoji: '🏐' },
  { label: 'Futsal', emoji: '🥅' },
];

const shortcuts = [
  { href: '/live', label: 'Central ao vivo', detail: 'Acompanhe partidas em andamento', icon: Activity },
  { href: '/matches', label: 'Jogos e resultados', detail: 'Calendário e placares', icon: CalendarDays },
  { href: '/competitions', label: 'Competições', detail: 'Ligas e classificações', icon: Trophy },
  { href: '/favorites', label: 'Seus favoritos', detail: 'Acesso rápido ao que importa', icon: Star },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[1440px] space-y-6 pb-8">
      <header className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-800 bg-[#151e28] p-5 sm:flex-row sm:items-center sm:p-7">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-3 py-1.5 text-xs font-bold text-lime-300">
            <Zap className="h-3.5 w-3.5" /> INTELIGÊNCIA ESPORTIVA
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Tudo sobre o jogo.</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Resultados, partidas, competições e análise esportiva em uma central feita para quem acompanha cada detalhe.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <Link href="/register" className="primary-button">Criar conta <ArrowRight className="h-4 w-4" /></Link>
          <Link href="/login" className="secondary-button">Entrar</Link>
        </div>
      </header>

      <section className="glass-panel overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 px-5 py-4">
          <div className="flex items-center gap-2">
            <CircleDot className="h-5 w-5 text-lime-300" />
            <h2 className="font-extrabold text-white">Centro de partidas</h2>
          </div>
          <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">Visão geral</span>
        </div>
        <div className="flex gap-2 overflow-x-auto border-b border-slate-800 px-4 py-3">
          {sports.map((sport, index) => (
            <span key={sport.label} className={`inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold ${index === 0 ? 'bg-lime-400 text-slate-950' : 'bg-slate-800/70 text-slate-300'}`}>
              <span>{sport.emoji}</span>{sport.label}
            </span>
          ))}
        </div>
        <div className="p-4 sm:p-6">
          <div className="score-empty">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-800 text-lime-300"><Activity className="h-6 w-6" /></div>
            <h3 className="font-bold text-white">Seus placares começam aqui</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-400">
              Conecte um provedor de dados esportivos no painel administrativo para exibir partidas e placares reais. Não mostramos resultados fictícios.
            </p>
            <Link href="/admin/api" className="secondary-button mt-5">Configurar provedor <ChevronRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {shortcuts.map(({ href, label, detail, icon: Icon }) => (
          <Link key={href} href={href} className="glass-panel group flex items-start gap-4 p-5 transition hover:-translate-y-0.5 hover:border-lime-400/40">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime-400/10 text-lime-300"><Icon className="h-5 w-5" /></div>
            <div className="min-w-0 flex-1">
              <h2 className="font-bold text-white">{label}</h2>
              <p className="mt-1 text-sm leading-5 text-slate-400">{detail}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-lime-300">Abrir seção <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></span>
            </div>
          </Link>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="glass-panel p-5 lg:col-span-2">
          <div className="mb-4 flex items-center gap-2"><BarChart3 className="h-5 w-5 text-lime-300" /><h2 className="font-extrabold text-white">Análise e desempenho</h2></div>
          <p className="text-sm leading-6 text-slate-400">Acesse as áreas de estatísticas, confrontos e classificação quando os dados estiverem disponíveis pelo provedor configurado.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/dashboard" className="secondary-button">Abrir dashboard</Link>
            <Link href="/competitions" className="secondary-button">Ver competições</Link>
          </div>
        </div>
        <div className="glass-panel p-5">
          <div className="mb-4 flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-lime-300" /><h2 className="font-extrabold text-white">Confiabilidade</h2></div>
          <div className="flex items-start gap-2 text-sm leading-6 text-slate-400"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-lime-300" /> A interface diferencia dados reais de conteúdo ainda não configurado.</div>
        </div>
      </section>
    </main>
  );
}
