import React from 'react';
import { Navbar } from '../index';
import { Box } from '@chakra-ui/react';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Box mt={16}>{children}</Box>
    </>
  );
}

export default Layout;
