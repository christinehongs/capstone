import React from 'react';
import { Navbar } from '../index';
import { Box } from '@chakra-ui/react';
import { css } from '@emotion/react';

const layoutStyles = css`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`;

const pageStyles = css`
  height: 95%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  //margin-top: 4rem;
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
