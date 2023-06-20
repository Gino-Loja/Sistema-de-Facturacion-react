import {
  Flex,
  Text,
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
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import {
  ChevronLeftIcon,
  EditIcon,
  DeleteIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useAsyncDebounce,
  usePagination,
} from 'react-table';
import { useMemo, useState } from 'react';

export function TablaProductos({ lista, editar, eliminar }) {
  const columns = useMemo(
    () => [
      {
        Header: 'Categoria',
        accessor: 'categoria',
      },
      {
        Header: 'Descripcion',
        accessor: 'descripcion',
      },
      {
        Header: 'Precio',
        accessor: 'precio',
      },
      {
        Header: 'Existencia',
        accessor: 'cantidad',
      },
      {
        Header: 'Accion',
        Cell: ({row}) => (
          <Td>
            <Flex gap={3} justify={'right'}>
              <IconButton
                aria-label="Search database"
                colorScheme="green"
                onClick={() => {
                  editar(row.original);
                }}
                icon={<EditIcon />}
                size={'xs'}
                margin={1}
              />
              <IconButton
                aria-label="Search database"
                size={'xs'}
                colorScheme="red"
                onClick={()=>eliminar(row.original._id)}
                icon={<DeleteIcon />}
                margin={1}
              ></IconButton>
            </Flex>
          </Td>
        ),
      },
    ],
    []
  );

  const data = useMemo(() => lista);
  const table = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 5,
        pageIndex: 0,
      },
    },

    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { globalFilter },
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = table;

  function CarsFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) {
    const totalCarsAvailable = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter);

    const onFilterChange = useAsyncDebounce(
      value => setGlobalFilter(value || undefined),
      500
    );

    const handleInputChange = e => {
      setValue(e.target.value);
      onFilterChange(e.target.value);
    };

    return (
      <Flex
        justify={'right'}
        width={'100%'}
        gap={'3'}
        align={'center'}
        paddingEnd={1}
       
        pb={2}
      >
        <Input
          placeholder={`${totalCarsAvailable} disponibles...`}
          size={'xs'}
          w={'40%'}
          onChange={handleInputChange}
          value={value || ''}
        ></Input>
      </Flex>
    );
  }
  return (
    <TableContainer paddingBottom={1}>
      <CarsFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <Table
        {...getTableProps()}
        fontSize={'sm'}
        variant="simple"

        size={'xs'}
      >
        <Thead>
          {
            // Recorremos las columnas que previamente definimos
            headerGroups.map(headerGroup => (
              // Añadimos las propiedades al conjunto de columnas
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Recorremos cada columna del conjunto para acceder a su información
                  headerGroup.headers.map(column => (
                    // Añadimos las propiedades a cada celda de la cabecera
                    <Th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      {...column.getHeaderProps()}
                    >
                      {
                        // Pintamos el título de nuesTra columna (propiedad "Header")
                        column.render('Header')
                      }
                    </Th>
                  ))
                }
              </Tr>
            ))
          }
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {
            // Recorremos las filas
            page.map(row => {
              // Llamamos a la función que prepara la fila previo renderizado
              prepareRow(row);
              return (
                // Añadimos las propiedades a la fila
                <Tr {...row.getRowProps()}>
                  {
                    // Recorremos cada celda de la fila
                    row.cells.map(cell => {
                      // Añadimos las propiedades a cada celda de la fila
                      return (
                        <Td {...cell.getCellProps()}>
                          {
                            // Pintamos el contenido de la celda
                            cell.render('Cell')
                          }
                        </Td>
                      );
                    })
                  }
                </Tr>
              );
            })
          }
        </Tbody>
      </Table>
      <Flex justifyContent="space-between" m={4} alignItems="center">
        <Flex>
          <Tooltip label="First Page">
            <IconButton
              size={'sm'}
              onClick={() => gotoPage(0)}
              isDisabled={!canPreviousPage}
              icon={<ArrowLeftIcon h={3} w={3} />}
              mr={4}
            />
          </Tooltip>
          <Tooltip label="Previous Page">
            <IconButton
              size={'sm'}
              onClick={previousPage}
              isDisabled={!canPreviousPage}
              icon={<ChevronLeftIcon h={6} w={6} />}
            />
          </Tooltip>
        </Flex>

        <Flex alignItems="center">
          <Text fontSize="sm" flexShrink="0" mr={8}>
            Page{' '}
            <Text fontSize="sm" fontWeight="bold" as="span">
              {pageIndex + 1}
            </Text>{' '}
            of{' '}
            <Text fontSize="sm" fontWeight="bold" as="span">
              {pageOptions.length}
            </Text>
          </Text>
          <Text fontSize="sm" flexShrink="0">
            Go to page:
          </Text>{' '}
          <NumberInput
            size={'sm'}
            ml={2}
            mr={8}
            w={28}
            min={1}
            max={pageOptions.length}
            onChange={value => {
              const page = value ? value - 1 : 0;
              gotoPage(page);
            }}
            defaultValue={pageIndex + 1}
          >
            <NumberInputField size={'sm'} />
            <NumberInputStepper size={'sm'}>
              <NumberIncrementStepper size={'sm'} />
              <NumberDecrementStepper size={'sm'} />
            </NumberInputStepper>
          </NumberInput>
          <Select
            w={32}
            size={'sm'}
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </Select>
        </Flex>

        <Flex>
          <Tooltip label="Next Page">
            <IconButton
              size={'sm'}
              onClick={nextPage}
              isDisabled={!canNextPage}
              icon={<ChevronRightIcon h={6} w={6} />}
            />
          </Tooltip>
          <Tooltip label="Last Page">
            <IconButton
              size={'sm'}
              onClick={() => gotoPage(pageCount - 1)}
              isDisabled={!canNextPage}
              icon={<ArrowRightIcon h={3} w={3} />}
              ml={4}
            />
          </Tooltip>
        </Flex>
      </Flex>
    </TableContainer>
  );
}
