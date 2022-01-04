import React from 'react';
import { 
    Box,
    Image,
    FormControl,
    Stack
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { css } from '@emotion/react';
import * as Item from '../../assets/images';
import { GroceryItem } from '../index';

const shelfStyles = css`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  width: 100%;

  &.row-1 {
    //bottom: 11rem;
    //left: 8%;
    max-width: 388px;
    width: 100%;
    z-index: 2;
    background-color: white;

    .item {
      position: relative;

      //img {
      //  position: absolute;
      //}
    }
  }
`;

const GroceryStoreWrapper = styled(Box)`
  position: relative;
  height: 100%;
  z-index: 1;

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

const items = [
  { name: 'Apple', component: Item.Apple },
  { name: 'Tomato', component: Item.Tomato },
  { name: 'Banana', component: Item.Banana },
  { name: 'Grapes', component: Item.Orange },
];

const GroceryStore = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <GroceryStoreWrapper background="white">
        <FormControl>
          <Stack></Stack>
        </FormControl>
        <Image
          className="supermarket"
          src={Item.Supermarket}
          alt="grocery-store"
          zIndex="1"
          maxH={['800px', null, null, null, '1200px', 'none']}
          // maxW={['1200px', '']}
          width="100%"
        />
        <Image
          className="cart"
          src={Item.Cart}
          alt="cart"
          zIndex="3"
          ml={4}
          position="absolute"
          left={['2rem']}
          top="55%"
          maxW={['200px', '300px', null, null, '400px', null]}
        />
        <Box
          className="stall-container"
          bottom={[0, null, null, '1rem']}
          right={['1rem', null, null, '3rem']}
          maxW={[null, null, '600px', '750px', '900px']}
        >
          <Box className="stall" mx={2}>
            <Image
              src={Item.StallA}
              alt="stall"
              maxH="500px"
              zIndex="2"
              mx={4}
            />
            <Box
              css={shelfStyles}
              className="row-1"
              height={['38px']}
              bottom={['11rem']}
              left={['8%']}
            >
              <GroceryItem component={Item.Apple} height="90%" />
              <GroceryItem component={Item.Banana} height="100%" />
              <GroceryItem component={Item.Orange} />
            </Box>
            <Box css={shelfStyles} className="row-2"></Box>
            <Box css={shelfStyles} className="row-3"></Box>
          </Box>
          <Box className="stall" mx={2}>
            <Image
              className="stall"
              src={Item.StallB}
              alt="stall"
              maxH="500px"
              zIndex="2"
              mx={4}
            />
          </Box>
        </Box>
      </GroceryStoreWrapper>
    </DndProvider>
  );
};

export default GroceryStore;
