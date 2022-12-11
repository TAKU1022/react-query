import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .max(50, { message: '50文字以内で入力してください。' })
    .refine((name) => name !== '', { message: '氏名を入力してください。' }),
});
