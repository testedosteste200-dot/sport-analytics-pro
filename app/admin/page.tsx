import Link from 'next/link';
import { requireAdmin } from '@/lib/auth';
import { Activity, ArrowRight, BrainCircuit, FileText, KeyRound, Users } from 'lucide-react';

export default async function AdminPage() {
  await requireAdmin();
  const shortcuts = [
    { href: '/admin/api', icon: KeyRound, title: 'Provedores de dados', detail: 'Gerencie integrações e fontes esportivas.' },
    { href: '/admin/ai', icon: BrainCircuit, title: 'Configuração de IA', detail: 'Consulte o espaço de configuração dos serviços de IA.' },
    { href: '/admin/logs', icon: FileText, title: 'Logs e auditoria', detail: 'Acompanhe eventos e registros de segurança.' },
  ];
  return (
    <main className="mx-auto max-w-7xl space-y-8">
      <header><p className="eyebrow">Workspace protegido</p><h1 className="page-title">Painel administrativo</h1><p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">Gerencie integrações e acompanhe a infraestrutura da plataforma.</p></header>
      <section className="grid gap-4 sm:grid-cols-3">
        {[{label:'Usuários',value:'—',icon:Users},{label:'Usuários ativos',value:'—',icon:Activity},{label:'Uso da API',value:'—',icon:KeyRound}].map(({label,value,icon:Icon})=><div key={label} className="glass-panel p-5"><div className="flex items-center justify-between"><span className="text-sm text-slate-400">{label}</span><span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[.07] bg-white/[.03] text-[#69f0c5]"><Icon className="h-4 w-4" /></span></div><p className="mt-4 text-3xl font-extrabold text-white">{value}</p><p className="mt-1 text-xs text-slate-600">Métricas ainda não conectadas</p></div>)}
      </section>
      <section><div className="mb-4"><p className="eyebrow">Administração</p><h2 className="mt-2 text-xl font-bold text-white">Ferramentas da plataforma</h2></div><div className="grid gap-4 lg:grid-cols-3">{shortcuts.map(({href,icon:Icon,title,detail})=><Link key={href} href={href} className="glass-panel group p-5 transition hover:-translate-y-0.5 hover:border-[#69f0c5]/20"><div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#69f0c5]/15 bg-[#69f0c5]/[.07] text-[#69f0c5]"><Icon className="h-5 w-5" /></div><h3 className="mt-4 font-bold text-white">{title}</h3><p className="mt-2 min-h-10 text-sm leading-5 text-slate-400">{detail}</p><span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#81edcd]">Abrir ferramenta <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" /></span></Link>)}</div></section>
      <div className="rounded-2xl border border-amber-300/15 bg-amber-300/[.04] p-5 text-sm leading-6 text-slate-400"><span className="font-semibold text-amber-200">Configuração pendente.</span> Estatísticas de usuários e consumo serão exibidas quando os serviços correspondentes estiverem conectados. Nenhuma métrica é estimada.</div>
    </main>
  );
}