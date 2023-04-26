import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Nav from './componentes/nav';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Productos } from './paginas/productos';
import { Usuarios } from './paginas/usuarios';

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
        path: '/Usuarios',
        element: <Usuarios />,
      },
    ],
  },
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