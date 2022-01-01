import React from 'react';
import { Box } from '@chakra-ui/react';
import { useDroppable } from '@dnd-kit/core';

const Basket = ({ children, name }) => {
  const { isOver, setNodeRef } = useDroppable({
    name,
  });
  let backgroundColor = '#222';

  const dropStyles = {
    transform: `scale(1.1) rotate(-5deg)`,
    opacity: `0.4`,
    backgroundColor: 'darkkhaki',
  };

  return (
    <Box
      ref={setNodeRef}
      height="100px"
      width="100px"
      background={backgroundColor}
      style={isOver ? dropStyles : null}
    >
      {isOver ? 'Release to drop' : 'Drag a box here'}
      {children}
    </Box>
  );
};

export default Basket;
