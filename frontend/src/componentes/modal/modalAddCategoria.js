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
export default function ModalAddCategoria({isOpen,onClose }) {
  return (
    <>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size={'sm'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Anadir Categoria</ModalHeader>
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
