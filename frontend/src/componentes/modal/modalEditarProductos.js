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
import { React, useContext } from 'react';
import { ContextModal } from '../../context/contextModal';
export function ModalEditarProducto() {
  const { modalEditar } = useContext(ContextModal);
  const {valorModal:producto} = modalEditar;
 
  return (
    <>
      <Modal
        size={'xs'}
        isOpen={modalEditar.isOpenEd}
        onClose={modalEditar.onClosEd}
      >
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
                    <FormLabel>Categoria</FormLabel>
                    <Input size={'sm'} isRequired={true} placeholder="Codigo" defaultValue={producto.categoria} />
                    <FormLabel>Descripcion</FormLabel>
                    <Input size={'sm'} isRequired placeholder="Descripcion" defaultValue={producto.descripcion} />
                    <FormLabel>Precio</FormLabel>
                    <Input size={'sm'} isRequired placeholder="First name" defaultValue={producto.precio} />
                    <FormLabel>Cantidad</FormLabel>
                    <Input size={'sm'} isRequired placeholder="Existencia" defaultValue={producto.cantidad}/>
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
            <Button size={'sm'} colorScheme="blue" onClick={guardarProductoEditado} mr={1}>
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
