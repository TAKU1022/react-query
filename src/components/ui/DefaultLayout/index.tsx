import { FC, ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

type Props = {
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
