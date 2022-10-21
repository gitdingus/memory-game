import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const rootDiv = document.querySelector('#root');
const root = ReactDOM.createRoot(rootDiv);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
