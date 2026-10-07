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
    return (
      <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-6 text-slate-100">
        <div className="flex items-center gap-3">
          <Loader2 className="h-5 w-5 animate-spin text-brand-400" />
          <span>Carregando dados...</span>
        </div>
      </div>
    );
  }

  if (status === 'empty') {
    return (
      <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/50 p-6 text-center text-slate-300">
        <SearchX className="mx-auto mb-3 h-8 w-8 text-slate-400" />
        <p className="font-semibold text-white">{title}</p>
        <p className="mt-2 text-sm text-slate-400">{description || 'Dados não disponíveis.'}</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="rounded-2xl border border-red-500/40 bg-red-500/5 p-6 text-red-100">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 text-red-300" />
          <div>
            <p className="font-semibold">{title}</p>
            <p className="mt-2 text-sm text-red-200">{description || 'Não foi possível carregar os dados.'}</p>
            {action}
          </div>
        </div>
      </div>
    );
  }

  return <div className={cn('space-y-4')}>{children}</div>;
}
