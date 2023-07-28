import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

let previousTitle = document.title;
window.addEventListener('blur', () => {
  previousTitle = document.title;
  document.title = 'Hey! No te vayas! 😭';
})
window.addEventListener('focus', () => {
  document.title = previousTitle;
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);