import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { createSessionToken } from '@/lib/auth';
import { db } from '@/lib/db';
import { loginSchema } from '@/lib/validation';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = loginSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: parsed.error.issues[0]?.message || 'Dados inválidos.' }, { status: 400 });
  }

  const { email, password } = parsed.data;
  const user = await db.user.findUnique({ where: { email } });

  if (!user) {
    return NextResponse.json({ ok: false, message: 'E-mail ou senha inválidos.' }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    return NextResponse.json({ ok: false, message: 'E-mail ou senha inválidos.' }, { status: 401 });
  }

  const token = await createSessionToken({
    id: user.id,
    email: user.email,
    role: user.role === 'ADMIN' ? 'ADMIN' : 'USER',
  });

  const response = NextResponse.json({ ok: true, message: 'Login realizado com sucesso.' });
  response.cookies.set('sap_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}
