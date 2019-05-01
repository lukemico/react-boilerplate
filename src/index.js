import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import App from './App';
import './styles.css';

ReactDOM.render(
  // wrap App component with React.StrictMode to highlight and avoid any deprecated APIs
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
