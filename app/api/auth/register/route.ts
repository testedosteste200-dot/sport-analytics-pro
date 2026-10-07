import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/db';
import { createSessionToken } from '@/lib/auth';
import { loginSchema, registerSchema } from '@/lib/validation';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = registerSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, message: parsed.error.issues[0]?.message || 'Dados inválidos.' }, { status: 400 });
  }

  const { name, email, password } = parsed.data;

  const existing = await db.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ ok: false, message: 'Este e-mail já está cadastrado.' }, { status: 409 });
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const created = await db.user.create({
    data: {
      name,
      email,
      passwordHash,
      role: 'USER',
      profile: {
        create: {
          language: 'pt-BR',
          theme: 'dark',
          notifications: true,
        },
      },
    },
  });

  const token = await createSessionToken({
    id: created.id,
    email: created.email,
    role: created.role === 'ADMIN' ? 'ADMIN' : 'USER',
  });

  const response = NextResponse.json({ ok: true, message: 'Usuário registrado com sucesso.' }, { status: 201 });
  response.cookies.set('sap_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}

export async function GET() {
  return NextResponse.json({ ok: true, message: 'Registro está disponível.' });
}
