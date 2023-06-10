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
import { useRef } from 'react';
export function ModalAddUsuario({ onOpen, isOpen, onClose, guardarUsuarios }) {
  const nombreRef = useRef(null);
  const usuarioRef = useRef(null);
  const passwordRef = useRef(null);
  const cargoRef = useRef(null);
  const emailRef = useRef(null);
  const telefonoRef = useRef(null);
  const direccionRef = useRef(null);

  return (
    <>
      <Modal size={'xs'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear Usuario</ModalHeader>
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
                      placeholder="Nombre y apellido"
                    />
                    <FormLabel>Usuario</FormLabel>
                    <Input size={'sm'} ref={usuarioRef} placeholder="usuario" />
                    <FormLabel>Password</FormLabel>
                    <Input
                      size={'sm'}
                      ref={passwordRef}
                      placeholder="Contrasena"
                    />
                    <FormLabel>Cargo</FormLabel>
                    <Select
                      defaultValue={'Vendedor'}
                      ref={cargoRef}
                      size={'sm'}
                    >
                      <option value="Administrador">Administrador</option>
                      <option value="Empleado">Vendedor</option>
                    </Select>
                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input ref={emailRef} size={'sm'} placeholder="Correo" />
                    <FormLabel>Telefono</FormLabel>
                    <Input
                      ref={telefonoRef}
                      size={'sm'}
                      placeholder="Celular"
                    />
                    <FormLabel>Ciudad</FormLabel>
                    <Input
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
              onClick={() => {
                guardarUsuarios({
                  nombres: nombreRef.current.value,
                  usuario: usuarioRef.current.value,
                  password: passwordRef.current.value,
                  cargo: {
                    empleado: cargoRef.current.value=== 'Empleado' ? true : false,
                    administrador: cargoRef.current.value === 'Administrador' ? true : false,
                  },
                  contacto: {
                    email: emailRef.current.value,
                    telefono: telefonoRef.current.value,
                    direccion: direccionRef.current.value,
                  },
                });
                onClose()
              }}
              colorScheme="blue"
              mr={1}
            >
              Guardar
            </Button>
            <Button size={'sm'} onClick={onClose}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
