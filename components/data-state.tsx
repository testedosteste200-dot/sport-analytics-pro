import type { ReactNode } from 'react';
import { AlertTriangle, Loader2, SearchX } from 'lucide-react';
import { cn } from '@/lib/utils';

export function DataState({
  status,
  title,
  description,
  action,
  children,
}: {
  status: 'loading' | 'empty' | 'error' | 'success';
  title: string;
  description?: string;
  action?: ReactNode;
  children?: ReactNode;
}) {
  if (status === 'loading') {
    return <div role="status" className="rounded-2xl border border-white/[.08] bg-white/[.025] p-6 text-slate-200"><div className="flex items-center gap-3"><Loader2 className="h-5 w-5 animate-spin text-[#69f0c5]" /><span className="text-sm font-medium">Carregando dados...</span></div></div>;
  }
  if (status === 'empty') {
    return <div className="rounded-2xl border border-dashed border-white/[.12] bg-black/10 p-7 text-center text-slate-300"><SearchX className="mx-auto mb-3 h-7 w-7 text-slate-500" /><p className="font-semibold text-white">{title}</p><p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-400">{description || 'Dados não disponíveis.'}</p>{action}</div>;
  }
  if (status === 'error') {
    return <div role="alert" className="rounded-2xl border border-rose-300/15 bg-rose-300/[.035] p-5 text-slate-200"><div className="flex items-start gap-3"><AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-rose-300" /><div><p className="font-semibold text-white">{title}</p><p className="mt-2 text-sm leading-6 text-slate-400">{description || 'Não foi possível carregar os dados.'}</p>{action}</div></div></div>;
  }
  return <div className={cn('space-y-4')}>{children}</div>;
}