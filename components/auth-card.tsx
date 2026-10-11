import Link from 'next/link';
import { ArrowRight, BarChart3, ShieldCheck, Sparkles } from 'lucide-react';

export function authLinkCss() {
  return 'primary-button w-full';
}

export function AuthCard({
  title,
  subtitle,
  buttonLabel,
  footer,
}: {
  title: string;
  subtitle: string;
  buttonLabel: string;
  footer: string;
}) {
  const destination = title.toLowerCase().includes('crie') || title.toLowerCase().includes('cadastr') ? '/register' : '/login';
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-white/[.09] bg-[#0c1422]/95 p-6 shadow-[0_28px_80px_rgba(0,0,0,.3)] backdrop-blur-xl sm:p-8">
      <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-[#69f0c5]/[.07] blur-3xl" />
      <div className="relative">
        <Link href="/" className="mb-8 inline-flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#78f4d0] to-[#5cc7ff] text-slate-950"><BarChart3 className="h-5 w-5" /></div>
          <div><p className="text-[9px] font-bold uppercase tracking-[.2em] text-[#81edcd]">Sport intelligence</p><p className="text-sm font-extrabold tracking-tight text-white">Analytics Pro</p></div>
        </Link>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#69f0c5]/15 bg-[#69f0c5]/[.06] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#81edcd]"><Sparkles className="h-3.5 w-3.5" /> Seu próximo nível começa aqui</div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm leading-6 text-slate-400">{subtitle}</p>
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/[.07] bg-white/[.025] p-3.5 text-sm text-slate-300">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#69f0c5]" /><span className="leading-5">Credenciais protegidas e chaves de integração mantidas no servidor.</span>
        </div>
        <Link href={destination} className={authLinkCss() + ' mt-6'}>{buttonLabel}<ArrowRight className="h-4 w-4" /></Link>
        <p className="mt-5 text-center text-xs leading-5 text-slate-500">{footer}</p>
      </div>
    </section>
  );
}