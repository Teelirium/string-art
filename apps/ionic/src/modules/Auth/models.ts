import { z } from 'zod';

export const loginFormSchema = z.object({
  code: z.string().min(8, 'Код должен быть минимум 8 символов'),
});

export type TLoginForm = z.infer<typeof loginFormSchema>;

export type UserRole = 'user' | 'admin';
