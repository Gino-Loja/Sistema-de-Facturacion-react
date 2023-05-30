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
  Spacer,
  useDisclosure,
  FormLabel,
  FormControl,
  Select,
  Tfoot,
} from '@chakra-ui/react';

import { DeleteIcon } from '@chakra-ui/icons';
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
          <text fontSize={['1px', '24px', '32px']}>
            {' '}
            Detalles de la factura
          </text>
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
          h={'13%'}
          rounded="md"
          boxShadow="base"
          marginBlock={3}
          display={'flex'}
        >
          <Flex
            justify={'right'}
            gap={'3'}
            paddingEnd={2}
            w={'100%'}
            alignItems={'center'}
            paddingBottom={3}
            paddingLeft={1}
          >
            <FormControl w={'60%'}>
              <FormLabel m={0}>Cliente</FormLabel>
              <Input m={0} size={'xs'}></Input>
            </FormControl>
            <FormControl>
              <FormLabel m={0}>Fecha</FormLabel>
              <Input
                placeholder="Selecciona la fecha"
                size="xs"
                type="datetime-local"
                defaultValue={new Date().toISOString().substr(0, 16)}
                min={new Date().toISOString().substr(0, 16)}
                max={new Date().toISOString().substr(0, 16)}
                isDisabled
              />
            </FormControl>
            <FormControl w={'30%'}>
              <FormLabel m={0}>Descuento %</FormLabel>
              <Input size={'xs'}></Input>
            </FormControl>
            <FormControl w={'50%'}>
              <FormLabel m={0}>Forma de Pago</FormLabel>
              <Select variant={'filled'} size={'xs'}>
                <option value="option1"> Efectivo</option>
                <option value="option2">Cheque</option>
              </Select>
            </FormControl>

            <FormControl w={'30%'}>
              <FormLabel m={0}>N Factura</FormLabel>
              <Input size={'xs'}></Input>
            </FormControl>
            <FormControl w={'50%'} textAlign={'left'}>
              <FormLabel m={0}>Agregar Productos</FormLabel>
              <Button size={'sm'}>Buscar productos</Button>
            </FormControl>
          </Flex>
        </Box>

        <Box overflowY="auto" h={'75%'} paddingEnd={1} marginBlock={6}>
          <TableContainer paddingBottom={2}>
            <Table
              fontSize={'sm'}
              variant="unstyled"
              colorScheme=""
              size={'xs'}
            >
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Cant</Th>
                  <Th> Descripcion</Th>
                  <Th> Precio Unit</Th>
                  <Th> Precio Total</Th>
                  <Th> </Th>
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
                        <Td>{ele.nombres}</Td>
                        <Td>{ele.nombres}</Td>
                        <Td>{ele.nombres}</Td>

                        <Td>
                          <Flex>
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
              <Tfoot>
                <Tr>
                  <Th colSpan={3}></Th>
                  <Th>Neto</Th>
                  <Th>0,1</Th>
                </Tr>
                <Tr>
                  <Th colSpan={3}></Th>
                  <Th>Iva</Th>
                  <Th>0.0</Th>
                </Tr>
                <Tr>
                  <Th colSpan={3}></Th>
                  <Th>Total</Th>
                  <Th>0,0</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
}
