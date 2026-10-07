import Link from 'next/link';
import { AuthCard } from '@/components/auth-card';

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <AuthCard
          title="Cadastrar"
          subtitle="Crie sua conta SPORT ANALYTICS PRO e personalize seu painel esportivo."
          buttonLabel="Ir para cadastro"
          footer="Já possui conta? Faça login."
        />
        <div className="text-center">
          <Link href="/login" className="text-sm text-brand-300 underline">Fazer login</Link>
        </div>
      </div>
    </main>
  );
}
