import { requireAdmin } from '@/lib/auth';

export default async function AdminLogsPage() {
  await requireAdmin();

  return (
    <main className="space-y-6">
      <header>
        <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Logs</p>
        <h1 className="mt-2 text-3xl font-black text-white">Registro de segurança e eventos</h1>
      </header>
      <div className="glass-panel p-8 text-slate-300">
        <p>Sem logs ainda.</p>
        <p className="mt-2 text-sm text-slate-400">Os eventos importantes serão registrados no backend quando os serviços estiverem ativos.</p>
      </div>
    </main>
  );
}
