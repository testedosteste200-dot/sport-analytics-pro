import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    ok: false,
    message: 'Configure uma API esportiva no painel administrativo para começar a receber dados reais.',
    data: [],
  });
}
