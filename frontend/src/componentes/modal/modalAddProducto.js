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

export function ModalAddProducto({
  onOpen,
  isOpen,
  onClose,
  guardarProducto,
  listaCategorias,
}) {
  const categoriaRef = useRef(null);
  const codigoRef = useRef(null);
  const descripcionRef = useRef(null);
  const precioRef = useRef(null);
  const cantiadadRef = useRef(null);
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
                    <Input
                      size={'sm'}
                      ref={codigoRef}
                      name="categoria"
                      isRequired={true}
                      placeholder="Codigo"
                    />
                    <FormLabel>Descripcion</FormLabel>
                    <Input
                      ref={descripcionRef}
                      size={'sm'}
                      name="descripcion"
                      isRequired
                      placeholder="Descripcion"
                    />
                    <FormLabel>Precio</FormLabel>
                    <Input
                      ref={precioRef}
                      size={'sm'}
                      name="precio"
                      isRequired
                      placeholder="First name"
                    />
                    <FormLabel>Cantidad</FormLabel>
                    <Input
                      ref={cantiadadRef}
                      size={'sm'}
                      name="cantiadad"
                      isRequired
                      placeholder="Existencia"
                    />
                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <FormControl>
                  
                    <Select isRequired placeholder="Selecciona la Categoria" ref={categoriaRef}>
                      {listaCategorias.map((categoria, index) => (
                        <option key={index} value={categoria.descripcion}>
                          {categoria.descripcion}
                        </option>
                      ))}
                    </Select>
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
                guardarProducto({
                  codigo: codigoRef.current.value,
                  descripcion: descripcionRef.current.value,
                  precio: precioRef.current.value,
                  cantidad: cantiadadRef.current.value,
                  categoria: categoriaRef.current.value,
                });
                onClose();
              }}
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
