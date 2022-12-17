import { z } from 'zod';

export const formSchema = z
  .object({
    title: z
      .string()
      .min(1, { message: 'タイトルを入力してください' })
      .max(50, { message: '50文字以内で入力してください' }),
    description: z
      .string()
      .min(1, { message: '詳細テキストを入力してください' })
      .max(600, { message: '600文字以内で入力してください' }),
    sportList: z.string().array(),
    fruit: z.string().min(1, { message: '果物を選択してください' }),
    email: z
      .string()
      .min(1, { message: 'メールアドレスを入力してください' })
      .email({ message: '有効なメールアドレスを入力してください' }),
    startDate: z.string(),
    endDate: z.string(),
    isDraft: z.boolean(),
  })
  .refine(
    ({ startDate, endDate }) => {
      if (!startDate || !endDate) return true;

      return new Date(startDate) < new Date(endDate);
    },
    {
      path: ['startDate'],
      message: '開始日が終了日を超えています。',
    }
  );

export type FormType = z.infer<typeof formSchema>;
