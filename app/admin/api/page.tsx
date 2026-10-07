import { requireAdmin } from '@/lib/auth';

export default async function AdminApiPage() {
  await requireAdmin();

  return (
    <main className="space-y-6">
      <header>
        <p className="text-sm uppercase tracking-[0.2em] text-brand-300">API Management</p>
        <h1 className="mt-2 text-3xl font-black text-white">Gerenciamento de APIs</h1>
      </header>
      <div className="glass-panel p-8 text-slate-300">
        <p>Serviço não configurado.</p>
        <p className="mt-2 text-sm text-slate-400">A API key é armazenada somente no backend e nunca é exposta ao frontend.</p>
      </div>
    </main>
  );
}
