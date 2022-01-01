import React from 'react';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { Basket, GroceryItem } from '../index';
import { DndContext, DragOverlay, useDraggable } from '@dnd-kit/core';
import { Draggable } from '../../utils/Draggable';

const wrapper = css`
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const fruitsContainer = css`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  min-height: 500px;
  background-color: antiquewhite;

  .fruit {
    transition: opacity 0.2s ease-in-out;
  }
`;

const items = [
  { name: 'apple', bg: 'red' },
  { name: 'pear', bg: 'green' },
  { name: 'banana', bg: 'yellow' },
  { name: 'grapes', bg: 'purple' },
];

export const DraggableGroceryItem = () => {
  const { isDragging, setNodeRef, listeners } = useDraggable({
    id: 'draggable-item',
  });

  return (
    <GroceryItem
      dragging={isDragging}
      ref={setNodeRef}
      listeners={listeners}
      style={{
        opacity: isDragging ? 0 : undefined,
      }}
    />
  );
};

const ItemSelect = () => {
  // const [activeId, setActiveId] = React.useState(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [parent, setParent] = React.useState(null);

  React.useEffect(() => {
    parent && console.log(parent);
  }, [parent]);

  return (
    <DndContext
      onDragStart={(e) => {
        setIsDragging(true);
      }}
      onDragEnd={({ over }) => {
        // console.log(over);
        setParent(over ? over.id : null);
        setIsDragging(false);
      }}
      onDragCancel={() => {
        setIsDragging(false);
      }}
    >
      <Box css={wrapper} p={7} mt={7}>
        {/*<Box>{!parent ? <DraggableGroceryItem /> : null}</Box>*/}
        {/*<Basket id="food-item" css={fruitsContainer}>*/}
        {/*  {items.map((item, index) =>*/}
        {/*    parent === 'food-item' ? (*/}
        {/*      <Draggable key={index} id={item.name} name={item.name}>*/}
        {/*        <GroceryItem bg={item.bg} name={item.name} />*/}
        {/*      </Draggable>*/}
        {/*    ) : null*/}
        {/*  )}*/}

        {/*  /!*<DraggableGroceryItem key={index} name={item.name} />*!/*/}
        {/*</Basket>*/}
        <Box css={fruitsContainer}>
          {items.map((item, index) => (
            <Draggable key={index} id={index} name={item.name}>
              <GroceryItem
                id={index}
                dragging={isDragging}
                name={item.name}
                bg={item.bg}
              />
            </Draggable>
          ))}
        </Box>
        <Basket id="basket" dragging={isDragging}>
          {items.map((item, index) =>
            parent === 'basket' ? (
              <DraggableGroceryItem key={index} name />
            ) : null
          )}
        </Basket>
      </Box>

      <DragOverlay>{isDragging ? <GroceryItem /> : null}</DragOverlay>
    </DndContext>
  );
};

export default ItemSelect;
