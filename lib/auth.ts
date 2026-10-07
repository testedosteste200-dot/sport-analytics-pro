import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { jwtVerify, SignJWT } from 'jose';
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';

const secret = new TextEncoder().encode(process.env.SESSION_SECRET || 'sport-analytics-pro-local-secret');

export type AppRole = 'USER' | 'ADMIN';

export async function createSessionToken(payload: { id: string; email: string; role: AppRole }) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('30d')
    .sign(secret);
}

export async function verifySessionToken(token: string) {
  const { payload } = await jwtVerify(token, secret);
  return payload as { id: string; email: string; role: AppRole };
}

export async function currentUser() {
  const cookieStore = cookies();
  const token = cookieStore.get('sap_session')?.value;

  if (!token) return null;

  try {
    const session = await verifySessionToken(token);
    return await db.user.findUnique({
      where: { id: session.id },
      include: { profile: true },
    });
  } catch {
    return null;
  }
}

export async function requireUser() {
  const user = await currentUser();
  if (!user) redirect('/login');
  return user;
}

export async function requireAdmin() {
  const user = await requireUser();
  if (user.role !== 'ADMIN') {
    redirect('/dashboard');
  }
  return user;
}

export async function userHasRole(request: NextRequest, role: AppRole) {
  const token = request.cookies.get('sap_session')?.value;
  if (!token) return false;

  try {
    const session = await verifySessionToken(token);
    return session.role === role;
  } catch {
    return false;
  }
}
