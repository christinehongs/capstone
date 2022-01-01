import React, { forwardRef } from 'react';
import { Box } from '@chakra-ui/react';

const GroceryItem = forwardRef(({ bg, name, dragging }, ref) => {
  return (
    <Box
      ref={ref}
      className="fruit"
      background={bg}
      height={['50px', null, '70px', '100px']}
      width={['50px', null, '70px', '100px']}
      m="0.4rem"
      cursor={dragging ? 'grab' : 'pointer'}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {name ? name : null}
    </Box>
  );
});

export default GroceryItem;
