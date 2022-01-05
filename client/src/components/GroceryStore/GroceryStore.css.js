import { css } from '@emotion/react';
import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const shelfStyles = css`
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
  width: 100%;
  position: relative;

  .item {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
  }
`;

export const GroceryStoreWrapper = styled(Box)`
  position: relative;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 1;

  .supermarket {
    width: 100%;
  }

  .stall-container {
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;

export const formWrapper = css`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100%;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);

  .hstack {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .select {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    label {
      margin-bottom: 0;
    }
  }
`;

export const signWrapper = css`
  position: relative;
  //top: 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  aspect-ratio: 8 / 7;

  .sign {
    box-shadow: inset 0 1px 4px 0 rgba(0, 0, 0, 0.3);
    background-color: #edbe85;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow-y: auto;
  }
`;
