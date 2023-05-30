import { useDisclosure } from '@chakra-ui/react';
import { createContext , useState} from 'react';

export const ContextModal = createContext();

export function ContextModalProvider(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ valorModal, setModalValor] = useState({})
  const [ valorCategoria, setValorCategoria] = useState({})

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
        editarCategoria: {
          valorCategoria,
          setValorCategoria
        }
      }}
    >
      {props.children}
    </ContextModal.Provider>
  );
}
