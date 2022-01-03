import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import { useDrag } from 'react-dnd';
import { Tray } from '../../assets/images';

const GroceryItem = ({ component, name, height }) => {
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
    // <Box
    //   className="fruit"
    //   background={collected.isDragging ? 'gray' : bg}
    //   ref={drag}
    //   height={['50px', null, '70px', '100px']}
    //   width={['50px', null, '70px', '100px']}
    //   m="0.4rem"
    //   opacity={collected.isDragging ? 0.25 : 1}
    // />
    // <Image src={component} />
    <Box className="item" height={['100%']} maxW={['50px']}>
      <Image src={component} alt="apples" height={[height]} mb="-3px" />
      <Image src={Tray} alt="tray" ml={['-9px']} />
    </Box>
  );
};

export default GroceryItem;
