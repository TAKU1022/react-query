import { z } from 'zod';
import { formSchema } from '../config/formSchema';

export type FormValue = {
  userName: string;
  title: string;
};

export type FormType = z.infer<typeof formSchema>;
