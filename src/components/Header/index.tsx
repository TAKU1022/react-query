import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

export const Header: FC = () => {
  const { isAuthenticated, logout } = useAuth0();

  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  return (
    <Box
      as={'header'}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      paddingX={4}
      paddingY={2}
    >
      <div />
      {/* <NextLink href={'/'}>
        <Text fontSize={24} fontWeight={'bold'}>
          PRACTICE
        </Text>
      </NextLink> */}
      {isAuthenticated && (
        <Button
          type={'button'}
          colorScheme={'teal'}
          variant={'outline'}
          onClick={() => logout({ returnTo: origin })}
        >
          sign out
        </Button>
      )}
    </Box>
  );
};
