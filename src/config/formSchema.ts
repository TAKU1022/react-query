import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: '氏名を入力してください。' })
    .max(50, { message: '50文字以内で入力してください。' }),
  age: z
    .string()
    .min(1, { message: '年齢を入力してくだい。' })
    .refine((age) => parseInt(age) >= 18 && parseInt(age) <= 60, {
      message: '18歳以上60歳未満で入力してください。',
    })
    .transform((age) => parseInt(age)),
});
