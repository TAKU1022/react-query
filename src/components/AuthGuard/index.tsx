import { FC, ReactNode, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/router';

type Props = {
  children: ReactNode;
};

export const AuthGuard: FC<Props> = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push('/sign_in');
    }
  }, [router, isAuthenticated, isLoading]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};
