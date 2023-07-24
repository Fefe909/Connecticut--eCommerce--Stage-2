
const routes = [
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
];

const router = createBrowserRouter({ routes });
