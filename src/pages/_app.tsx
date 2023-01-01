import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles/app.scss';

import type {AppProps} from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


// export function reportWebVitals(metric: NextWebVitalsMetric) {
//     console.log(metric)
// }
