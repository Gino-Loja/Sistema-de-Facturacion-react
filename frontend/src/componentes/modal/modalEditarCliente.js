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
import { React, useContext } from 'react';
export  function ModalEditarCliente(props) {
  const { modalEditar } = useContext(ContextModal);
  return (
    <>
      <Modal size={'xs'} isOpen={modalEditar.isOpenEd} onClose={modalEditar.onClosEd}>
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
                    <Input size={'sm'} placeholder="First name" />
                    <FormLabel>Apellido</FormLabel>
                    <Input size={'sm'} placeholder="First name" />
                    <FormLabel>Email</FormLabel>
                    <Input size={'sm'} placeholder="First name" />
                    <FormLabel>Telefono</FormLabel>
                    <Input size={'sm'} placeholder="First name" />
                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <FormControl>
                    <FormLabel>Calle</FormLabel>
                    <Input size={'sm'} placeholder="First name" />
                    <FormLabel>Ciudad</FormLabel>
                    <Input size={'sm'} placeholder="First name" />
                    <FormLabel>Region</FormLabel>
                    <Input size={'sm'} placeholder="First name" />
                    <FormLabel>Pais</FormLabel>
                    <Input size={'sm'} placeholder="First name" />
                  </FormControl>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>

          <ModalFooter>
            <Button size={'sm'} colorScheme="blue" mr={1}>
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