import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { DragPreviewImage, useDrag } from 'react-dnd';
import { Tray } from '../../assets/images';

const GroceryItem = ({ component, name, fruitHeight, setSelection }) => {
  const [collected, drag, preview] = useDrag(() => ({
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
    <Box className="item" height={['100%']} maxW={['50px']} pos="relative">
      <DragPreviewImage src={component} connect={preview} />
      <Image
        onClick={() => setSelection(name)}
        ref={drag}
        opacity={collected.isDragging ? 0.3 : 1}
        src={component}
        alt={name}
        height={fruitHeight}
        cursor="grab"
        _active={{ cursor: 'grabbing' }}
      />
      <Image src={Tray} alt="tray" mt="-5px" />
    </Box>
  );
};

export default GroceryItem;
