import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(value?: string | Date | null) {
  if (!value) return 'Data não disponível';
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value));
}

export function toTitleCase(value: string) {
  return value
    .toLowerCase()
    .split(' ')
    .map((part) => (part ? part[0].toUpperCase() + part.slice(1) : part))
    .join(' ');
}

export function sanitizedError(message: string) {
  if (!message) return 'Ocorreu um erro inesperado.';
  if (message.includes('ECONNREFUSED')) return 'Falha de conexão com o serviço.';
  if (message.includes('401')) return 'Credenciais inválidas.';
  if (message.includes('403')) return 'Acesso negado.';
  return 'Não foi possível completar esta ação neste momento.';
}
