import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { React, useContext } from 'react';
import { ContextModal } from '../../context/contextModal';
export default function ModelEdit(props) {
  const { modalEditar } = useContext(ContextModal);

  return (
    <>
      <Modal
        isCentered
        isOpen={modalEditar.isOpenEd}
        onClose={modalEditar.onClosEd}
        size={'sm'}
      >
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent>
          <ModalHeader> Editar Productos</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>{modalEditar.valorModal.codigo}</FormLabel>
              <Input size={'sm'} />
              <FormLabel>Descripcion</FormLabel>
              <Input size={'sm'} />
              <FormLabel>Precio</FormLabel>
              <Input size={'sm'} />
              <FormLabel>Existencias</FormLabel>
              <Input size={'sm'} />
              <FormLabel>Iva</FormLabel>
              <Input size={'sm'} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button size={'sm'} colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button size={'sm'} onClick={modalEditar.onClosEd}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
