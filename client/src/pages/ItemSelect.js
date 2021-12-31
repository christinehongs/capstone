import React from 'react';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';
import Item from '../components/Item';
import { Basket } from '../components/Basket';

const wrapper = css`
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
`;

const fruitsContainer = css`
  max-width: 800px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  min-height: 500px;
  background-color: antiquewhite;

  .fruit {
    transition: all 0.2s ease-in-out;
  }
`;

const ItemSelect = () => {
  return (
    <>
      <Box css={wrapper} p={7} mt={7}>
        <Box css={fruitsContainer}>
          <Item name="apple" bg="red" />
          <Item name="pear" bg="green" />
          <Item name="banana" bg="yellow" />
          <Item name="grapes" bg="purple" />
        </Box>
        <Basket />
      </Box>
    </>
  );
};

export default ItemSelect;
