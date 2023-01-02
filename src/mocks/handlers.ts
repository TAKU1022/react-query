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
            photoUrl: null,
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
];
