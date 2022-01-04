import React from 'react';
import { StallA, StallB } from '../../assets/images';
import { Box } from '@chakra-ui/react';

const Stall = ({ children, color }) => {
  return (
    <Box
      background={`url(${color === 'green' ? StallA : StallB})`}
      backgroundSize="cover"
      height={['350px']}
      ml={[4]}
      pos="relative"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      flexDir="column"
      width="100%"
      sx={{
        aspectRatio: color === 'green' ? '5 / 4' : '4 / 3',
      }}
    >
      {children}
    </Box>
  );
};

export default Stall;
