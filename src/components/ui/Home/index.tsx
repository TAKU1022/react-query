import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const Home: FC = () => {
  const { data, isLoading } = useQuery(['articles'], () =>
    axios
      .get(`${process.env.API_BASE_URL}/articles`)
      .then((response) => response.data)
  );

  return (
    <div>
      <h1>Home</h1>
      {!isLoading &&
        data.map((article: any) => <p key={article.title}>{article.title}</p>)}
    </div>
  );
};
