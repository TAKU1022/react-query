import type { AppProps } from 'next/app';
import 'modern-css-reset';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
