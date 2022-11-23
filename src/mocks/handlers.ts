import { rest } from 'msw';

export const handlers = [
  rest.get(`${process.env.API_BASE_URL}/articles`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          title: 'タイトルタイトル',
          description: '説明説明説明説明説明説明説明説明説明説明',
          createdAt: new Date().toISOString(),
        },
        {
          title: 'タイトル2タイトル2',
          description: '説明2説明2説明2説明2説明2説明2説明2説明2説明2説明2',
          createdAt: new Date().toISOString(),
        },
      ])
    );
  }),
];
