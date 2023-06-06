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
import { React, useContext, useRef } from 'react';
import { ContextModal } from '../../context/contextModal';
export function ModalEditarProducto({
  guardarProductoEditado,
  listaCategorias,
}) {
  const { modalEditar } = useContext(ContextModal);
  const { valorModal: producto } = modalEditar;
  const categoriaRef = useRef(null);
  const codigoRef = useRef(null);
  const descripcionRef = useRef(null);
  const precioRef = useRef(null);
  const cantiadadRef = useRef(null);

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
                    <FormLabel>Codigo</FormLabel>
                    <Input
                      size={'sm'}
                      ref={codigoRef}
                      name="categoria"
                      isRequired={true}
                      placeholder="Codigo"
                      defaultValue={producto.codigo}
                    />
                    <FormLabel>Descripcion</FormLabel>
                    <Input
                      ref={descripcionRef}
                      size={'sm'}
                      name="descripcion"
                      isRequired
                      placeholder="Descripcion"
                      defaultValue={producto.descripcion}
                    />
                    <FormLabel>Precio</FormLabel>
                    <Input
                      ref={precioRef}
                      size={'sm'}
                      name="precio"
                      isRequired
                      placeholder="First name"
                      defaultValue={producto.precio}
                    />
                    <FormLabel>Cantidad</FormLabel>
                    <Input
                      ref={cantiadadRef}
                      size={'sm'}
                      name="cantiadad"
                      isRequired
                      placeholder="Existencia"
                      defaultValue={producto.cantidad}
                    />
                  </FormControl>
                </TabPanel>
                <TabPanel>
                  <FormControl>
                    <Select placeholder="Selecciona la Categoria" defaultValue={producto.categoria} ref={categoriaRef}>
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
              onClick={() => {
                guardarProductoEditado(producto._id, {
                  codigo: codigoRef.current.value,
                  descripcion: descripcionRef.current.value,
                  precio: precioRef.current.value,
                  cantidad: cantiadadRef.current.value,
                  categoria: categoriaRef.current.value,
                });
                modalEditar.onClosEd();
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
