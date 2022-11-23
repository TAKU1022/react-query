import { useAuth0 } from '@auth0/auth0-react';
import Link from 'next/link';
import { FC } from 'react';

export const Header: FC = () => {
  const { logout } = useAuth0();

  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  return (
    <header>
      <Link href={'/'}>PRACTICE</Link>
      <button onClick={() => logout({ returnTo: origin })}>sign out</button>
    </header>
  );
};
