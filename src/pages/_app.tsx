import type { AppProps } from 'next/app';
import 'modern-css-reset';
import { Auth0Provider } from '@auth0/auth0-react';

const App = ({ Component, pageProps }: AppProps) => {
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  return (
    <Auth0Provider
      domain="dev-ueok3jq02bkdk8cp.us.auth0.com"
      clientId="JSjy1DkbUhRP4yTHnqAuovUP7jPxr5ba"
      redirectUri={origin}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
};

export default App;
