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
import { useContext, useState } from 'react';
import { ContextModal } from '../context/contextModal';
import { ModalAdd } from '../componentes/modal/modalAddCliente';
import { ModalEditarCliente } from '../componentes/modal/modalEditarCliente';
import { paginacion } from '../helpers/paginacion';
//import { paginacion } from '../helpers/paginacion';

function ListaUsuarios() {
  const producto = [
    {
      id: '1',
      nombres: 'nada por ahora',
      apellido: '2444',
      email: '3',
      telefono: '0.2',
    },
  ];

  return producto;
}
export function Clientes() {
  const { onOpen, modalEditar } = useContext(ContextModal);
  const [paginaActual, setPaginaActual] = useState(0);
  const CORTE = 9;
  const {
    isOpen: modalIsOpen,
    onOpen: modalOnOpen,
    onClose: modalOnClose,
  } = useDisclosure();

  const handleEditar = producto => {
    modalEditar.onOpenEd();
    modalEditar.setModalValor(producto);
  };

  const paginaSiguiente = () => {
    if (paginaActual + CORTE < ListaUsuarios().length) {
      setPaginaActual(paginaActual + CORTE);
    }
  };
  const paginaAnterior = () => {
    if (paginaActual > 0) {
      setPaginaActual(paginaActual - CORTE);
    }
  };

  return (
    <>
      <ModalEditarCliente></ModalEditarCliente>
      <ModalElimnar></ModalElimnar>
      <ModalAdd
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
                    <Th>Id</Th>
                    <Th>Nombres</Th>
                    <Th> Apellido</Th>
                    <Th> Email</Th>
                    <Th> Telefono</Th>
                    <Th> Ciudad</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {paginacion(ListaUsuarios, paginaActual, CORTE).map(
                    (ele, id) => {
                      return (
                        <Tr key={id}>
                          <Td>{id}</Td>
                          <Td whiteSpace="normal" maxWidth="300px">
                            ssssssssssssssssss
                          </Td>
                          <Td>{ele.codigo}</Td>
                          <Td>{ele.iva}</Td>
                          <Td>{ele.iva}</Td>
                          <Td>
                            <Flex gap={3} justify={'right'}>
                              <IconButton
                                size={'xs'}
                                aria-label="Search database"
                                colorScheme="green"
                                icon={<EditIcon />}
                                onClick={() => handleEditar(ele)}
                                margin={1}
                              />
                              <IconButton
                                size={'xs'}
                                aria-label="Search database"
                                colorScheme="red"
                                icon={<DeleteIcon />}
                                onClick={onOpen}
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
