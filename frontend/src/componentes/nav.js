import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

import { ContextModalProvider } from '../context/contextModal';
import React from 'react';

const Links = [
  'Dashboard',
  'productos',
  'Nueva Factura',
  'Reporte de ventas',
  'Clientes',
  'Usuarios',
];

function NavLink({ children, botonPresionado, activado }) {
  const colorNull = useColorModeValue('gray.400', 'gray.700');

  return (
    <Box
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      fontSize={'md'}
      px={2}
      py={1}
      rounded={'md'}
      bg={activado === children ? colorNull : ''}
    >
      <Link
        onClick={() => botonPresionado(children)}
        to={
          children === 'Nueva Factura'
            ? '/' + 'NuevaFactura'
            : '/' + children
        }
      >
        {' '}
        {children}
      </Link>
    </Box>
  );
}

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeTab, setActiveTab] = useState('');
  const botonPresionado = children => {
    setActiveTab(children);
  };
  return (
    <>
      <Box
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
        h={'7vh'}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'sm'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} align={'center'}>
            <Box>Logo</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map(link => (
                <NavLink
                  key={link}
                  activado={activeTab}
                  botonPresionado={botonPresionado}
                >
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <ColorModeSwitcher colorScheme={'teal'} size={'sm'} mr={4} />
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <ContextModalProvider>
        <Box p={3}  w={[
          '100%', // 0-30em
          '100%', // 30em-48em
          '100%', // 48em-62em
          '100%', // 62em+
        ]} h={'93vh'}>
          <Outlet></Outlet>
        </Box>
      </ContextModalProvider>
    </>
  );
}
