import React from 'react';
import { Box } from '@chakra-ui/react';
import { useDroppable } from '@dnd-kit/core';

const Basket = ({ children, id }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  let backgroundColor = 'white';

  const dropStyles = {
    // opacity: `0.4`,
    backgroundColor: 'darkkhaki',
  };

  React.useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <Box
      ref={setNodeRef}
      height="500px"
      width="100%"
      background={backgroundColor}
      style={isOver ? dropStyles : null}
      border="1px solid black"
      borderRadius="8px"
      ml={5}
      p={4}
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexWrap="wrap"
    >
      {/*{isOver ? 'Release to drop' : 'Drag a box here'}*/}
      {children}
    </Box>
  );
};

export default Basket;
