import Link from 'next/link';
import { ArrowRight, Shield, Sparkles } from 'lucide-react';

export function authLinkCss() {
  return 'inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-brand-400 hover:text-white';
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
  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-soft">
      <div className="mb-6 flex items-center gap-2 text-brand-300">
        <Sparkles className="h-5 w-5" />
        <span className="text-sm font-medium uppercase tracking-[0.2em]">SPORT ANALYTICS PRO</span>
      </div>
      <h1 className="text-3xl font-black text-white">{title}</h1>
      <p className="mt-2 text-sm text-slate-400">{subtitle}</p>
      <div className="mt-6 space-y-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-sm text-slate-300">
          <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-brand-300" /> Credenciais protegidas no backend</div>
        </div>
      </div>
      <Link href="/login" className={authLinkCss() + ' mt-6 w-full'}>
        {buttonLabel} <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
      <p className="mt-5 text-center text-xs text-slate-400">{footer}</p>
    </div>
  );
}
