import { Box } from '@chakra-ui/react';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  
} from '@chakra-ui/react';
export function Dashboard(params) {
  return (
    <Box
      display={'grid'}
      gridTemplateColumns={'repeat(3, 1fr) '}
      gridTemplateRows={'30% 40%'}
      width={'100%'}
      h={'90vh'}
      gap={10}
    >
      <Box boxShadow={'lg'} rounded={3}>
        Ventas realizadas{' '}
        <Stat>
          <StatLabel>Collected Fees</StatLabel>
          <StatNumber>£0.00</StatNumber>
          <StatHelpText>Feb 12 - Feb 28</StatHelpText>
        </Stat>
      </Box>
      <Box boxShadow={'lg'} rounded={3}>
        Facturas emitidas
        <Stat>
          <StatLabel>Sent</StatLabel>
          <StatNumber>345,670</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
      </Box>
      <Box boxShadow={'lg'} rounded={3}>
        Numeros de emppleados
      </Box>
      <Box
        boxShadow={'lg'}
        rounded={3}

      >
        sdsd
      </Box>
      <Box
        boxShadow={'lg'}
        rounded={3}

      >
        sdsd
      </Box>
      
    </Box>
  );
}
