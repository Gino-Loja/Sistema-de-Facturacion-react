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
} from '@chakra-ui/react';
import { ContextModal } from '../../context/contextModal';
import { React, useContext, useRef } from 'react';
export function ModalEditarCliente({ guardarClienteEditado, cliente }) {
  const nombreRef = useRef(null);
  const apellidoRef = useRef(null);

  const emailRef = useRef(null);
  const telefonoRef = useRef(null);
  const calleRef = useRef(null);
  const ciudadRef = useRef(null);
  const provinciaRef = useRef(null);
  const paisRef = useRef(null);
  console.log(cliente)
  const { modalEditar } = useContext(ContextModal);
  return (
    <>
      <Modal
        size={'xs'}
        isOpen={modalEditar.isOpenEd}
        onClose={modalEditar.onClosEd}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar CLiente</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={2}>
            <Tabs variant="enclosed" size={'sm'}>
              <TabList>
                <Tab>Contacto</Tab>
                <Tab>Direccion</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <FormControl>
                    <FormLabel>Nombres</FormLabel>
                    <Input
                      ref={nombreRef}
                      size={'sm'}
                      defaultValue={cliente.nombre}
                      placeholder="First name"
                    />
                    <FormLabel>Apellido</FormLabel>
                    <Input
                      ref={apellidoRef}
                      size={'sm'}
                      defaultValue={cliente.apellido}
                      placeholder="First name"
                    />
                    <FormLabel>Email</FormLabel>
                    <Input
                      size={'sm'}
                      ref={emailRef}
                      defaultValue={cliente.email}
                      placeholder="First name"
                    />
                    <FormLabel>Telefono</FormLabel>
                    <Input
                      size={'sm'}
                      ref={telefonoRef}
                      defaultValue={cliente.telefono}
                      placeholder="First name"
                    />
                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <FormControl>
                    <FormLabel>Calle</FormLabel>
                    <Input
                      defaultValue={cliente.direccion.calle}
                      ref={calleRef}
                      size={'sm'}
                      placeholder="First name"
                    />
                    <FormLabel>Ciudad</FormLabel>
                    <Input
                      defaultValue={cliente.direccion.ciudad}
                      size={'sm'}
                      ref={ciudadRef}
                      placeholder="First name"
                    />
                    <FormLabel>Region</FormLabel>
                    <Input
                      defaultValue={cliente.direccion.provincia}
                      size={'sm'}
                      ref={provinciaRef}
                      placeholder="First name"
                    />
                    <FormLabel>Pais</FormLabel>
                    <Input
                      defaultValue={cliente.direccion.pais}
                      size={'sm'}
                      ref={paisRef}
                      placeholder="First name"
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
              onClick={() => {
                modalEditar.onClosEd()
                guardarClienteEditado(cliente._id, {
                  nombre: nombreRef.current.value ,
                  apellido: apellidoRef.current.value,
                  email: emailRef.current.value,
                  telefono: telefonoRef.current.value,
                  direccion: {
                    calle: calleRef.current.value,
                    ciudad: ciudadRef.current.value,
                    provincia: provinciaRef.current.value,
                    pais: paisRef.current.value,
                  },
                });
              }}
              mr={1}
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
