import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { AuthCard } from '@/components/auth-card';

export default function LoginPage() {
  return (
    <main className="flex min-h-[calc(100vh-7rem)] items-center justify-center px-1 py-8 sm:py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-slate-200"><ArrowLeft className="h-3.5 w-3.5" /> Voltar à página inicial</Link>
        <AuthCard title="Bem-vindo de volta" subtitle="Acesse sua conta para acompanhar partidas, competições e análises esportivas." buttonLabel="Continuar para login" footer="Ainda não tem conta? Crie uma agora." />
        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500"><ShieldCheck className="h-4 w-4 text-[#69f0c5]" /> Acesso protegido e dados privados</div>
        <p className="mt-4 text-center text-sm text-slate-400">Novo por aqui? <Link href="/register" className="font-semibold text-[#81edcd] underline-offset-4 hover:underline">Criar conta</Link></p>
      </div>
    </main>
  );
}