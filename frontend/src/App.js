import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Nav from './componentes/nav';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Productos } from './paginas/productos';
import { Usuarios } from './paginas/usuarios';
import { Clientes } from './paginas/clientes';
import NuevaFactura from './paginas/nueva-factura'
import { Dashboard } from './paginas/dashboard';
import {Prueba} from './paginas/prueba'
import Login from './paginas/login';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        path: '/productos',
        element: <Productos />,
      },
      {
        path: '/Clientes',
        element: <Clientes />,
      },
      {
        path: '/Usuarios',
        element: <Usuarios />,
      },
      {
        path: '/NuevaFactura',
        element: <NuevaFactura />,
      },
      {
        path: '/Dashboard',
        element: <Dashboard/>
      },
      {
        path: '/tabla',
        element: <Prueba></Prueba>
      }
    ],
  },
  {
    path:'/login',
    element:<Login></Login>
  }
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <RouterProvider router={router} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
