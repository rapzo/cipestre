import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';

import type { AppProps } from 'next/app';

import './styles.css';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Welcome to app!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}

export default App;
