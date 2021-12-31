import React from 'react';
import { useDrop } from 'react-dnd';
import { Box } from '@chakra-ui/react';

export const Basket = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'fruit',
    drop: () => ({ name: 'Basket' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;

  let backgroundColor = '#222';

  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }
  return (
    <Box
      ref={drop}
      role={'Basket'}
      height="100px"
      width="100px"
      background={backgroundColor}
    >
      {isActive ? 'Release to drop' : 'Drag a box here'}
    </Box>
  );
};
