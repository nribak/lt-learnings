import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles/app.scss';

import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import store from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}
