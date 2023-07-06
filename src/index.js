import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Alta from './pages/Alta';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import App from './components/App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/Alta",
    element: <Alta />,
  },{
    path: "/Contacto",
    element: <Contacto />,
  },{
    path: "/Nosotros",
    element: <Nosotros />,
  },{
    fallbackElement: <Home />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<RouterProvider router={router} />*/}
    <App />
  </React.StrictMode>
);

