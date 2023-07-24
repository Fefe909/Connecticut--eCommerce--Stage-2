import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from "react-dom/client";
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
let previousTitle = document.title;

window.addEventListener('blur', () => {
  previousTitle = document.title;
  document.title = 'Hey! No te vayas! 😭';
})

window.addEventListener('focus', () => {
  document.title = previousTitle;
})

root.render(
  <React.StrictMode>    
    {/*<RouterProvider router={router} />*/}
    <App />
  </React.StrictMode>
);

