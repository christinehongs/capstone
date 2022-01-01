import React from 'react';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';
import Item from '../GroceryItem';
import { Basket } from '../index';
import { DndContext } from '@dnd-kit/core';

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

const items = [
  { name: 'apple', bg: 'red' },
  { name: 'pear', bg: 'green' },
  { name: 'banana', bg: 'yellow' },
  { name: 'grapes', bg: 'purple' },
];

const ItemSelect = () => {
  return (
    <DndContext>
      <Box css={wrapper} p={7} mt={7}>
        <Box css={fruitsContainer}>
          {items.map((item, index) => (
            <Item key={index} id={index} name={item.name} bg={item.bg} />
          ))}
        </Box>
        <Basket />
      </Box>
    </DndContext>
  );
};

export default ItemSelect;
