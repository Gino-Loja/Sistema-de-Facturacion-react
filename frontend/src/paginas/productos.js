import {
  Box,
  Flex,
  Text,
  SimpleGrid,
  Button,
  Input,
  Table,
  TableContainer,
  TableCaption,
  Tr,
  Th,
  Td,
  Thead,
  Tbody,
  Tfoot,
} from '@chakra-ui/react';

export function Productos() {
  return (
    <>
      <Box p={'1px'} h={'100%'}>
        <Box
          columns={1}
          spacingX="40px"
          spacingY="5px"
          rounded="md"
          p={'8px'}
          h={'20%'}
        >
          <Box>
            <Text textAlign={'initial'} paddingBlock={'1px'} fontSize="xl">
              Registrar Productos
            </Text>
          </Box>

          <Flex gap="10">
            <Box w={'9%'}>
              <Text fontSize="sm" textAlign={'initial'}>
                Codigo
              </Text>
              <Input size="xs"></Input>
            </Box>

            <Box w={'40%'}>
              <Text fontSize="sm" textAlign={'initial'}>
                Descripcion
              </Text>
              <Input size="xs"></Input>
            </Box>

            <Box w={'8%'}>
              <Text fontSize="sm" textAlign={'initial'}>
                Precio
              </Text>
              <Input size="xs"></Input>
            </Box>

            <Box w={'9%'}>
              <Text fontSize="sm" textAlign={'initial'}>
                Existencias
              </Text>
              <Input size="xs"></Input>
            </Box>

            <Box w={'8%'}>
              <Text fontSize="sm" textAlign={'initial'}>
                P. Iva
              </Text>
              <Input size="xs"></Input>
            </Box>

            <Box mt="auto">
              <Button size={'sm'}>guardar</Button>
            </Box>
          </Flex>
        </Box>

        <Box h={'80%'}>
          <Box
            pt={3}
            h={'10%'}
            _after={{
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backdropFilter: 'blur(8px)',
              zIndex: -1,
            }}
          >
            <Flex justify={'right'} gap={'3'} align={'center'} paddingEnd={2}>
              <Input size={'xs'} w={'40%'}></Input>
              <Button size={'xs'}>Buscar</Button>
            </Flex>
          </Box>

          <Box overflowY="auto" h={'90%'} paddingEnd={1}>
            <TableContainer >
              <Table variant="striped" colorScheme="teal" size={'sm'}>
                <Thead>
                  <Tr>
                    <Th>Codigo</Th>
                    <Th>Descripcion</Th>
                    <Th isNumeric> Precio</Th>
                    <Th isNumeric> Existencias</Th>
                    <Th isNumeric> Precio</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                    <Td isNumeric>50</Td>
                    <Td isNumeric>250</Td>
                  </Tr>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                    <Td isNumeric>50</Td>
                    <Td isNumeric>250</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td isNumeric>30.48</Td>
                    <Td isNumeric>50</Td>
                    <Td isNumeric>250</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                    <Td isNumeric>50</Td>
                    <Td isNumeric>250</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                    <Td isNumeric>50</Td>
                    <Td isNumeric>250</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                    <Td isNumeric>50</Td>
                    <Td isNumeric>250</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                    <Td isNumeric>50</Td>
                    <Td isNumeric>250</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                    <Td isNumeric>50</Td>
                    <Td isNumeric>250</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                    <Td isNumeric>50</Td>
                    <Td isNumeric>250</Td>
                  </Tr>{' '}
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                    <Td isNumeric>50</Td>
                    <Td isNumeric>250</Td>
                  </Tr>{' '}
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                    <Td isNumeric>50</Td>
                    <Td isNumeric>250</Td>
                  </Tr>{' '}
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                    <Td isNumeric>50</Td>
                    <Td isNumeric>250</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </>
  );
}
