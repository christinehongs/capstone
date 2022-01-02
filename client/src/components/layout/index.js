import React from 'react';
import { Navbar } from '../index';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

const layoutStyles = css`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

const pageStyles = css`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  padding: 5rem 1rem 1rem 1rem;
`;

function Layout({ children, bg }) {
  return (
    <Box css={layoutStyles} background={bg}>
      <Navbar />
      <Box css={pageStyles}>{children}</Box>
    </Box>
  );
}

export default Layout;
