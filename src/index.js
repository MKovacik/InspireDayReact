import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from "./components/App/App";
import './index.css';

//Custom libs
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


const rootElement = document.getElementById('root');

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement);

serviceWorker.unregister();
