import React, { useEffect, useState } from 'react';
import axios from 'axios';
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


const navbarStyles = css`
  //position: absolute;
  //top: 0;
  //left: 0;
  position: relative;
  width: 100%;
  max-height: 4rem;
  min-height: 4rem;
  height: 5%;
  z-index: 3;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
`;

function Navbar() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [responseData, setResponseData] = useState('');

  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  });
  useEffect(() => {
    let endPoint = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    axios.get(endPoint).then((response) => {
      setResponseData(response.data);
    });
  }, [latitude, longitude]);

  const flag = responseData.countryCode;
  const newFlag = `${flag}`.toLowerCase();
  const countryName = responseData.countryName

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
            <Link to="/">Home</Link>
            <Link to="/sample">Redux Button</Link>
            <Link to="/currency-converter">Currency Converter</Link>
            <Link to="/shopping">Shopping</Link>
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
                  <Avatar
                    size={'sm'}
                    src={`https://flagcdn.com/w80/${newFlag}.png`}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={`https://flagcdn.com/256x192/${newFlag}.png`}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{countryName}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem><Link to="/currency-converter">Currency Converter</Link></MenuItem>
                  <MenuItem>placeholder</MenuItem>
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
