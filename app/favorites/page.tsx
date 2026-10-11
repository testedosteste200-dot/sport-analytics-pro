import Link from 'next/link';
import { ArrowRight, Bell, Star } from 'lucide-react';

export default function FavoritesPage() {
  return (
    <main className="mx-auto max-w-[1440px] space-y-6">
      <header><p className="section-label">Personalização</p><h1 className="mt-2 text-3xl font-black text-white">Meus favoritos</h1><p className="mt-2 text-sm text-slate-400">Tenha acesso rápido aos times, partidas e competições que acompanha.</p></header>
      <section className="glass-panel overflow-hidden">
        <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-4"><Star className="h-5 w-5 text-lime-300" /><h2 className="font-extrabold text-white">Sua lista</h2></div>
        <div className="p-4 sm:p-6"><div className="score-empty"><Star className="mx-auto mb-3 h-8 w-8 text-lime-300" /><h3 className="font-bold text-white">Seus favoritos ficarão aqui</h3><p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-400">A lista está vazia. A seleção e sincronização de favoritos precisa estar conectada à fonte de dados da aplicação.</p><Link href="/notifications" className="secondary-button mt-5">Ver notificações <Bell className="h-4 w-4" /></Link></div></div>
      </section>
    </main>
  );
}
