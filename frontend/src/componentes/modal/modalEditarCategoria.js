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
export default function ModalEditarCategoria({isOpen, onClose}) {
  const { editarCategoria } = useContext(ContextModal);

  return (
    <>
    {console.log(editarCategoria)}
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size={'sm'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Editar Categoria</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Codigo</FormLabel>
              <Input size={'sm'} />
              <FormLabel>Nombre</FormLabel>
              <Input size={'sm'} />
              <FormLabel>Descripcion</FormLabel>
              <Input size={'sm'} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button size={'sm'} colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button size={'sm'} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
