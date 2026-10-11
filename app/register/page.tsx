import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { AuthCard } from '@/components/auth-card';

export default function RegisterPage() {
  return (
    <main className="flex min-h-[calc(100vh-7rem)] items-center justify-center px-1 py-8 sm:py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition hover:text-slate-200"><ArrowLeft className="h-3.5 w-3.5" /> Voltar à página inicial</Link>
        <AuthCard title="Crie sua conta" subtitle="Prepare seu espaço de análise e acompanhe o cenário esportivo em um só lugar." buttonLabel="Continuar para cadastro" footer="Já possui uma conta? Faça login." />
        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500"><ShieldCheck className="h-4 w-4 text-[#69f0c5]" /> Seus dados são tratados com segurança</div>
        <p className="mt-4 text-center text-sm text-slate-400">Já tem conta? <Link href="/login" className="font-semibold text-[#81edcd] underline-offset-4 hover:underline">Entrar</Link></p>
      </div>
    </main>
  );
}