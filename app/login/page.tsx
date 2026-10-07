import Link from 'next/link';
import { AuthCard } from '@/components/auth-card';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <AuthCard
          title="Entrar"
          subtitle="Acesse sua conta e acompanhe partidas, competições e análises em tempo real."
          buttonLabel="Ir para login"
          footer="Ainda não tem conta? Crie uma agora."
        />
        <div className="text-center">
          <Link href="/register" className="text-sm text-brand-300 underline">Criar conta</Link>
        </div>
      </div>
    </main>
  );
}
