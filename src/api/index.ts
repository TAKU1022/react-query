import axios from 'axios';
import { ZodError } from 'zod';
import { apiSchema, DummyApiType } from '../config/schema';

export const fetchArticles = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/articles`
    );

    const articles: DummyApiType = apiSchema.parse(data);

    console.log(articles);
  } catch (error) {
    if (error instanceof ZodError) {
      console.log(error);
    }
  }
};
