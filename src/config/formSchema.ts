import { z } from 'zod';

export const formSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'タイトルを入力してください。' })
    .max(50, { message: '50文字以内で入力してください。' }),
  description: z
    .string()
    .min(1, { message: '詳細テキストを入力してください。' })
    .max(600, { message: '600文字以内で入力してください。' }),
});

export type FormType = z.infer<typeof formSchema>;
