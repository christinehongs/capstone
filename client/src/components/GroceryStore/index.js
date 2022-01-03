import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Apple from '../../assets/images/apple.svg';
import Tomato from '../../assets/images/tomato.svg';
import Banana from '../../assets/images/banana.svg';
import Orange from '../../assets/images/orange.svg';
import Supermarket from '../../assets/images/supermarket.svg';
import StallA from '../../assets/images/stall-1.svg';
import StallB from '../../assets/images/stall_2.svg';
import Cart from '../../assets/images/shopping-cart.svg';

const GroceryStoreWrapper = styled(Box)`
  position: absolute;
  top: 0;
  height: 100%;

  z-index: 1;
  //left: 0;

  img {
  }

  .supermarket {
    width: 100%;
  }

  .stall-container {
    width: 100%;
    position: absolute;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    .stall {
      position: relative;
    }
  }
`;

const wrapper = css`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

const fruitsContainer = css`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 80%;
  height: 100%;
  background-color: antiquewhite;

  .fruit {
    transition: opacity 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const items = [
  { name: 'Apple', component: Apple },
  { name: 'Tomato', component: Tomato },
  { name: 'Banana', component: Banana },
  { name: 'Grapes', component: Orange },
];

const GroceryStore = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <GroceryStoreWrapper background="white">
        <Image
          className="supermarket"
          src={Supermarket}
          alt="grocery-store"
          zIndex="1"
          maxH={['800px', null, null, null, '1200px', 'none']}
          // maxW={['1200px', '']}
          width="100%"
        />
        <Image
          className="cart"
          src={Cart}
          alt="cart"
          zIndex="3"
          ml={4}
          position="absolute"
          left="0"
          bottom="0"
          maxW={['300px', '400px', null, null, '0px', null]}
        />
        <Box
          className="stall-container"
          bottom={['10%', null, null, '5rem']}
          right="0"
          maxW={[null, null, '600px', '750px', '900px', '1200px']}
        >
          <Box className="stall-a">
            <Image
              className="stall"
              src={StallA}
              alt="stall"
              maxH="500px"
              zIndex="2"
              mx={4}
            />
          </Box>
          <Box className="stall-b">
            <Image
              className="stall"
              src={StallB}
              alt="stall"
              maxH="500px"
              zIndex="2"
              mx={4}
            />
          </Box>
        </Box>
      </GroceryStoreWrapper>
      {/*<Box css={wrapper}>*/}
      {/*</Box>*/}
      {/*<Box*/}
      {/*  css={wrapper}*/}
      {/*  display="flex"*/}
      {/*  alignItems="center"*/}
      {/*  justifyContent="center"*/}
      {/*>*/}
      {/*  <Box css={fruitsContainer} p={4}>*/}
      {/*    {items.map((item, index) => (*/}
      {/*      <GroceryItem*/}
      {/*        key={index}*/}
      {/*        id={index}*/}
      {/*        name={item.name}*/}
      {/*        component={item.component}*/}
      {/*      />*/}
      {/*    ))}*/}
      {/*  </Box>*/}
      {/*  <Basket />*/}
      {/*</Box>*/}
    </DndProvider>
  );
};

export default GroceryStore;
