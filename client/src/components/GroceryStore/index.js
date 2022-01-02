import React from 'react';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { Basket, GroceryItem, Layout } from '../index';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
// import { DndContext, DragOverlay, useDraggable } from '@dnd-kit/core';
// import { Draggable } from '../../utils/Draggable';

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
  { name: 'apple', bg: 'red' },
  { name: 'pear', bg: 'green' },
  { name: 'banana', bg: 'yellow' },
  { name: 'grapes', bg: 'purple' },
];

// export const DraggableGroceryItem = () => {
//   const { isDragging, setNodeRef, listeners } = useDraggable({
//     id: 'draggable-item',
//   });
//
//   return (
//     <GroceryItem
//       dragging={isDragging}
//       ref={setNodeRef}
//       listeners={listeners}
//       style={{
//         opacity: isDragging ? 0 : undefined,
//       }}
//     />
//   );
// };

const GroceryStore = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Layout>
        <Box
          css={wrapper}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box css={fruitsContainer} p={4}>
            {items.map((item, index) => (
              <GroceryItem
                key={index}
                id={index}
                name={item.name}
                bg={item.bg}
              />
            ))}
          </Box>
          <Basket />
        </Box>
      </Layout>
    </DndProvider>
  );
};

export default GroceryStore;
