import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../styles/app.scss';

import type {AppProps} from 'next/app'
import {withRedux} from "../utils/hocs";
import store from "../redux/store";

function App({ Component, pageProps }: AppProps) {
    return (
        <Component {...pageProps} />
    )
}
export default withRedux(App, store);
