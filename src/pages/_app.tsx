import type { AppProps } from 'next/app';
import 'modern-css-reset';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
