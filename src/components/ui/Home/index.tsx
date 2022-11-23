import axios from 'axios';
import { FC, useEffect } from 'react';

export const Home: FC = () => {
  useEffect(() => {
    axios
      .get(`${process.env.API_BASE_URL}/articles`)
      .then((response) => console.log(response));
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};
