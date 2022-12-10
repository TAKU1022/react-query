import { FC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Center, Heading } from '@chakra-ui/react';

export const SignIn: FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Heading textAlign={'center'} marginBottom={4}>
        SignIn
      </Heading>
      <Center>
        <Button onClick={() => loginWithRedirect()}>sign in</Button>
      </Center>
    </>
  );
};
