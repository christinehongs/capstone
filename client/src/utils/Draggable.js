import React from 'react';
import { useDndMonitor, useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

import { Box } from '@chakra-ui/react';

export const Draggable = (props) => {
  const { name, id } = props;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: {
      name,
    },
  });

  const dragStyles = transform
    ? {
        transform: CSS.Translate.toString(transform),
        opacity: `0.4`,
      }
    : undefined;

  useDndMonitor({
    onDragStart(e) {
      // console.log('dragging');
    },
    onDragEnd(e) {
      // console.log('not dragging');
    },
  });

  return (
    <Box ref={setNodeRef} {...listeners} {...attributes} style={dragStyles}>
      {props.children}
    </Box>
  );
};
