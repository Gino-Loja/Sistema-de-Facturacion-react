import {
  Box,
  Flex,
  Button,
  Input,

  useDisclosure,
} from '@chakra-ui/react';


import { useContext, useEffect, useState } from 'react';
import { ContextModal } from '../context/contextModal';

import { ModalAddUsuario } from '../componentes/modal/modalAddUsuario';
import { ModalEditarUsuario } from '../componentes/modal/modalEditarUsuario';
import { usuarios } from '../api/serviceApi';
import ModalElimnar from '../componentes/modal/modalEliminar';
import { TablaUsuarios } from '../componentes/tablas/tabla-usuarios';

export function Usuarios() {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [editarUsuario, setEditarUsuario] = useState({
    nombres: '',
    usuario: '',
    password: '',
    cargo: {
      empleado: false,
      administrador: false,
    },
    contacto: {
      email: '',
      telefono: '',
      direccion: '',
    },
  });
  const [eliminarId, setEliminarId] = useState('');

  const obtnerTodosLosUsuarios = () => {
    usuarios.get('/').then(respuesta => {
      const { data } = respuesta;
      console.log(data.usuarios);
      setListaUsuarios(data.usuarios);
    });
  };
  useEffect(() => {
    obtnerTodosLosUsuarios();
  }, []);

  const { onOpen, modalEditar } = useContext(ContextModal);

  const {
    isOpen: modalIsOpen,
    onOpen: modalOnOpen,
    onClose: modalOnClose,
  } = useDisclosure();


  const guardarUsuarioEditado = (id, usuario) => {
    usuarios.put(`actualizar?usuarioId=${id}`, usuario).then(respuesta => {
      obtnerTodosLosUsuarios();
    });
  };
  const guardarUsuario = usuario => {
    usuarios.post(`crear`, usuario).then(respuesta => {
      obtnerTodosLosUsuarios();
    });
  };

  const eliminarUsuario = id => {
    usuarios.delete(`eliminar?usuarioId=${id}`).then(respuesta => {
      obtnerTodosLosUsuarios();
    });
  };

  return (
    <>
      <ModalEditarUsuario
        guardarUsuarioEditado={guardarUsuarioEditado}
        usuario={editarUsuario}
      ></ModalEditarUsuario>
      <ModalAddUsuario
        onOpen={modalOnOpen}
        onClose={modalOnClose}
        isOpen={modalIsOpen}
        guardarUsuarios={guardarUsuario}
      ></ModalAddUsuario>
      <ModalElimnar eliminar={() => eliminarUsuario(eliminarId)}></ModalElimnar>
      <Box h={'95%'}>
        <Box h={'100%'}>
          <Box
            boxShadow="base"
            alignItems={'center'}
            h={'10%'}
            rounded="md"
            display={'flex'}
            justifyItems={'center'}
            alignContent={'center'}
          >
            <Flex>
              <Button
                size={'xs'}
                paddingInlineEnd={3}
                marginLeft={4}
                justifyContent={'center'}
                onClick={modalOnOpen}
              >
                Nuevo Usuario
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
            boxShadow="base"
            padding={2}
            h={'90%'}
            rounded="md"
            paddingEnd={1}
            marginBlock={3}
          >
            {/* <TableContainer paddingBottom={2}>
              <Table
                fontSize={'sm'}
                variant="simple"
                colorScheme=""
                size={'xs'}
              >
                <Thead>
                  <Tr>
                    <Th>Nombres</Th>
                    <Th> Usuario</Th>
                    <Th> Password</Th>
                    <Th> Email</Th>
                    <Th> Cargo</Th>
                    <Th> Accion</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {paginacion(listaUsuarios, paginaActual, CORTE).map(
                    (usuario, id) => {
                      return (
                        <Tr key={id}>
                          <Td>{usuario.nombres}</Td>
                          <Td whiteSpace="normal" maxWidth="300px">
                            {usuario.usuario}
                          </Td>
                          <Td>{usuario.password}</Td>
                          <Td>{usuario.contacto.email}</Td>
                          <Td>
                            {usuario.cargo.administrador
                              ? 'administrador'
                              : 'Empleado'}
                          </Td>
                          <Td>
                            <Flex gap={3} >
                              <IconButton
                                size={'xs'}
                                aria-label="Search database"
                                colorScheme="green"
                                icon={<EditIcon />}
                                onClick={() => handleEditar(usuario)}
                                margin={1}
                              />
                              <IconButton
                                size={'xs'}
                                aria-label="Search database"
                                colorScheme="red"
                                icon={<DeleteIcon />}
                                onClick={() => {
                                  onOpen();
                                  setEliminarId(usuario._id);
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
            </TableContainer> */}
            <TablaUsuarios
              lista={listaUsuarios}
              eliminar={
                (id) => {
                  onOpen();
                  setEliminarId(id);
                }
              }
              editar={
                
                usuario => {
                  modalEditar.onOpenEd();
                  setEditarUsuario(usuario);}
              }
            ></TablaUsuarios>

 
          </Box>
        </Box>
      </Box>
    </>
  );
}
