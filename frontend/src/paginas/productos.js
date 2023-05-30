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
  useDisclosure,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react';
import ModalEditarCategoria from '../componentes/modal/modalEditarCategoria';
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
import ModalAddCategoria from '../componentes/modal/modalAddCategoria';
import { ModalEditarProducto } from '../componentes/modal/modalEditarProductos';

function ListaProductos() {
  const producto = [
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
  ];

  return producto;
}
export function Productos() {
  const {
    isOpen: modalisOpenCategoria,
    onOpen: modalOnpenCategoria,
    onClose: modalOncloseCategoria,
  } = useDisclosure();
  const {
    isOpen: modalIsOpenUser,
    onOpen: modalOnOpenUser,
    onClose: modalOnCloseUser,
  } = useDisclosure();
  const {
    isOpen: isOpenCategoria,
    onOpen: onOpenCategoria,
    onClose: onCloseCategoria,
  } = useDisclosure();
  const { onOpen, modalEditar, editarCategoria } = useContext(ContextModal);
  const CORTE = 10;
  const CORTE_CATEGORIA = 8;
  const [paginaActual, setPaginaActual] = useState(0);
  const [paginaActualCategoria, setPaginaActualCategoria] = useState(0);

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
  const paginaSiguienteCategoria = () => {
    if (paginaActualCategoria + CORTE_CATEGORIA < ListaProductos().length) {
      setPaginaActualCategoria(paginaActualCategoria + CORTE_CATEGORIA);
    }
  };
  const paginaAnteriorCategoria = () => {
    if (paginaActualCategoria > 0) {
      setPaginaActualCategoria(paginaActualCategoria - CORTE_CATEGORIA);
    }
  };
  const handleEditar = producto => {
    modalEditar.onOpenEd();
    modalEditar.setModalValor(producto);
  };
  const handleEditar2 = producto => {
    modalOnpenCategoria()
    editarCategoria.setValorCategoria(producto);
  };

  return (
    <>
      <ModalEditarCategoria
        isOpen={modalisOpenCategoria}
        onClose={modalOncloseCategoria}
      ></ModalEditarCategoria>
      <ModalElimnar></ModalElimnar>
      <ModalAddProducto
        onOpen={modalOnOpenUser}
        onClose={modalOnCloseUser}
        isOpen={modalIsOpenUser}
      ></ModalAddProducto>
      <ModalEditarProducto></ModalEditarProducto>
      <ModalAddCategoria
        isOpen={isOpenCategoria}
        onClose={onCloseCategoria}
      ></ModalAddCategoria>

      <Box h={'100%'}>
        <Box h={'97%'}>
          <Box h={'10%'} rounded="md" display={'flex'} boxShadow="base">
            <Flex
              width={'50%'}
              paddingLeft={2}
              justify={'left'}
              gap={'3'}
              align={'center'}
            >
              <Text paddingBottom={1} textAlign={'initial'} fontSize="md">
                Registrar Productos
              </Text>
              <Button
                size={'sm'}
                fontSize={'xs'}
                whiteSpace={'normal'}
                onClick={modalOnOpenUser}
              >
                Anadir producto
              </Button>
            </Flex>
            <Flex
              justify={'right'}
              width={'50%'}
              gap={'3'}
              align={'center'}
              paddingEnd={1}
            >
              <Input
                placeholder="Codigo o nombre"
                size={'xs'}
                w={'40%'}
              ></Input>
              <Button size={'xs'}>Buscar</Button>
            </Flex>
          </Box>

          <Tabs marginBlock={2} size={'xs'} isFitted variant="enclosed">
            <TabList fontSize={'md'} size={'sm'} mb="3">
              <Tab>Productos</Tab>
              <Tab>Categoria</Tab>
            </TabList>
            <TabPanels>
              <TabPanel padding={'null'}>
                <Box
                  boxShadow="base"
                  padding={2}
                  overflowY="auto"
                  rounded="md"
                  h={'90%'}
                  paddingEnd={1}
                >
                  <TableContainer paddingBottom={1}>
                    <Table
                      fontSize={'sm'}
                      variant="simple"
                      colorScheme=""
                      size={'xs'}
                    >
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
                                      margin={1}
                                    />
                                    <IconButton
                                      aria-label="Search database"
                                      size={'xs'}
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
                  <Box marginTop={3}>
                    <Tooltip
                      label="Atras"
                      placement="left"
                      aria-label="A tooltip"
                    >
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
              </TabPanel>

              <TabPanel padding={'null'}>
                <Box
                  boxShadow="base"
                  padding={2}
                  overflowY="auto"
                  rounded="md"
                  h={'90%'}
                  paddingEnd={1}
                >
                  <Flex
                    marginBottom={3}
                    rounded={'sm'}
                    shadow={'base'}
                    h={'10'}
                    alignItems={'center'}
                    justifyContent={'right'}
                  >
                    <Text marginRight={3} textAlign={'initial'} fontSize="md">
                      Registrar Categoria
                    </Text>
                    <Button
                      size={'sm'}
                      fontSize={'xs'}
                      whiteSpace={'normal'}
                      onClick={onOpenCategoria}
                    >
                      Anadir Categoria
                    </Button>
                  </Flex>
                  <TableContainer paddingBottom={1}>
                    <Table
                      fontSize={'sm'}
                      variant="simple"
                      colorScheme=""
                      size={'xs'}
                    >
                      <Thead>
                        <Tr>
                          <Th>Codigo</Th>
                          <Th>Nombre</Th>
                          <Th> Descripcion</Th>
                          <Th> Accion </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {paginacion(
                          ListaProductos,
                          paginaActualCategoria,
                          CORTE_CATEGORIA
                        ).map((ele, id) => {
                          return (
                            <Tr key={id}>
                              <Td>inches</Td>
                              <Td whiteSpace="normal" maxWidth="300px">
                                ssssssssssssssssss
                              </Td>
                              <Td>{ele.codigo}</Td>

                              <Td>
                                <Flex gap={3} justify={'left'}>
                                  <IconButton
                                    aria-label="Search database"
                                    colorScheme="green"
                                    icon={<EditIcon />}
                                    size={'xs'}
                                    onClick={() => handleEditar2(ele)}
                                    margin={1}
                                  />
                                  <IconButton
                                    aria-label="Search database"
                                    size={'xs'}
                                    colorScheme="red"
                                    icon={<DeleteIcon />}
                                    onClick={onOpen}
                                    margin={1}
                                  ></IconButton>
                                </Flex>
                              </Td>
                            </Tr>
                          );
                        })}
                      </Tbody>
                    </Table>
                  </TableContainer>

                  <Box marginTop={3}>
                    <Tooltip
                      label="Atras"
                      placement="left"
                      aria-label="A tooltip"
                    >
                      <IconButton
                        size={'sm'}
                        icon={<ChevronLeftIcon />}
                        onClick={paginaAnteriorCategoria}
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
                        onClick={paginaSiguienteCategoria}
                      ></IconButton>
                    </Tooltip>
                  </Box>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
}
