import Link from 'next/link';
import { ArrowRight, Heart, Star } from 'lucide-react';

export default function FavoritesPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-8">
      <header><p className="eyebrow">Acesso rápido</p><h1 className="page-title">Seus favoritos</h1><p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">Tenha seus times, competições e partidas importantes sempre à mão.</p></header>
      <section className="glass-panel p-6 sm:p-8">
        <div className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-pink-300/15 bg-pink-300/[.07] text-pink-300"><Heart className="h-5 w-5" /></div><div><h2 className="font-bold text-white">Sua seleção pessoal</h2><p className="mt-1 text-sm leading-6 text-slate-400">Times e eventos salvos aparecerão nesta área.</p></div></div>
        <div className="mt-6 rounded-2xl border border-dashed border-white/[.12] bg-black/10 px-5 py-10 text-center"><Star className="mx-auto h-7 w-7 text-slate-600" /><p className="mt-3 font-semibold text-slate-200">Ainda sem favoritos</p><p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">Quando os dados esportivos estiverem conectados, você poderá explorar conteúdos para acompanhar.</p><Link href="/matches" className="secondary-button mt-5">Explorar partidas <ArrowRight className="h-4 w-4" /></Link></div>
      </section>
    </main>
  );
}