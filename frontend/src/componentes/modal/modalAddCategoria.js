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
import { useRef } from 'react';
export default function ModalAddCategoria({
  isOpen,
  onClose,
  guardarCategoria,
}) {
  const descripcionRef = useRef(null);
  const codigoRef = useRef(null);
  const nombreRef = useRef(null);
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size={'sm'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Anadir Categoria</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Codigo</FormLabel>
              <Input size={'sm'} ref={codigoRef} />
              <FormLabel>Nombre</FormLabel>
              <Input size={'sm'} ref={nombreRef} />
              <FormLabel>Descripcion</FormLabel>
              <Input size={'sm'} ref={descripcionRef} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              size={'sm'}
              colorScheme="blue"
              mr={3}
              onClick={() => {
                guardarCategoria({
                  descripcion: descripcionRef.current.value,
                  nombre: nombreRef.current.value,
                  codigo: codigoRef.current.value,
                });
                onClose();
              }}
            >
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
