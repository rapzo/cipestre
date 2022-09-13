import Head from 'next/head';
import { SessionProvider } from "next-auth/react"

import type { AppProps } from 'next/app';

import './styles.css';

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to admin!</title>
      </Head>
      <main className="app">
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </main>
    </>
  );
}

export default App;
