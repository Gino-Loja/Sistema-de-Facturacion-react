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
import { useRef } from 'react';
export function ModalAdd({ onOpen, isOpen, onClose, guardarCliente }) {
  const nombreRef = useRef(null);
  const apellidoRef = useRef(null);

  const emailRef = useRef(null);
  const telefonoRef = useRef(null);
  const calleRef = useRef(null);
  const ciudadRef = useRef(null);
  const provinciaRef = useRef(null);
  const paisRef = useRef(null);

  return (
    <>
      <Modal size={'xs'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear Cliente</ModalHeader>
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
                      placeholder="First name"
                    />
                    <FormLabel>Apellido</FormLabel>
                    <Input
                      ref={apellidoRef}
                      size={'sm'}
                      placeholder="First name"
                    />
                    <FormLabel>Email</FormLabel>
                    <Input
                      size={'sm'}
                      ref={emailRef}
                      placeholder="First name"
                    />
                    <FormLabel>Telefono</FormLabel>
                    <Input
                      size={'sm'}
                      ref={telefonoRef}
                      placeholder="First name"
                    />
                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <FormControl>
                    <FormLabel>Calle</FormLabel>
                    <Input
                      ref={calleRef}
                      size={'sm'}
                      placeholder="First name"
                    />
                    <FormLabel>Ciudad</FormLabel>
                    <Input
                      size={'sm'}
                      ref={ciudadRef}
                      placeholder="First name"
                    />
                    <FormLabel>Region</FormLabel>
                    <Input
                      size={'sm'}
                      ref={provinciaRef}
                      placeholder="First name"
                    />
                    <FormLabel>Pais</FormLabel>
                    <Input size={'sm'} ref={paisRef} placeholder="First name" />
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
                guardarCliente({
                  nombre: nombreRef.current.value,
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
                onClose();
              }}
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
