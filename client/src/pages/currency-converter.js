import { Heading, Box } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Converter, Layout } from '../components';

let currencyApiKey = process.env.REACT_APP_CURRENCY_API_KEY;

const ConverterWrapper = styled(Box)`
  text-align: center;
`;

export default function CurrencyConverter() {
  const [firstInput, setFirstInput] = useState('USD');
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
        setFirstInput(responsedata.base_code);
        setExchangeRate(responsedata.conversion_rates[firstCurr]);
      });
  }, []);

  const first = useFirstPrevious(firstInput);
  const second = useSecondPrevious(secondInput);

  useEffect(() => {
    if (firstInput === secondInput) {
      setFirstInput(second);
      setSecondInput(first);
    }
    if (firstInput != null && secondInput != null) {
      fetch(
        `https://v6.exchangerate-api.com/v6/${currencyApiKey}/pair/${firstInput}/${secondInput}`
      )
        .then((response) => response.json())
        .then((responseData) => {
          setExchangeRate(responseData.conversion_rate);
        });
    }
  }, [firstInput, secondInput, first, second]);
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
    if (firstInput === secondInput) {
      setFirstInput(second);
    } else setFirstInput(e.target.value);
  }

  function handleToCurrency(e) {
    if (firstInput === secondInput) {
      setSecondInput(first);
    } else {
      setSecondInput(e.target.value);
    }
  }

  return (
    <Layout>
      <ConverterWrapper mt={4}>
        <Heading mb={4}>Currency Converter</Heading>
        <Converter
          data={data}
          money={money}
          onMoneyChangeFrom={onMoneyChangeFrom}
          onMoneyChangeTo={onMoneyChangeTo}
          firstInput={firstInput}
          secondInput={secondInput}
          toAmount={toAmount}
          fromAmount={fromAmount}
          handleFromCurreny={handleFromCurrency}
          handleToCurrency={handleToCurrency}
        />
      </ConverterWrapper>
    </Layout>
  );
}
