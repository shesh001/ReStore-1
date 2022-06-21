import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/layout/styles.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (fcor example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more at: https://bit.ly/CRA-vitals
reportWebVitals();
