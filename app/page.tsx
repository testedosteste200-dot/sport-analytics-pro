import Link from 'next/link';
import { Activity, ArrowRight, BarChart3, BellRing, BrainCircuit, ChartNoAxesCombined, CircleDot, ShieldCheck, Sparkles, Trophy } from 'lucide-react';

const features = [
  { icon: Activity, title: 'Central de partidas', description: 'Acompanhe partidas, placares e eventos conforme os dados da API conectada.' },
  { icon: BrainCircuit, title: 'Inteligência estatística', description: 'Estimativas explicáveis com base em histórico, forma recente e qualidade dos dados.' },
  { icon: ChartNoAxesCombined, title: 'Estatísticas detalhadas', description: 'Compare gols, escanteios, cartões, finalizações e desempenho das equipes.' },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 pb-12">
      <section className="relative overflow-hidden rounded-[28px] border border-emerald-900/60 bg-hero px-5 py-9 shadow-soft sm:px-8 sm:py-12 lg:px-12">
        <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="relative max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
            <Sparkles className="h-4 w-4" /> Futebol + inteligência estatística
          </div>
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20">
              <CircleDot className="h-7 w-7" />
            </div>
            <span className="text-sm font-bold uppercase tracking-[0.24em] text-emerald-300">Greenscore Live</span>
          </div>
          <h1 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Entenda o jogo além do placar.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Uma plataforma de análise de futebol para explorar estatísticas, acompanhar partidas e entender tendências com transparência sobre os dados disponíveis.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/login" className="primary-button min-h-12 gap-2 px-5">
              Acessar plataforma <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/admin/api" className="secondary-button min-h-12 gap-2 px-5">
              <Activity className="h-4 w-4" /> Configurar fonte de dados
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-400">As análises dependem da cobertura, atualização e qualidade das fontes de dados conectadas.</p>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <article key={title} className="glass-panel p-5 sm:p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-white">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-panel p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
              <Trophy className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-300">Comece por aqui</p>
              <h2 className="mt-1 text-xl font-bold text-white">Prepare os dados esportivos</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">Conecte seu provedor no servidor para habilitar competições, calendário, resultados e estatísticas. Nenhum placar ilustrativo será apresentado como partida real.</p>
              <Link href="/admin/api" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200">
                Abrir configuração de API <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-xl border border-dashed border-slate-700 bg-slate-950/50 p-4">
            <BellRing className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" />
            <div>
              <p className="text-sm font-semibold text-slate-200">Eventos e notificações</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">Alertas de gol, cartão, escanteio e fim de jogo exigem uma fonte compatível e uma implementação de atualização em tempo real.</p>
            </div>
          </div>
        </div>
        <div className="glass-panel p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-bold text-white">Transparência e segurança</h2>
              <p className="text-xs text-slate-400">Princípios do GreenScore Live</p>
            </div>
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex gap-2"><span className="text-emerald-300">✓</span> Chaves de API mantidas no servidor</li>
            <li className="flex gap-2"><span className="text-emerald-300">✓</span> Separação entre dados reais e estimativas</li>
            <li className="flex gap-2"><span className="text-emerald-300">✓</span> Probabilidades sem promessa de acerto</li>
            <li className="flex gap-2"><span className="text-emerald-300">✓</span> Evolução incremental do projeto existente</li>
          </ul>
          <div className="mt-6 border-t border-slate-800 pt-4">
            <Link href="/register" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 hover:text-emerald-200">
              Criar uma conta <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="flex flex-col gap-1 border-t border-slate-800/80 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>GreenScore Live · Análise esportiva baseada em dados</span>
        <span className="inline-flex items-center gap-2"><BarChart3 className="h-3.5 w-3.5" /> Precisão depende da fonte e da amostra disponível</span>
      </footer>
    </main>
  );
}
