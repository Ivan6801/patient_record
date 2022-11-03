import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18next from './i18n';
import App from './containers/App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
);
