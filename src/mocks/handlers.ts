import { rest } from 'msw';

export const handlers = [
  rest.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/articles`,
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            text: 'テキストテキスト',
            width: 100,
            height: 100,
            isOwner: false,
            position: 'top',
            photoUrl: 'https://zod.dev/',
            tookAt: null,
          },
          {
            text: 'テキスト2テキスト2',
            width: 200,
            height: 200,
            isOwner: true,
            position: 'middle',
            photoUrl: null,
            tookAt: null,
          },
        ])
      );
    }
  ),

  rest.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: '田中太郎',
          age: 22,
          id: 1,
          isOwner: false,
          createdAt: new Date(),
        },
        {
          name: '田中太郎2',
          age: 40,
          id: 2,
          isOwner: true,
          createdAt: new Date(),
        },
        {
          name: '田中太郎3',
          age: 32,
          id: 3,
          isOwner: false,
          createdAt: new Date(),
        },
        {
          name: '田中太郎4',
          age: 18,
          id: 4,
          isOwner: false,
          createdAt: new Date(),
        },
        {
          name: '田中太郎5',
          age: 57,
          id: 5,
          isOwner: true,
          createdAt: new Date(),
        },
        {
          name: '田中太郎6',
          age: 28,
          id: 6,
          isOwner: false,
          createdAt: new Date(),
        },
      ])
    );
  }),
];
