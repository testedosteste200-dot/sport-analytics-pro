import { requireAdmin } from '@/lib/auth';

export default async function AdminPage() {
  await requireAdmin();

  return (
    <main className="space-y-6">
      <header>
        <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Admin Panel</p>
        <h1 className="mt-2 text-3xl font-black text-white">Painel administrativo</h1>
      </header>
      <section className="grid gap-4 md:grid-cols-3">
        <div className="glass-panel p-4"><div className="text-sm text-slate-400">Usuários</div><div className="mt-3 text-3xl font-black text-white">0</div></div>
        <div className="glass-panel p-4"><div className="text-sm text-slate-400">Usuários ativos</div><div className="mt-3 text-3xl font-black text-white">0</div></div>
        <div className="glass-panel p-4"><div className="text-sm text-slate-400">Uso da API</div><div className="mt-3 text-3xl font-black text-white">0</div></div>
      </section>
      <div className="glass-panel p-8 text-slate-300">
        <p>Serviço não configurado.</p>
        <p className="mt-2 text-sm text-slate-400">Configure a integração de dados e IA a partir do painel administrativo.</p>
      </div>
    </main>
  );
}
