import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './components/styles/app.css';

// import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./components/App";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);

