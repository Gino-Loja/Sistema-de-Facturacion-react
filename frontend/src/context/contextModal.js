import { useDisclosure } from '@chakra-ui/react';
import { createContext , useState} from 'react';

export const ContextModal = createContext();

export function ContextModalProvider(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ valorModal, setModalValor] = useState({})
  const {
    isOpen: isOpenEd,
    onOpen: onOpenEd,
    onClose: onClosEd,
  } = useDisclosure();

  return (
    <ContextModal.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
        modalEditar: {
          isOpenEd,
          onClosEd,
          onOpenEd,
          valorModal,
          setModalValor
        },
      }}
    >
      {props.children}
    </ContextModal.Provider>
  );
}
