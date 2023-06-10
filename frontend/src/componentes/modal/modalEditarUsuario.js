import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormLabel,
  Input,
  FormControl,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Select,
} from '@chakra-ui/react';
import { ContextModal } from '../../context/contextModal';
import { React, useContext, useRef } from 'react';

export function ModalEditarUsuario({ guardarUsuarioEditado, usuario }) {
  const { modalEditar } = useContext(ContextModal);
  const nombreRef = useRef(null);
  const usuarioRef = useRef(null);
  const passwordRef = useRef(null);
  const cargoRef = useRef(null);
  const emailRef = useRef(null);
  const telefonoRef = useRef(null);
  const direccionRef = useRef(null);

  return (
    <>
      <Modal
        size={'xs'}
        isOpen={modalEditar.isOpenEd}
        onClose={modalEditar.onClosEd}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar Usuario</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={2}>
            <Tabs variant="enclosed" size={'sm'}>
              <TabList>
                <Tab>Usuario</Tab>
                <Tab>Contacto</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <FormControl>
                    <FormLabel>Nombres</FormLabel>
                    <Input
                      size={'sm'}
                      ref={nombreRef}
                      defaultValue={usuario.nombres}
                      placeholder="Nombre y apellido"
                    />
                    <FormLabel>Usuario</FormLabel>
                    <Input
                      defaultValue={usuario.usuario}
                      size={'sm'}
                      ref={usuarioRef}
                      placeholder="usuario"
                    />
                    <FormLabel>Password</FormLabel>
                    <Input
                      size={'sm'}
                      defaultValue={usuario.password}
                      ref={passwordRef}
                      placeholder="Contrasena"
                    />
                    <FormLabel>Cargo</FormLabel>
                    <Select
                      defaultValue={
                        usuario.cargo.administrador === true
                          ? 'Administrador'
                          : 'Empleado'
                      }
                      ref={cargoRef}
                      size={'sm'}
                    >
                      <option value="Administrador">Administrador</option>
                      <option value="Empleado">Empleado</option>
                    </Select>
                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      defaultValue={usuario.contacto.email}
                      ref={emailRef}
                      size={'sm'}
                      placeholder="Correo"
                    />
                    <FormLabel>Telefono</FormLabel>
                    <Input
                      defaultValue={usuario.contacto.telefono}
                      ref={telefonoRef}
                      size={'sm'}
                      placeholder="Celular"
                    />
                    <FormLabel>Direccion</FormLabel>
                    <Input
                      defaultValue={usuario.contacto.direccion}
                      ref={direccionRef}
                      size={'sm'}
                      placeholder="Direccion"
                    />
                  </FormControl>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          <ModalFooter>
            <Button
              size={'sm'}
              colorScheme="blue"
              mr={1}
              onClick={() => {
                guardarUsuarioEditado(usuario._id,{
                  nombres: nombreRef.current.value,
                  usuarios: usuarioRef.current.value,
                  password: passwordRef.current.value,
                  cargo: {
                    empleado:
                      cargoRef.current.value === 'Empleado' ? true : false,
                    administrador:
                      cargoRef.current.value === 'Administrador' ? true : false,
                  },
                  contacto: {
                    email: emailRef.current.value,
                    telefono: telefonoRef.current.value,
                    direccion: direccionRef.current.value,
                  },
                });
                modalEditar.onClosEd();
              }}
            >
              Guardar
            </Button>
            <Button size={'sm'} onClick={modalEditar.onClosEd}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
