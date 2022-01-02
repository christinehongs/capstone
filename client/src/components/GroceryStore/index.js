import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Layout } from '../index';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Apple from '../../assets/images/apple.svg';
import Tomato from '../../assets/images/tomato.svg';
import Banana from '../../assets/images/banana.svg';
import Orange from '../../assets/images/orange.svg';
import Supermarket from '../../assets/images/supermarket.svg';

const GroceryStoreBg = styled(Box)`
  //position: absolute;
  //top: 0;
  //left: 0;

  img {
    width: 100%;
    height: 100%;
  }

  //aspect-ratio: auto;
`;

const wrapper = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
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
      <Layout bg="#ffffdd">
        <GroceryStoreBg background="white">
          <Image src={Supermarket} alt="grocery-store" />
        </GroceryStoreBg>
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
      </Layout>
    </DndProvider>
  );
};

export default GroceryStore;
