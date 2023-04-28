import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react';
import React from 'react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

export default function BackdropExample(prop) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isFirstModalOpen , onOpen: onFirstModalOpen, onClose: onFirstModalClose } = useDisclosure()
  
  const OverlayOne = () => {
    
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
                <FormLabel>{prop.prod.codigo}</FormLabel>
                <Input />
                <FormLabel>Descripcion</FormLabel>
                <Input />
                <FormLabel>Precio</FormLabel>
                <Input type="number" />
                <FormLabel>Existencias</FormLabel>
                <Input type="number" />
                <FormLabel>Iva</FormLabel>
                <Input ttype="number" />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Guardar
              </Button>
              <Button onClick={onClose}>Cerrar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  const OverlayTwo = () => {
    return (
      <>
        <Modal isCentered isOpen={isFirstModalOpen} onClose={onFirstModalClose}>
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
                <FormLabel>Codigo</FormLabel>
                <Input />
                <FormLabel>Descripcion</FormLabel>
                <Input />
                
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3}>
                Guardar
              </Button>
              <Button onClick={onFirstModalClose}>Cerrar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

  return (
    <>
      <OverlayOne></OverlayOne>
      <OverlayTwo></OverlayTwo>
      <IconButton
        aria-label="Search database"
        colorScheme="green"
        icon={<EditIcon />}
        onClick={() => {
          onOpen();
          
        }}
      />
      <IconButton
        aria-label="Search database"
        colorScheme="red"
        icon={<DeleteIcon />}
        onClick={() => {
          onFirstModalOpen();
        }}
      ></IconButton>
    </>
  );
}
