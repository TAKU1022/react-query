import { FC, ReactNode } from 'react';
import { Header } from '../Header';

import { Box, Container } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};

export const DefaultLayout: FC<Props> = ({ children }) => {
  return (
    <Box>
      <Header />
      <main>
        <Container paddingY={10}>{children}</Container>
      </main>
    </Box>
  );
};
