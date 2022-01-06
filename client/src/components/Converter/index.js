import React from 'react';
import { HStack, Input, Select, Stack } from '@chakra-ui/react';

function Converter(props) {
  return (
    <Stack alignItems={'center'}>
      {/*<div>*/}
      {/*  {props.fromAmount} {props.firstInput} <h1>=</h1>*/}
      {/*  <Text>*/}
      {/*    {props.toAmount} {props.secondInput}*/}
      {/*  </Text>*/}
      {/*</div>*/}
      <HStack sx={{ marginTop: '1.5rem !important' }}>
        <Input
          type="number"
          value={props.fromAmount >= 1000000000 ? 1000000000 : props.fromAmount}
          onChange={props.onMoneyChangeFrom}
          min="1"
          width={'10rem'}
        />
        <Select
          value={props.firstInput}
          onChange={props.handleFromCurrency}
          width={'6rem'}
        >
          {props.data.map((rate) => {
            return (
              <option key={rate} value={rate}>
                {rate}
              </option>
            );
          })}
        </Select>
      </HStack>
      {/*<HStack>*/}
      {/*  <Input*/}
      {/*    type="number"*/}
      {/*    value={props.toAmount}*/}
      {/*    onChange={props.onMoneyChangeTo}*/}
      {/*    min="1"*/}
      {/*    width={'10rem'}*/}
      {/*  />*/}
      {/*  <Select*/}
      {/*    value={props.secondInput}*/}
      {/*    onChange={props.handleToCurrency}*/}
      {/*    width={'6rem'}*/}
      {/*  >*/}
      {/*    {props.data.map((rate) => {*/}
      {/*      return (*/}
      {/*        <option key={rate} value={rate}>*/}
      {/*          {rate}*/}
      {/*        </option>*/}
      {/*      );*/}
      {/*    })}*/}
      {/*  </Select>*/}
      {/*</HStack>*/}
    </Stack>
  );
}
export default Converter;
