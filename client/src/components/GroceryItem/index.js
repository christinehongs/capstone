import React from 'react';
import { Box } from '@chakra-ui/react';
import { useDrag } from 'react-dnd';

const GroceryItem = ({ bg, name, quantity }) => {
  // const [onlyOne, setOnlyOne] = React.useState(false);
  const [updatedQuantity, setUpdatedQuantity] = React.useState(0);

  const [collected, drag] = useDrag(() => ({
    type: 'fruit',
    item: {
      name,
      quantity: updatedQuantity,
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log(
          `${item.quantity} ${item.name} added to ${dropResult.name}`
        );
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const handleMouseClick = (e) => {
    if (e.button === 0) {
      setUpdatedQuantity(updatedQuantity + 1);
    } else if (e.button === 2) {
      e.preventDefault();
      if (updatedQuantity > 0) {
        setUpdatedQuantity(updatedQuantity - 1);
      }
    }
  };

  React.useEffect(() => {
    // if (quantity > 1) {
    //   setOnlyOne(false);
    // } else if (quantity === 1) {
    //   setOnlyOne(true);
    // }

    updatedQuantity > 0 && console.log(name, updatedQuantity);
  }, [updatedQuantity]);

  return (
    <Box
      onContextMenu={handleMouseClick}
      onClick={handleMouseClick}
      // onMouseDown={handleMouseClick}
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
