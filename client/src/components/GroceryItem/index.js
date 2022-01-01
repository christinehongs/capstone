import React from 'react';
import { Box } from '@chakra-ui/react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

const GroceryItem = ({ bg, name }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
  });

  const dragStyles = transform
    ? {
        transform: CSS.Translate.toString(transform),
        opacity: `0.4`,
        backgroundColor: 'darkgreen',
      }
    : undefined;

  return (
    <Box
      className="fruit"
      background={bg}
      ref={setNodeRef}
      height={['50px', null, '70px', '100px']}
      width={['50px', null, '70px', '100px']}
      m="0.4rem"
      cursor="pointer"
      style={dragStyles}
      {...listeners}
      {...attributes}
    />
  );
};

export default GroceryItem;
