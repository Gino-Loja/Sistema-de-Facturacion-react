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

} from '@chakra-ui/react';
import { React, useContext } from 'react';
import { ContextModal } from '../../context/contextModal.js';
export default function ModelEliminar(prop) {
  const { isOpen, onClose } = useContext(ContextModal);
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
           bg="blackAlpha.300"
           backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader> Editar Productos</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Esta seguro de eliminar este elemento?</FormLabel>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button size={"sm"} colorScheme="blue" mr={3}>
              Aceptar
            </Button>
            <Button size={"sm"} onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
