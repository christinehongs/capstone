import React from 'react';
import { Box, Image, Tooltip } from '@chakra-ui/react';
import { DragPreviewImage, useDrag } from 'react-dnd';
import { Tray } from '../../assets/images';
import axios from 'axios';

const GroceryItem = ({
  component,
  name,
  fruitHeight,
  setSelection,
  selectedCity,
}) => {
  const [collected, drag, preview] = useDrag(() => ({
    type: 'item',
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

  const handleOnClick = (city, item) => {
    setSelection({
      city,
      item,
    });
  };

  return (
    <Box className="item" height={['100%']} maxW={['50px']} pos="relative">
      <DragPreviewImage src={component} connect={preview} />
      <Tooltip
        label={name}
        hasArrow
        placement="top"
        bg="beige"
        color="black"
        size="large"
      >
        <Image
          className="item-image"
          onClick={(e) => {
            e.preventDefault();
            handleOnClick(selectedCity, name);
          }}
          ref={drag}
          opacity={collected.isDragging ? 0 : 1}
          src={component}
          alt={name}
          height={fruitHeight}
          cursor="grab"
          _active={{
            cursor: 'grabbing',
            transform: 'scale(1.1)',
          }}
        />
      </Tooltip>
      <Image src={Tray} alt="tray" mt="-5px" />
    </Box>
  );
};

export default GroceryItem;
