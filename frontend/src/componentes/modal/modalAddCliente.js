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
import { Ref } from 'react';
export function ModalAdd({ onOpen, isOpen, onClose , guardarCliente}) {
  const nombreRef = Ref(null);
  const apellidoRef = Ref(null);

  const emailRef = Ref(null);
  const telefonoRef = Ref(null);
  const calleRef = Ref(null);
  const ciudadRef = Ref(null);
  const provinciaRef = Ref(null);
  const paisRef = Ref(null);

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
            <Button size={'sm'} colorScheme="blue" mr={1}>
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
