import React from 'react';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { css } from '@emotion/react';
import useGeolocation from '../../hooks/useGeolocation';
import { ArrowBackIcon } from '@chakra-ui/icons';

const navbarStyles = css`
  position: relative;
  width: 100%;
  max-height: 4rem;
  min-height: 4rem;
  height: 5%;
  z-index: 3;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
`;

function Navbar() {
  const { newFlag, countryName } = useGeolocation();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        css={navbarStyles}
        bg={useColorModeValue('gray.100', 'gray.900')}
        px={4}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing="1rem">
            <Link to="/">
              {' '}
              <ArrowBackIcon w={9} h={9} />{' '}
            </Link>
            {/* <Link to="/currency-converter">Currency Converter</Link> */}
          </HStack>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  {newFlag !== undefined ? (
                    <Avatar
                      size={'sm'}
                      src={`https://flagcdn.com/w80/${newFlag}.png`}
                    />
                  ) : (
                    <Avatar
                    size={'sm'} />
                  )}
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={
                        newFlag !== undefined &&
                        `https://flagcdn.com/256x192/${newFlag}.png`
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <div>{countryName}</div>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>
                    <Link to="/currency-converter">Currency Converter</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
