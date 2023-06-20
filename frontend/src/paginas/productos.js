import {
  Box,
  Flex,
  Text,
  Button,
  Input,
  useDisclosure,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react';
import ModalEditarCategoria from '../componentes/modal/modalEditarCategoria';
import ModalElimnar from '../componentes/modal/modalEliminar';
import { useContext, useState, useEffect } from 'react';
import { ContextModal } from '../context/contextModal';

import { ModalAddProducto } from '../componentes/modal/modalAddProducto';
import ModalAddCategoria from '../componentes/modal/modalAddCategoria';
import { ModalEditarProducto } from '../componentes/modal/modalEditarProductos';
import { categorias, productos } from '../api/serviceApi';
import { TablaProductos } from '../componentes/tablas/tabla-producto';
import { TablaCategoria } from '../componentes/tablas/tabla-categoria';

export function Productos() {
  const [listaProductos, setListaProductos] = useState([]);
  const [listaCategorias, setListaCategorias] = useState([]);
  const [eliminarId, setEliminarId] = useState('');
  const [tipo, setTipo] = useState(0);

  const obtnerTodosLosProductos = () => {
    productos.get('/').then(respuesta => {
      const { data } = respuesta;
      setListaProductos(data.productos);
    });
  };
  const obtnerTodosLasCategorias = () => {
    categorias.get('/').then(respuesta => {
      const { data } = respuesta;
      setListaCategorias(data.categoria);
    });
  };

  useEffect(() => {
    obtnerTodosLosProductos();
    obtnerTodosLasCategorias();
    console.log(listaProductos.length,"registart cambios aqui")
  }, [listaProductos.length]);

  const guardarProductoEditado = (id, producto) => {
    productos.put(`actualizar?productoId=${id}`, producto).then(respuesta => {
      obtnerTodosLosProductos();
    });
  };

  const guardarCategoriaEditada = (id, categoria) => {
    categorias
      .put(`actualizar?categoriaId=${id}`, categoria)
      .then(respuesta => {
        obtnerTodosLasCategorias();
      });
  };
  const guardarProducto = producto => {
    productos.post(`crear`, producto).then(respuesta => {
      obtnerTodosLosProductos();
    });
  };
  const guardarCategoria = categoria => {
    categorias.post(`crear`, categoria).then(respuesta => {
      obtnerTodosLasCategorias();
    });
  };

  const eliminarProducto = id => {
    productos.delete(`eliminar?productoId=${id}`).then(respuesta => {
      obtnerTodosLosProductos();
    });
  };
  const eliminarCategoria = id => {
    categorias.delete(`eliminar?categoriaId=${id}`).then(respuesta => {
      obtnerTodosLasCategorias();
    });
  };

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

  const handleEditar = producto => {
    modalEditar.onOpenEd();
    modalEditar.setModalValor(producto);
  };
  const handleEditar2 = producto => {
    modalOnpenCategoria();
    editarCategoria.setValorCategoria(producto);
  };
  const handleEliminar = productoId => {
    onOpen();
    console.log(productoId);
    setEliminarId(productoId);
  };

  return (
    <>
      <ModalEditarCategoria
        isOpen={modalisOpenCategoria}
        onClose={modalOncloseCategoria}
        guardarCategoriaEditada={guardarCategoriaEditada}
      ></ModalEditarCategoria>
      <ModalElimnar
        eliminar={() =>
          tipo === 0
            ? eliminarProducto(eliminarId)
            : eliminarCategoria(eliminarId)
        }
      ></ModalElimnar>
      <ModalAddProducto
        onOpen={modalOnOpenUser}
        onClose={modalOnCloseUser}
        isOpen={modalIsOpenUser}
        guardarProducto={guardarProducto}
        listaCategorias={listaCategorias}
      ></ModalAddProducto>
      <ModalEditarProducto
        guardarProductoEditado={guardarProductoEditado}
        listaCategorias={listaCategorias}
      ></ModalEditarProducto>
      <ModalAddCategoria
        guardarCategoria={guardarCategoria}
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
            </Flex>
          </Box>

          <Tabs
            onChange={index => setTipo(index)}
            marginBlock={2}
            size={'xs'}
            isFitted
            variant="enclosed"
          >
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
                  {/* <TableContainer paddingBottom={1}>
                    <Table
                      fontSize={'sm'}
                      variant="simple"
                      colorScheme=""
                      size={'xs'}
                    >
                      <Thead>
                        <Tr>
                          <Th>Categoria</Th>
                          <Th>Descripcion</Th>
                          <Th isNumeric> Precio</Th>
                          <Th isNumeric> Existencias</Th>
                          <Th isNumeric> Accion</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {paginacion(listaProductos, paginaActual, CORTE).map(
                          (ele, id) => {
                            return (
                              <Tr key={id}>
                                <Td>{ele.categoria}</Td>
                                <Td whiteSpace="normal" maxWidth="300px">
                                  {ele.descripcion}
                                </Td>
                                <Td isNumeric>{ele.precio}</Td>
                                <Td isNumeric>{ele.cantidad}</Td>
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
                                      onClick={() => handleEliminar(ele._id)}
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
                  </Box> */}

                  <TablaProductos
                    lista={listaProductos}
                    editar={handleEditar}
                    eliminar={handleEliminar}
                  ></TablaProductos>
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
                  {/* <TableContainer paddingBottom={1}>
                    <Table
                      fontSize={'sm'}
                      variant="simple"
                      colorScheme=""
                      size={'xs'}
                    >
                      <Thead>
                        <Tr>
                          <Th>Codigo</Th>
                          <Th> Descripcion</Th>
                          <Th> Accion </Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {paginacion(
                          listaCategorias,
                          paginaActualCategoria,
                          CORTE_CATEGORIA
                        ).map((ele, id) => {
                          return (
                            <Tr key={id}>
                              <Td>{ele.codigo}</Td>
                              <Td>{ele.descripcion}</Td>
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
                                    onClick={() => handleEliminar(ele._id)}
                                    margin={1}
                                  ></IconButton>
                                </Flex>
                              </Td>
                            </Tr>
                          );
                        })}
                      </Tbody>
                    </Table>
                  </TableContainer> */}
                  <TablaCategoria
                    lista={listaCategorias}
                    editar={handleEditar2}
                    eliminar={handleEliminar}
                  ></TablaCategoria>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
}
