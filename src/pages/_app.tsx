import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Auth0Provider } from '@auth0/auth0-react';

const App = ({ Component, pageProps }: AppProps) => {
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : '';

  return (
    <>
      <Head>
        <title>Practice</title>
        <meta name="description" content="Practice Dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Auth0Provider
        domain="dev-ueok3jq02bkdk8cp.us.auth0.com"
        clientId="To7hDgfLTJvMjl2tVzgmzcatV2rmdn6S"
        redirectUri={origin}
      >
        <Component {...pageProps} />
      </Auth0Provider>
    </>
  );
};

export default App;
