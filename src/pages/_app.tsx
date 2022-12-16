import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultWrapper } from '@layout/Default';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <DefaultWrapper>
        <Component {...pageProps} />
      </DefaultWrapper>
  );
}
