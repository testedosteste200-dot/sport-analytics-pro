import Link from 'next/link';
import { Activity, ArrowRight, BarChart3, ChartColumn, CheckCircle2, ShieldCheck, Sparkles, Trophy, Zap } from 'lucide-react';

const features = [
  { icon: ChartColumn, title: 'Uma visão mais clara', description: 'Centralize partidas, competições e indicadores em uma experiência feita para decisões rápidas.' },
  { icon: Activity, title: 'Acompanhe ao vivo', description: 'Encontre o centro de partidas e consulte dados reais quando seu provedor estiver conectado.' },
  { icon: ShieldCheck, title: 'Dados com segurança', description: 'Autenticação e chaves de API permanecem protegidas no backend.' },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 pb-6 pt-2 md:space-y-12 md:pt-5">
      <section className="relative isolate overflow-hidden rounded-[28px] border border-white/[.09] bg-[#0d1726] shadow-[0_28px_80px_rgba(0,0,0,.25)]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_82%_18%,rgba(105,240,197,.16),transparent_35%),radial-gradient(ellipse_at_15%_100%,rgba(29,158,255,.12),transparent_42%)]" />
        <div className="pointer-events-none absolute right-[-5rem] top-[-6rem] -z-10 h-80 w-80 rounded-full border border-white/[.06] md:right-12 md:top-[-7rem] md:h-[28rem] md:w-[28rem]">
          <div className="absolute inset-8 rounded-full border border-white/[.06]" /><div className="absolute inset-16 rounded-full border border-white/[.06]" />
          <div className="absolute right-[18%] top-[29%] h-3 w-3 rounded-full bg-[#69f0c5] shadow-[0_0_28px_8px_rgba(105,240,197,.25)]" />
        </div>
        <div className="grid gap-10 px-6 py-10 sm:px-9 sm:py-12 md:grid-cols-[1.15fr_.85fr] md:items-center md:px-12 md:py-16 lg:px-16 lg:py-20">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#69f0c5]/20 bg-[#69f0c5]/[.08] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#91f3d5] sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" /> Inteligência esportiva, em um só lugar
            </div>
            <h1 className="max-w-xl text-4xl font-black leading-[1.06] tracking-[-.045em] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              O jogo muda. <span className="bg-gradient-to-r from-[#8af4d3] to-[#76cfff] bg-clip-text text-transparent">Sua leitura evolui.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Uma central profissional para acompanhar partidas, explorar competições e transformar dados esportivos em contexto.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/register" className="primary-button group">Começar agora <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>
              <Link href="/login" className="secondary-button">Entrar na plataforma</Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-slate-400">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#69f0c5]" /> Interface responsiva</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#69f0c5]" /> Dados sem invenção</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2rem] bg-[#69f0c5]/[.06] blur-2xl" />
            <div className="relative rounded-3xl border border-white/[.11] bg-[#09111e]/90 p-5 shadow-2xl backdrop-blur-xl sm:p-6">
              <div className="flex items-center justify-between border-b border-white/[.08] pb-5">
                <div><p className="text-xs font-semibold text-slate-400">CENTRAL DE INTELIGÊNCIA</p><p className="mt-1 text-lg font-bold text-white">Visão geral</p></div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#69f0c5]/[.1] text-[#69f0c5]"><BarChart3 className="h-5 w-5" /></div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/[.07] bg-white/[.025] p-4"><div className="flex items-center gap-2 text-xs text-slate-400"><Activity className="h-4 w-4 text-[#69f0c5]" /> Ao vivo</div><p className="mt-4 text-xl font-bold text-white">Central</p><p className="mt-1 text-[11px] text-slate-500">Partidas em andamento</p></div>
                <div className="rounded-2xl border border-white/[.07] bg-white/[.025] p-4"><div className="flex items-center gap-2 text-xs text-slate-400"><Trophy className="h-4 w-4 text-sky-300" /> Competições</div><p className="mt-4 text-xl font-bold text-white">Global</p><p className="mt-1 text-[11px] text-slate-500">Ligas e torneios</p></div>
              </div>
              <div className="mt-3 rounded-2xl border border-white/[.07] bg-white/[.025] p-4">
                <div className="flex items-center justify-between"><span className="text-xs font-semibold text-slate-300">Conexão de dados</span><span className="rounded-full border border-amber-300/20 bg-amber-300/[.08] px-2.5 py-1 text-[10px] font-bold text-amber-200">Configuração necessária</span></div>
                <p className="mt-3 text-xs leading-5 text-slate-500">Conecte um provedor esportivo para visualizar informações reais nesta área.</p>
                <Link href="/admin/api" className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#81edcd] transition hover:text-white">Configurar provedor <ArrowRight className="h-3.5 w-3.5" /></Link>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-medium text-slate-500"><Zap className="h-3.5 w-3.5 text-[#69f0c5]" /> Dados exibidos somente quando disponíveis</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="eyebrow">Feito para acompanhar o jogo</p><h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Tudo que importa. Sem ruído.</h2></div>
          <p className="max-w-md text-sm leading-6 text-slate-500">Navegação clara, informação organizada e uma base pronta para crescer com seus dados.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }, index) => (
            <article key={title} className="glass-panel group p-6 transition duration-300 hover:-translate-y-1 hover:border-[#69f0c5]/20 sm:p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#69f0c5]/15 bg-[#69f0c5]/[.07] text-[#7aebcb] transition group-hover:bg-[#69f0c5]/[.12]"><Icon className="h-5 w-5" /></div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[.2em] text-slate-600">0{index + 1} / Plataforma</p>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-5 rounded-3xl border border-white/[.08] bg-gradient-to-r from-[#101b2a] to-[#0d1522] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex items-start gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[.05] text-[#69f0c5]"><ShieldCheck className="h-5 w-5" /></div><div><p className="font-bold text-white">Pronto para sua próxima análise?</p><p className="mt-1 text-sm leading-6 text-slate-400">Entre na plataforma ou crie uma conta para começar.</p></div></div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row"><Link href="/register" className="primary-button">Criar conta <ArrowRight className="h-4 w-4" /></Link><Link href="/dashboard" className="secondary-button">Abrir dashboard</Link></div>
      </section>
    </div>
  );
}