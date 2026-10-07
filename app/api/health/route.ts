import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: 'API health check ok.',
    timestamp: new Date().toISOString(),
  });
}
