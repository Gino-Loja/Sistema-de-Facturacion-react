import { Box } from '@chakra-ui/react';

import { BarChart, LineChart, PieLine } from '../componentes/chart';

export function Dashboard(params) {
  // useEffect(()=>{
  //   return () => {
  //     LineChart.destroy()
  //   }
  // },[])
  return (
    <Box
      display={'grid'}
      gridTemplateColumns={'repeat(3, 1fr) '}
      gridTemplateRows={'40% 45%'}
      width={'100%'}
      h={'90vh'}
      gap={10}
    >
      <Box boxShadow={'lg'} rounded={3}>
        Ventas realizadas <LineChart></LineChart>
      </Box>
      <Box boxShadow={'lg'} rounded={3}>
        Facturas emitidas
        <BarChart></BarChart>
      </Box>
      <Box boxShadow={'lg'} rounded={3}>
        Numeros de emppleados
        <PieLine></PieLine>
      </Box>

      <Box
        gridColumnStart={1}
        gridColumnEnd={4}
        gap={20}
        display={'grid'}
        gridTemplateColumns={'repeat(2, 1fr) '}
      >
        <Box boxShadow={'lg'} rounded={3}>
          <BarChart></BarChart>
        </Box>
        <Box boxShadow={'lg'} rounded={3}>
          <LineChart></LineChart>
        </Box>
      </Box>
    </Box>
  );
}
