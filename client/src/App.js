import React from 'react';
import { Navbar } from './components';
import { ChakraProvider } from '@chakra-ui/react';
import AppRoutes from './routes';

function App() {
  return (
    <ChakraProvider>
      <AppRoutes />
      <Navbar />
    </ChakraProvider>
  );
}

export default App;
