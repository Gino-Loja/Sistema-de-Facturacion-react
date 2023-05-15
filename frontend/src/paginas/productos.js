import {
  Box,
  Flex,
  Text,
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
  Spacer,
  useDisclosure
} from '@chakra-ui/react';
import ModalEditar from '../componentes/modal/modalEditar';
import ModalElimnar from '../componentes/modal/modalEliminar';
import { useContext, useState } from 'react';
import { ContextModal } from '../context/contextModal';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EditIcon,
  DeleteIcon,
} from '@chakra-ui/icons';
import { paginacion } from '../helpers/paginacion';
import { ModalAddProducto } from '../componentes/modal/modalAddProducto';
function ListaProductos() {
  const producto = [
    {
      codigo: '200000000000',
      descripcion: 'nada por ahora',
      precio: '1',
      existencia: '3',
      iva: '0.2',
    },
    {
      codigo: '20',
      descripcion: 'nada por ahora',
      precio: '2222222222',
      existencia: '3',
      iva: '0.2',
    },
    {
      codigo: '20',
      descripcion: 'nada por ahora',
      precio: '233333333333',
      existencia: '3',
      iva: '0.2',
    },{
      codigo: '200000000000',
      descripcion: 'nada por ahora',
      precio: '1',
      existencia: '3',
      iva: '0.2',
    },
    {
      codigo: '20',
      descripcion: 'nada por ahora',
      precio: '2222222222',
      existencia: '3',
      iva: '0.2',
    },
    {
      codigo: '20',
      descripcion: 'nada por ahora',
      precio: '233333333333',
      existencia: '3',
      iva: '0.2',
    },{
      codigo: '200000000000',
      descripcion: 'nada por ahora',
      precio: '1',
      existencia: '3',
      iva: '0.2',
    },
    {
      codigo: '20',
      descripcion: 'nada por ahora',
      precio: '2222222222',
      existencia: '3',
      iva: '0.2',
    },
    {
      codigo: '20',
      descripcion: 'nada por ahora',
      precio: '233333333333',
      existencia: '3',
      iva: '0.2',
    },{
      codigo: '200000000000',
      descripcion: 'nada por ahora',
      precio: '1',
      existencia: '3',
      iva: '0.2',
    },
    {
      codigo: '20',
      descripcion: 'nada por ahora',
      precio: '2222222222',
      existencia: '3',
      iva: '0.2',
    },
    {
      codigo: '20',
      descripcion: 'nada por ahora',
      precio: '233333333333',
      existencia: '3',
      iva: '0.2',
    },
  ];

  return producto;
}
export function Productos() {
  const {
    isOpen: modalIsOpenUser,
    onOpen: modalOnOpenUser,
    onClose: modalOnCloseUser,
  } = useDisclosure();
  const { onOpen, modalEditar } = useContext(ContextModal);
  const CORTE = 8;
  const [paginaActual, setPaginaActual] = useState(0);
  const paginaSiguiente = () => {
    if (paginaActual + CORTE < ListaProductos().length) {
      setPaginaActual(paginaActual + CORTE);
    }
  };
  const paginaAnterior = () => {
    if (paginaActual > 0) {
      setPaginaActual(paginaActual - CORTE);
    }
  };
  const handleEditar = producto => {
    modalEditar.onOpenEd();
    modalEditar.setModalValor(producto);
  };

  return (
    <>
      <ModalEditar></ModalEditar>
      <ModalElimnar></ModalElimnar>
      <ModalAddProducto
       onOpen={modalOnOpenUser}
       onClose={modalOnCloseUser}
       isOpen={modalIsOpenUser}
      ></ModalAddProducto>
      <Box h={'100%'}>
        <Box
          columns={1}
          spacingx="40px"
          spacingy="5px"
          rounded="md"
          p={'7px'}
          h={'8%'}
          boxShadow="outline"
          marginBottom={1}
        >
          <Box>
            <Flex >
              <Text paddingBottom={1} textAlign={'initial'} fontSize="md">
                Registrar Productos
              </Text>
              <Spacer />
              <Button onClick={modalOnOpenUser} size={"sm"}>+ anadir un producto</Button>
            </Flex>
          </Box>
        </Box>

        <Box h={'89%'}>
          <Box
            pt={3}
            h={'10%'}
            rounded="md"
            boxShadow="outline"
            marginBlock={3}
          >
            <Flex justify={'right'} gap={'3'} align={'center'} paddingEnd={1}>
              <Input
                placeholder="Codigo o nombre"
                size={'xs'}
                w={'40%'}
              ></Input>
              <Button size={'xs'}>Buscar</Button>
            </Flex>
          </Box>

          <Box overflowY="auto" h={'90%'} paddingEnd={1}>
            <TableContainer paddingBottom={1}>
              <Table variant="simple" colorScheme="" size={'sm'}>
                <Thead>
                  <Tr>
                    <Th>Codigo</Th>
                    <Th>Descripcion</Th>
                    <Th isNumeric> Precio</Th>
                    <Th isNumeric> Existencias</Th>
                    <Th isNumeric> Precio</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {paginacion(ListaProductos, paginaActual, CORTE).map(
                    (ele, id) => {
                      return (
                        <Tr key={id}>
                          <Td>inches</Td>
                          <Td whiteSpace="normal" maxWidth="300px">
                            ssssssssssssssssss
                          </Td>
                          <Td isNumeric>{ele.codigo}</Td>
                          <Td isNumeric>{ele.iva}</Td>
                          <Td>
                            <Flex gap={3} justify={'right'}>
                              <IconButton
                                aria-label="Search database"
                                colorScheme="green"
                                icon={<EditIcon />}
                                size={'xs'}
                                onClick={() => handleEditar(ele)}
                              />
                              <IconButton
                                aria-label="Search database"
                                size={'xs'}
                                colorScheme="red"
                                icon={<DeleteIcon />}
                                onClick={onOpen}
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
            <Box marginTop={3}>
              <Tooltip label="Atras" placement="left" aria-label="A tooltip">
                <IconButton
                  size={'sm'}
                  icon={<ChevronLeftIcon />}
                  onClick={paginaAnterior}
                  marginRight={1}
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
