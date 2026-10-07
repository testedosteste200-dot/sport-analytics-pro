import { requireAdmin } from '@/lib/auth';

export default async function AdminAiPage() {
  await requireAdmin();

  return (
    <main className="space-y-6">
      <header>
        <p className="text-sm uppercase tracking-[0.2em] text-brand-300">AI Settings</p>
        <h1 className="mt-2 text-3xl font-black text-white">Configuração de IA</h1>
      </header>
      <div className="glass-panel p-8 text-slate-300">
        <p>Serviço não configurado.</p>
        <p className="mt-2 text-sm text-slate-400">A chave da IA nunca será enviada ao cliente.</p>
      </div>
    </main>
  );
}
