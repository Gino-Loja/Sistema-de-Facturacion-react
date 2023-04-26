import { Box, Flex, SimpleGrid } from '@chakra-ui/react';

export function Usuarios() {
  return (
    <>
      <Box>
        <SimpleGrid columns={1} spacingX="40px" spacingY="20px">
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
        </SimpleGrid>
      </Box>

    </>
  );
}