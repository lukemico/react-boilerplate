import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import App from './App';
import DefaultErrorBoundary from './DefaultErrorBoundary';
import './styles.css';

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  // wrap App component with React.StrictMode to highlight and avoid any deprecated APIs
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
);
