import { Box } from '@chakra-ui/react';

export function Dashboard(params) {
  return (
    <Box
      display={'grid'}
      gridTemplateColumns={'repeat(3, 1fr)'}
      gridTemplateRows={'30% 60%'}
      width={'100%'}
      h={'90vh'}
      gap={10}
    >
      <Box boxShadow={'md'} rounded={3}>
        Ventas realizadas{' '}
      </Box>
      <Box boxShadow={'md'} rounded={3}>
        Facturas emitidas
      </Box>
      <Box boxShadow={'md'} rounded={3}>
        Numeros de emppleados
      </Box>
      <Box
        boxShadow={'md   '}
        rounded={3}
        gridColumnStart={1}
        gridColumnEnd={4}
      >
        sdsd
      </Box>
    </Box>
  );
}
