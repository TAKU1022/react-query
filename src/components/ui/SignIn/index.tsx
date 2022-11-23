import { FC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const SignIn: FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={() => loginWithRedirect()}>sign in</button>
    </div>
  );
};
