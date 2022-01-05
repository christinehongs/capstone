import { Box, FormLabel, HStack, Select, Stack } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Converter } from '../components';

let currencyApiKey = process.env.REACT_APP_CURRENCY_API_KEY;

const ConverterWrapper = styled(Box)`
  text-align: center;
`;

export default function CurrencyConverter({ currency, setCurrency }) {
  const [secondInput, setSecondInput] = useState('EUR');
  const [data, setData] = useState([]);
  const [money, setMoney] = useState(1);
  const [moneyFrom, setMoneyFrom] = useState(true);
  const [exchangeRate, setExchangeRate] = useState();

  function useFirstPrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  function useSecondPrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/${currencyApiKey}/latest/usd`)
      .then((response) => response.json())
      .then((responsedata) => {
        const firstCurr =
          responsedata.conversion_rates &&
          Object.keys(responsedata.conversion_rates)[145];
        setData([...Object.keys(responsedata.conversion_rates)]);
        setCurrency(responsedata.base_code);
        setExchangeRate(responsedata.conversion_rates[firstCurr]);
      });
  }, []);

  const first = useFirstPrevious(currency);
  const second = useSecondPrevious(secondInput);

  useEffect(() => {
    if (currency === secondInput) {
      setCurrency(second);
      setSecondInput(first);
    }
    if (currency != null && secondInput != null) {
      fetch(
        `https://v6.exchangerate-api.com/v6/${currencyApiKey}/pair/${currency}/${secondInput}`
      )
        .then((response) => response.json())
        .then((responseData) => {
          setExchangeRate(responseData.conversion_rate);
        });
    }
  }, [currency, secondInput, first, second]);
  let toAmount = 0,
    fromAmount = 1;
  if (moneyFrom) {
    fromAmount = money;
    toAmount = fromAmount * exchangeRate || 0;
    toAmount = toAmount.toFixed(2);
  } else {
    toAmount = money;
    fromAmount = toAmount / exchangeRate;
    fromAmount = fromAmount.toFixed(2);
  }

  function onMoneyChangeFrom(e) {
    const value = e.target.value;
    setMoney(value);
    setMoneyFrom(true);
  }

  function onMoneyChangeTo(e) {
    const value = e.target.value;
    setMoney(value);
    setMoneyFrom(false);
  }

  function handleFromCurrency(e) {
    if (currency === secondInput) {
      setCurrency(second);
    } else setCurrency(e.target.value);
  }

  function handleToCurrency(e) {
    if (currency === secondInput) {
      setSecondInput(first);
    } else {
      setSecondInput(e.target.value);
    }
  }

  return (
    <ConverterWrapper>
      {/*<Heading mb={4}>Currency Converter</Heading>*/}
      {/*<Converter*/}
      {/*  data={data}*/}
      {/*  money={money}*/}
      {/*  onMoneyChangeFrom={onMoneyChangeFrom}*/}
      {/*  onMoneyChangeTo={onMoneyChangeTo}*/}
      {/*  firstInput={currency}*/}
      {/*  secondInput={secondInput}*/}
      {/*  toAmount={toAmount}*/}
      {/*  fromAmount={fromAmount}*/}
      {/*  handleFromCurreny={handleFromCurrency}*/}
      {/*  handleToCurrency={handleToCurrency}*/}
      {/*/>*/}
      <Stack alignItems={'center'}>
        {/*<div>*/}
        {/*  {fromAmount} {firstInput} <h1>=</h1>*/}
        {/*  <Text>*/}
        {/*    {toAmount} {secondInput}*/}
        {/*  </Text>*/}
        {/*</div>*/}
        <HStack mr={5}>
          {/*<Input*/}
          {/*  type="number"*/}
          {/*  value={fromAmount >= 1000000000 ? 1000000000 : fromAmount}*/}
          {/*  onChange={onMoneyChangeFrom}*/}
          {/*  min="1"*/}
          {/*  width={'10rem'}*/}
          {/*/>*/}
          <FormLabel htmlFor="select-currency" mr={0}>
            Select Currency:
          </FormLabel>
          <Select
            id="select-currency"
            value={currency}
            onChange={handleFromCurrency}
            width={'6rem'}
          >
            {data.map((rate) => {
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
        {/*    value={toAmount}*/}
        {/*    onChange={onMoneyChangeTo}*/}
        {/*    min="1"*/}
        {/*    width={'10rem'}*/}
        {/*  />*/}
        {/*  <Select*/}
        {/*    value={secondInput}*/}
        {/*    onChange={handleToCurrency}*/}
        {/*    width={'6rem'}*/}
        {/*  >*/}
        {/*    {data.map((rate) => {*/}
        {/*      return (*/}
        {/*        <option key={rate} value={rate}>*/}
        {/*          {rate}*/}
        {/*        </option>*/}
        {/*      );*/}
        {/*    })}*/}
        {/*  </Select>*/}
        {/*</HStack>*/}
      </Stack>
    </ConverterWrapper>
  );
}
