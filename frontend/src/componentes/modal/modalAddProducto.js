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
  Select
} from '@chakra-ui/react';

export function ModalAddProducto({ onOpen, isOpen, onClose }) {
  return (
    <>
      <Modal size={'xs'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ingresa un Producto</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={2}>
            <Tabs variant="enclosed" size={'sm'}>
              <TabList>
                <Tab>Producto</Tab>
                <Tab>Categoria</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <FormControl>
                    <FormLabel>Codigo</FormLabel>
                    <Input size={'sm'} placeholder="Codigo" />
                    <FormLabel>Descripcion</FormLabel>
                    <Input size={'sm'} placeholder="Descripcion" />
                    <FormLabel>Precio</FormLabel>
                    <Input size={'sm'} placeholder="First name" />
                    <FormLabel>Cantidad</FormLabel>
                    <Input size={'sm'} placeholder="Existencia" />
                    
                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <FormControl>
                    <Select placeholder="Selecciona la Categoria">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
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
