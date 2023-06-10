import {
  Box,
  Flex,
  Button,
  Input,
  Table,
  TableContainer,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
  IconButton,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';

import ModalElimnar from '../componentes/modal/modalEliminar';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EditIcon,
  DeleteIcon,
} from '@chakra-ui/icons';
import { useContext, useState, useEffect } from 'react';
import { ContextModal } from '../context/contextModal';
import { ModalAdd } from '../componentes/modal/modalAddCliente';
import { ModalEditarCliente } from '../componentes/modal/modalEditarCliente';
import { paginacion } from '../helpers/paginacion';
import { clientes } from '../api/serviceApi';
//import { paginacion } from '../helpers/paginacion';

export function Clientes() {
  const [listaClientes, setListaClientes] = useState([]);
  const [editarCliente, setEditarCliente] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: {
      calle: '',
      ciudad: '',
      provincia: '',
      pais: '',
    },
  });
  const [eliminarId, setEliminarId] = useState('');
  const { onOpen, modalEditar } = useContext(ContextModal);
  const [paginaActual, setPaginaActual] = useState(0);
  const CORTE = 9;
  const {
    isOpen: modalIsOpen,
    onOpen: modalOnOpen,
    onClose: modalOnClose,
  } = useDisclosure();

  const paginaSiguiente = () => {
    if (paginaActual + CORTE < listaClientes.length) {
      setPaginaActual(paginaActual + CORTE);
    }
  };
  const paginaAnterior = () => {
    if (paginaActual > 0) {
      setPaginaActual(paginaActual - CORTE);
    }
  };

  const obtnerTodosLosClientes = () => {
    clientes.get('/').then(respuesta => {
      const { data } = respuesta;

      setListaClientes(data.clientes);
    });
  };
  const guardarUnClienteEditado = (id, usuario) => {
    clientes.put(`actualizar?clienteId=${id}`, usuario).then(respuesta => {
      obtnerTodosLosClientes();
    });
  };
  const guardarCliente = usuario => {
    clientes.post(`crear`, usuario).then(respuesta => {
      obtnerTodosLosClientes();
    });
  };

  const eliminarCliente = id => {
    clientes.delete(`eliminar?clienteId=${id}`).then(respuesta => {
      obtnerTodosLosClientes();
    });
  };

  useEffect(() => {
    obtnerTodosLosClientes();
  }, []);
  return (
    <>
      <ModalEditarCliente
        guardarClienteEditado={guardarUnClienteEditado}
        cliente={editarCliente}
      ></ModalEditarCliente>
      <ModalElimnar eliminar={() => eliminarCliente(eliminarId)}></ModalElimnar>
      <ModalAdd
        guardarCliente={guardarCliente}
        onOpen={modalOnOpen}
        onClose={modalOnClose}
        isOpen={modalIsOpen}
      >
        s
      </ModalAdd>
      <Box h={'95%'}>
        <Box h={'100%'}>
          <Box
            h={'10%'}
            rounded="md"
            boxShadow="base"
            display={'flex'}
            justify-content={'center'}
            alignItems={'center'}
          >
            <Flex>
              <Button
                size={'xs'}
                marginLeft={4}
                justifyContent={'left'}
                onClick={modalOnOpen}
              >
                nuevo cliente
              </Button>
            </Flex>

            <Flex
              justify={'right'}
              gap={'3'}
              align={'center'}
              paddingEnd={2}
              w={'100%'}
            >
              <Input size={'xs'} w={'40%'}></Input>
              <Button size={'xs'}>Buscar</Button>
            </Flex>
          </Box>

          <Box
            overflowY="auto"
            h={'90%'}
            paddingEnd={1}
            boxShadow="base"
            rounded={'md'}
            marginBlock={3}
            padding={2}
          >
            <TableContainer paddingBottom={2}>
              <Table
                fontSize={'sm'}
                variant="simple"
                colorScheme=""
                size={'xs'}
              >
                <Thead>
                  <Tr>
                    <Th>Nombres</Th>
                    <Th> Email</Th>
                    <Th> Telefono</Th>
                    <Th> Ciudad</Th>
                    <Th isNumeric> Accion</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {paginacion(listaClientes, paginaActual, CORTE).map(
                    (cliente, id) => {
                      return (
                        <Tr key={id}>
                          <Td>{cliente.nombre + ' ' + cliente.apellido}</Td>
                          <Td whiteSpace="normal" maxWidth="300px">
                            {cliente.email}
                          </Td>
                          <Td>{cliente.telefono}</Td>
                          <Td>{cliente.direccion.ciudad}</Td>
                          
                          <Td isNumeric>
                            <Flex gap={3} justify={'right'}>
                              <IconButton
                                size={'xs'}
                                aria-label="Search database"
                                colorScheme="green"
                                icon={<EditIcon />}
                                onClick={() => {
                                  modalEditar.onOpenEd();
                                  setEditarCliente(cliente);
                                }}
                                margin={1}
                              />
                              <IconButton
                                size={'xs'}
                                aria-label="Search database"
                                colorScheme="red"
                                icon={<DeleteIcon />}
                                onClick={() => {
                                  onOpen();
                                  setEliminarId(cliente._id);
                                }}
                                margin={1}
                              ></IconButton>
                            </Flex>
                          </Td>
                        </Tr>
                      );
                    }
                  )}
                </Tbody>
              </Table>
            </TableContainer>

            <Box>
              <Tooltip label="Atras" placement="left" aria-label="A tooltip">
                <IconButton
                  size={'sm'}
                  icon={<ChevronLeftIcon />}
                  onClick={paginaAnterior}
                  marginRight={3}
                ></IconButton>
              </Tooltip>
              <Tooltip
                label="Siguiente"
                placement="right"
                aria-label="A tooltip"
              >
                <IconButton
                  size={'sm'}
                  icon={<ChevronRightIcon />}
                  onClick={paginaSiguiente}
                ></IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
