import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles/app.css';

import type { AppProps } from 'next/app'

import { Rubik } from '@next/font/google'

const font = Rubik({
  subsets: ['latin'],
  weight: ['400', '300', '700']
});

export default function App({ Component, pageProps }: AppProps) {

  return (
      <main className={font.className}>
        <Component {...pageProps} />
      </main>
  )
}
