export default function FavoritesPage() {
  return (
    <main className="space-y-6">
      <header>
        <p className="text-sm uppercase tracking-[0.2em] text-brand-300">Favoritos</p>
        <h1 className="mt-2 text-3xl font-black text-white">Times, competições e partidas</h1>
      </header>
      <div className="glass-panel p-8 text-slate-300">
        <p>Dados não disponíveis.</p>
        <p className="mt-2 text-sm text-slate-400">Configure uma API esportiva no painel administrativo para começar a receber dados reais.</p>
      </div>
    </main>
  );
}
