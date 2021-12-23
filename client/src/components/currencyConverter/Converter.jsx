import React from "react";
import { 
  Select,
  Stack,
  HStack,
  Input
   } from '@chakra-ui/react'

function Converter(props) {
  return (
    <Stack alignItems={'center'}>
      <p>
        {props.fromAmount} {props.firstInput} <h1>=</h1>
      </p>
      <h3>
        {props.toAmount} {props.secondInput}
      </h3>
      <HStack>
        <Input
          type="number"
          value={props.fromAmount}
          onChange={props.onMoneyChangeFrom}
          min="1"
          width={'10rem'}
        />
        <Select value={props.firstInput} onChange={props.handleFromCurreny} width={'6rem'}>
          {props.data.map((rate) => {
            return (
              <option key={rate} value={rate}>
                {rate}
              </option>
            );
          })}
        </Select>
      </HStack>
      <HStack>
        <Input
          type="number"
          value={props.toAmount}
          onChange={props.onMoneyChangeTo}
          min="1"
          width={'10rem'}
        />
        <Select value={props.secondInput} onChange={props.handleToCurrency} width={'6rem'}>
          {props.data.map((rate) => {
            return (
              <option key={rate} value={rate}>
                {rate}
              </option>
            );
          })}
        </Select>
      </HStack>
    </Stack>
  );
}
export default Converter;
