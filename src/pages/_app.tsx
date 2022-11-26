import type { AppProps } from 'next/app';
import { FC } from 'react';
import Head from 'next/head';
import { Auth0Provider } from '@auth0/auth0-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: FC<AppProps> = ({ Component, pageProps }) => {
  if (process.env.NODE_ENV === 'development') {
    const MockServer = () => import('../mocks');
    MockServer();
  }

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
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </Auth0Provider>
    </>
  );
};

export default App;
