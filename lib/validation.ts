import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().min(2, 'Informe o nome completo.'),
  email: z.string().email('E-mail inválido.'),
  password: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres.'),
});

export const loginSchema = z.object({
  email: z.string().email('E-mail inválido.'),
  password: z.string().min(8, 'Senha inválida.'),
});

export const apiConfigSchema = z.object({
  name: z.string().min(2, 'Informe um nome para o provedor.'),
  provider: z.string().min(2, 'Informe o provedor.'),
  url: z.string().url('Informe uma URL válida.'),
  apiKey: z.string().optional(),
  sport: z.string().min(2, 'Informe o esporte.'),
  status: z.enum(['active', 'inactive', 'error']),
  priority: z.coerce.number().min(1).max(100),
});
