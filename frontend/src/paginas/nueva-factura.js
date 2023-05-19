import {
  Box,
  Flex,
  Button,
  Input,
  Table,
  TableContainer,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
  IconButton,
  Tooltip,
  Spacer,
  useDisclosure,

} from '@chakra-ui/react';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EditIcon,
  DeleteIcon,
} from '@chakra-ui/icons';
import { useContext, useState } from 'react';
import { ContextModal } from '../context/contextModal';
import { paginacion } from '../helpers/paginacion';
import { ModalAddUsuario } from '../componentes/modal/modalAddUsuario';
import { ModalEditarUsuario } from '../componentes/modal/modalEditarUsuario';
import ModalElimnar from '../componentes/modal/modalEliminar';

function ListaUsuarios() {
  const producto = [
    {
      id: '1',
      nombres: 'nada por ahora',
      apellido: '2444',
      usuario: 'gino',
      cargo: 'vendedor',
      estado: 'Activo',
      email: '3',
      telefono: '0.2',
      password: '1234',
    },
  ];

  return producto;
}
export default function NuevaFactura() {
  const { onOpen, modalEditar } = useContext(ContextModal);
  const [paginaActual, setPaginaActual] = useState(0);
  const CORTE = 9;
  const {
    isOpen: modalIsOpen,
    onOpen: modalOnOpen,
    onClose: modalOnClose,
  } = useDisclosure();

  const handleEditar = producto => {
    modalEditar.onOpenEd();
    modalEditar.setModalValor(producto);
  };

  const paginaSiguiente = () => {
    if (paginaActual + CORTE < ListaUsuarios().length) {
      setPaginaActual(paginaActual + CORTE);
    }
  };
  const paginaAnterior = () => {
    if (paginaActual > 0) {
      setPaginaActual(paginaActual - CORTE);
    }
  };

  return (
    <>
      <ModalEditarUsuario></ModalEditarUsuario>
      <ModalAddUsuario
        onOpen={modalOnOpen}
        onClose={modalOnClose}
        isOpen={modalIsOpen}
      ></ModalAddUsuario>
      <ModalElimnar></ModalElimnar>

      <Box h={'95%'}>
        <Box
          pt={3}
          h={'10%'}
          rounded="md"
          boxShadow="base"
          padding={2}
          display={'flex'}
          alignItems={'center'}
          justifyItems={'center'}
        >
          <text fontSize={["1px", "24px", "32px"]}> Detalles de la factura</text>
          <Spacer />
          <Button
            size={'sm'}
            marginLeft={4}
            justifyContent={'center'}
            onClick={modalOnOpen}
          >
            Imprimir y Guardar
          </Button>
        </Box>
        <Box
          pt={3}
          h={'10%'}
          rounded="md"
          boxShadow="base"
          marginBlock={3}
          display={'flex'}
        >
          <Flex
            justify={'right'}
            gap={'3'}
            align={'center'}
            paddingEnd={2}
            w={'100%'}
          >
            <Input size={'xs'} w={'20%'}></Input>
            <Input
              placeholder="Selecciona la fecha"
              size="xs"
              type="datetime-local"
              defaultValue={new Date().toISOString().substr(0, 16)}
              min={new Date().toISOString().substr(0, 16)}
              max={new Date().toISOString().substr(0, 16)}
              isDisabled
            />
            <Input size={'xs'} w={'40%'}></Input>
            <Button size={'xs'}>Buscar</Button>
          </Flex>
        </Box>

    

        <Box overflowY="auto" h={'90%'} paddingEnd={1} marginBlock={6}>
          <TableContainer paddingBottom={2}>
            <Table fontSize={'sm'} variant="simple" colorScheme="" size={'xs'}>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Nombres</Th>
                  <Th> Cargo</Th>
                  <Th> Email</Th>
                  <Th> Telefono</Th>
                  <Th> Estado</Th>
                </Tr>
              </Thead>
              <Tbody>
                {paginacion(ListaUsuarios, paginaActual, CORTE).map(
                  (ele, id) => {
                    return (
                      <Tr key={id}>
                        <Td>{id}</Td>
                        <Td whiteSpace="normal" maxWidth="300px">
                          ssssssssssssssssss
                        </Td>
                        <Td>{ele.codigo}</Td>
                        <Td>{ele.iva}</Td>
                        <Td>{ele.iva}</Td>
                        <Td>
                          <Flex gap={3} justify={'right'}>
                            <IconButton
                              size={'xs'}
                              aria-label="Search database"
                              colorScheme="green"
                              icon={<EditIcon />}
                              onClick={() => handleEditar(ele)}
                            />
                            <IconButton
                              size={'xs'}
                              aria-label="Search database"
                              colorScheme="red"
                              icon={<DeleteIcon />}
                              onClick={onOpen}
                            ></IconButton>
                          </Flex>
                        </Td>
                      </Tr>
                    );
                  }
                )}
              </Tbody>
            </Table>
          </TableContainer>

          <Box>
            <Tooltip label="Atras" placement="left" aria-label="A tooltip">
              <IconButton
                size={'sm'}
                icon={<ChevronLeftIcon />}
                onClick={paginaAnterior}
                marginRight={3}
              ></IconButton>
            </Tooltip>
            <Tooltip label="Siguiente" placement="right" aria-label="A tooltip">
              <IconButton
                size={'sm'}
                icon={<ChevronRightIcon />}
                onClick={paginaSiguiente}
              ></IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </>
  );
}
