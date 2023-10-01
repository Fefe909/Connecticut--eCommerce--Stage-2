
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

# Old mockapi: 
## https://645ec9f5f9c0732c342fcddc.mockapi.io/Productos