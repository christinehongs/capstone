import React from 'react';
import { Box } from '@chakra-ui/react';
import { useDrag } from 'react-dnd';

const GroceryItem = ({ bg, name }) => {
  const [collected, drag] = useDrag(() => ({
    type: 'fruit',
    item: {
      name,
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log(`${item.name} added to ${dropResult.name}`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <Box
      className="fruit"
      background={collected.isDragging ? 'gray' : bg}
      ref={drag}
      height={['50px', null, '70px', '100px']}
      width={['50px', null, '70px', '100px']}
      m="0.4rem"
      opacity={collected.isDragging ? 0.25 : 1}
    />
  );
};

export default GroceryItem;
