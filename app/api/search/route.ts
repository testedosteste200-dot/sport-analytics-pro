import { NextResponse } from 'next/server';
import { z } from 'zod';

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: 'Serviço não configurado.',
    details: 'Configure uma API esportiva no painel administrativo para começar a receber dados reais.',
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const schema = z.object({
    query: z.string().min(1),
  });

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: 'Consulta inválida.' }, { status: 400 });
  }

  return NextResponse.json({
    ok: false,
    message: 'Dados não disponíveis.',
    results: [],
  });
}
