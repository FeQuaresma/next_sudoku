import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../styles'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
