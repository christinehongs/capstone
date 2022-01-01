import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { css } from '@emotion/react';
import { Layout } from '../components';

const homeStyles = css`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  input,
  select {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <Layout>
      <Box css={homeStyles}>
        <h1>Homepage</h1>
        <Box css={wrapper} height="700px" p={5}>
          {/*form box*/}
          <Box
            background="#DFE7FD"
            minWidth="800px"
            height="100%"
            mx={4}
            padding="1rem"
          >
            {/*name box*/}
            <Box border="2px solid black" borderRadius="8px" mb="20px">
              <FormControl padding="1rem">
                <FormLabel htmlFor="name">Hi! My name is:</FormLabel>
                <Input id="name" placeholder="Name" border="1px solid black" />
              </FormControl>
            </Box>
            {/*from country box*/}
            <Box border="2px solid black" borderRadius="8px" mb="20px">
              <FormControl padding="1rem">
                <FormLabel htmlFor="country">I am from:</FormLabel>
                <Select id="country" placeholder="Select country">
                  <option>United States</option>
                  <option>Colombia</option>
                </Select>
              </FormControl>
            </Box>
            {/*to country box*/}
            <Box border="2px solid black" borderRadius="8px" mb="20px">
              <FormControl padding="1rem">
                <FormLabel htmlFor="country">
                  I want to see how much my groceries cost in:
                </FormLabel>
                <Select id="country" placeholder="Select country">
                  <option>Taiwan</option>
                  <option>Japan</option>
                  <option>South Korea</option>
                  <option>China</option>
                  <option>Thailand</option>
                </Select>
              </FormControl>
            </Box>
            {/*let's go button*/}
            <Box textAlign="center" mb="20px">
              <Button
                colorScheme="teal"
                variant="solid"
                margin="0 auto"
                px="3rem"
              >
                Let's go!
              </Button>
            </Box>
            {/*check out all the items button*/}
            <Box
              border="2px solid black"
              borderRadius="8px"
              mb="20px"
              padding="1rem"
              backgroundColor="#cddafd"
            >
              Check out where each item is the most expensive!
            </Box>
            {/*salary button*/}
            <Box
              border="2px solid black"
              borderRadius="8px"
              mb="20px"
              padding="1rem"
              backgroundColor="#cddafd"
            >
              Check out how much your salary is worth in different countries!
            </Box>
          </Box>
          <Box background="#90E0EF" minWidth="400px" height="100%" mx={4} />
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
