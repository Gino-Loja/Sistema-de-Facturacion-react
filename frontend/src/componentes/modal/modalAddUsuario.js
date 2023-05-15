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
export function ModalAddUsuario({ onOpen, isOpen, onClose }) {
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
                    <Input size={'sm'} placeholder="Nombre y apellido" />
                    <FormLabel>Usuario</FormLabel>
                    <Input size={'sm'} placeholder="usuario" />
                    <FormLabel>Password</FormLabel>
                    <Input size={'sm'} placeholder="Contrasena" />
                    <FormLabel>Cargo</FormLabel>
                    <Select size={'sm'}>
                      <option value="option1">Administrador</option>
                      <option value="option2">Vendedor</option>

                    </Select>
                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input size={'sm'} placeholder="Correo" />
                    <FormLabel>Telefono</FormLabel>
                    <Input size={'sm'} placeholder="Celular" />
                    <FormLabel>Ciudad</FormLabel>
                    <Input size={'sm'} placeholder="Ciudad" />
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
