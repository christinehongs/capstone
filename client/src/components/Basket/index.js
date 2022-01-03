import React from 'react';
import { useDrop } from 'react-dnd';
import { Box } from '@chakra-ui/react';

export const Basket = () => {
  const [currentItem, setCurrentItem] = React.useState(null);
  const [basketItems, setBasketItems] = React.useState([]);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'fruit',
    drop: (item) => {
      setCurrentItem(item.name);
    },
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

  React.useEffect(() => {
    currentItem && setBasketItems([...basketItems, currentItem]);
  }, [currentItem, basketItems]);

  React.useEffect(() => {
    console.log(basketItems);
  }, [basketItems]);

  return (
    <Box
      ref={drop}
      role={'Basket'}
      background={backgroundColor}
      height="100%"
      width="20%"
      p={7}
    >
      {isActive ? 'Release to drop' : 'Drag a box here'}
    </Box>
  );
};

export default Basket;
