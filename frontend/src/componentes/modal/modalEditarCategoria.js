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
import { React, useContext, useRef } from 'react';
import { ContextModal } from '../../context/contextModal';
export default function ModalEditarCategoria({ isOpen, onClose, guardarCategoriaEditada }) {
  const descripcionRef = useRef(null);
  const codigoRef = useRef(null);
  const { editarCategoria } = useContext(ContextModal);
  const { valorCategoria } = editarCategoria;

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size={'sm'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Editar Categoria</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Codigo</FormLabel>
              <Input defaultValue={valorCategoria.codigo} size={'sm'} ref={codigoRef} />
              <FormLabel>Nombre</FormLabel>

              <Input defaultValue={valorCategoria.descripcion} size={'sm'} ref={descripcionRef} />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button size={'sm'} colorScheme="blue" mr={3} onClick={()=>{
              console.log(valorCategoria)
              guardarCategoriaEditada(valorCategoria._id, {
                descripcion: descripcionRef.current.value,
               
                codigo: codigoRef.current.value
              });
              onClose();
            }}>
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
