import React from 'react';
import { Box } from '@chakra-ui/react';
import { useDroppable } from '@dnd-kit/core';

const Basket = () => {
  const { isOver, setNodeRef } = useDroppable({});
  let backgroundColor = '#222';

  const dropStyles = {
    transform: `scale(1.1) rotate(-5deg)`,
    opacity: `0.4`,
    backgroundColor: isOver ? 'darkkhaki' : backgroundColor,
  };

  return (
    <Box
      ref={setNodeRef}
      role={'Basket'}
      height="100px"
      width="100px"
      style={dropStyles}
    >
      {isOver ? 'Release to drop' : 'Drag a box here'}
    </Box>
  );
};

export default Basket;
