import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Select,
  Text,
} from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import * as Item from '../../assets/images';
import { Supermarket } from '../../assets/images';
import { GroceryItem } from '../index';
import { countryAcronyms } from '../../data/countryAcronyms';
import { useForm } from 'react-hook-form';
import Stall from '../Stall';
import { ArrowForwardIcon, InfoIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
// import { Converter } from '../index';
import { CurrencyConverter } from '../../pages';
import {
  formWrapper,
  GroceryStoreWrapper,
  shelfStyles,
  signWrapper,
} from './GroceryStore.css';
import useCities from '../../hooks/useCities';

let currencyApiKey = process.env.REACT_APP_CURRENCY_API_KEY;

const GroceryStore = () => {
  const [cart, setCart] = React.useState([]);
  const [selection, setSelection] = React.useState('');
  const [currency, setCurrency] = React.useState('USD');
  const [secondCountry, setSecondCountry] = React.useState('');
  const [selectedCurrency, setSelectedCurrency] = React.useState('');
  const [currencyData, setCurrencyData] = React.useState([]);
  const [exchangeRate, setExchangeRate] = React.useState();
  const [citiesList, setCitiesList] = React.useState([]);

  const citiesData = useCities();

  // const { data, isFetching } = useQuery('cities', () => {
  //   fetch('http://127.0.0.1:3001/cities').then((res) => res.json());
  // });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function handleFirstCountry(e) {
    e.preventDefault();
    console.log(e.target.value);
    setCurrency(e.target.value);
  }

  function handleSecondCountry(e) {
    e.preventDefault();
    console.log(e.target.value);
    setSecondCountry(e.target.value);
  }

  const handleOnSubmit = () => {};

  React.useEffect(() => {
    setCart([...cart, selection]);
  }, [selection]);

  React.useEffect(() => {
    // console.log(cart);
  }, [cart]);

  React.useEffect(() => {
    citiesData && setCitiesList(citiesData.data);
  }, [citiesData]);

  return (
    <DndProvider backend={HTML5Backend}>
      <GroceryStoreWrapper
        background={`url(${Supermarket})`}
        backgroundSize="cover"
        height="100%"
        width="100%"
      >
        <Box css={formWrapper} p={[4]}>
          <FormControl onSubmit={handleSubmit(handleOnSubmit)}>
            <HStack className="hstack">
              <Box className="select" sx={{ color: 'black !important' }}>
                <CurrencyConverter
                  currency={currency}
                  setCurrency={setCurrency}
                />
                {/*<Text display={['none', null, null, 'inline']}>.</Text>*/}
                <ArrowForwardIcon display={['block', null, null, 'none']} />
                <FormLabel
                  display={['none', null, null, 'block']}
                  htmlFor="secondCountry"
                  ml={2}
                  mr={2}
                >
                  How much would my groceries cost in
                </FormLabel>
                <Select
                  {...register('secondaryCountry')}
                  maxW={['200px']}
                  id="secondaryCountry"
                  placeholder="-select city-"
                  onChange={handleSecondCountry}
                  mr={1}
                >
                  {citiesList.map((city, index) => {
                    return <option key={index}>{city}</option>;
                  })}
                </Select>
                <Text display={['none', null, null, 'inline']}>?</Text>
              </Box>
              {/* <Box textAlign="center">
                <Button
                  colorScheme="teal"
                  variant="solid"
                  px="3rem"
                  type="submit"
                  value="submit"
                >
                  Let's go!
                </Button>
              </Box> */}
            </HStack>
          </FormControl>
        </Box>
        <Box
          sx={{ color: 'black !important' }}
          pos="absolute"
          top={['8.8%']}
          left={['2rem', null, null, '12.45rem']}
          width="90%"
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexDir={['horizontal', null, 'vertical']}
        >
          <Box
            css={signWrapper}
            background={`url(${Item.Sign})`}
            backgroundSize="cover"
            // height={['22rem']}
            width={['12rem', null, '17rem', null, '25rem']}
          >
            <Box
              padding={4}
              className="sign"
              width="80%"
              height="50%"
              mb={6}
              ml={[-3]}
              borderRadius="5px"
            >
              <Text bg="#EDBE85">
                <b>{secondCountry}</b>
                Total cost in cart: (<b>{currency}</b>)
              </Text>
            </Box>
          </Box>
          <Box
            css={signWrapper}
            background={`url(${Item.Sign})`}
            backgroundSize="cover"
            width={['12rem', null, '17rem', null, '25rem']}
          >
            <Box
              padding={5}
              className="sign"
              width="80%"
              height="50%"
              mb={6}
              ml={[-3]}
              borderRadius="5px"
            >
              <Text>
                <b>{selection}</b>{' '}
                <Link to="/item-details">
                  (More info)
                  <InfoIcon />
                </Link>
                <br></br>
                Most expensive:
                <br></br>
                (country where it costs most):(cost)
                <br></br>
                Least expensive:
                <br></br>
                (country where it costs least):(cost)
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          flexDir={['horizontal', null, 'vertical']}
          width="100%"
          pos="absolute"
          display="flex"
          alignItems="flex-end"
          justifyContent="space-evenly"
          bottom={'1rem'}
        >
          <Image
            className="cart"
            src={Item.Cart}
            alt="cart"
            zIndex="3"
            maxW={['150px', '230px', null, null, '20rem']}
          />
          <Box
            height={'100%'}
            className="stall-container"
            flexDir={['column', null, 'row']}
            pos="relative"
            maxW={[null, null, '600px', '750px', '900px']}
            mb={['1rem']}
          >
            <Stall color="green">
              {/*Fresh stall row 1*/}
              <Box
                css={shelfStyles}
                pt={[null, null, '4.4rem', '5.95rem', '7.95rem']}
              >
                <GroceryItem
                  name="apple"
                  setSelection={setSelection}
                  component={Item.Apple}
                  fruitHeight={['35px']}
                />
                <GroceryItem
                  name="banana"
                  setSelection={setSelection}
                  component={Item.Banana}
                  fruitHeight={['45px']}
                />
                <GroceryItem
                  name="orange"
                  setSelection={setSelection}
                  component={Item.Orange}
                  fruitHeight={['35px']}
                />
                <GroceryItem
                  name="potato"
                  setSelection={setSelection}
                  component={Item.Potato}
                  fruitHeight={['30px']}
                />
              </Box>
              {/*Fresh stall row 2*/}
              <Box css={shelfStyles} pt={[null, null, null, '.3rem', '0.7rem']}>
                <GroceryItem
                  name="onion"
                  setSelection={setSelection}
                  component={Item.Onion}
                  fruitHeight={['41px']}
                />
                <GroceryItem
                  name="tomato"
                  setSelection={setSelection}
                  component={Item.Tomato}
                  fruitHeight={['47px']}
                />
                <GroceryItem
                  name="bread"
                  setSelection={setSelection}
                  component={Item.Bread}
                  fruitHeight={['35px']}
                />
                <GroceryItem
                  name="bread"
                  setSelection={setSelection}
                  component={Item.Bread}
                  fruitHeight={['35px']}
                />
              </Box>
              {/*Fresh stall row 3*/}
              <Box css={shelfStyles} pt={[null, null, null, '.4rem', '1.6rem']}>
                <GroceryItem
                  name="rice"
                  setSelection={setSelection}
                  component={Item.Rice}
                  fruitHeight={['60px']}
                />
                <GroceryItem
                  name="rice"
                  setSelection={setSelection}
                  component={Item.Rice}
                  fruitHeight={['60px']}
                />
                <GroceryItem
                  name="rice"
                  setSelection={setSelection}
                  component={Item.Rice}
                  fruitHeight={['60px']}
                />
              </Box>
            </Stall>
            <Stall color="red">
              {/*Fridge stall row 1*/}
              <Box
                css={shelfStyles}
                pt={[null, null, '2.7rem', '4rem', '5.3rem']}
              >
                <GroceryItem
                  name="cheese"
                  setSelection={setSelection}
                  component={Item.Cheese}
                  fruitHeight={['35px']}
                />
                <GroceryItem
                  name="cheese"
                  setSelection={setSelection}
                  component={Item.Cheese}
                  fruitHeight={['35px']}
                />
                <GroceryItem
                  name="eggs"
                  setSelection={setSelection}
                  component={Item.Eggs}
                  fruitHeight={['35px']}
                />
                <GroceryItem
                  name="eggs"
                  setSelection={setSelection}
                  component={Item.Eggs}
                  fruitHeight={['35px']}
                />
                <GroceryItem
                  name="chicken"
                  setSelection={setSelection}
                  component={Item.Chicken}
                  fruitHeight={['53px']}
                />
                <GroceryItem
                  name="meat"
                  setSelection={setSelection}
                  component={Item.Meat}
                  fruitHeight={['53px']}
                />
              </Box>
              {/*Fridge stall row 2*/}
              <Box css={shelfStyles} pt={[null, null, null, '.3rem', '1.4rem']}>
                <Box width="100%" display="flex" justifyContent="center">
                  <GroceryItem
                    name="wine"
                    setSelection={setSelection}
                    component={Item.Wine}
                    fruitHeight={['50px']}
                  />
                  <GroceryItem
                    name="beer"
                    setSelection={setSelection}
                    component={Item.Beer}
                    fruitHeight={['55px']}
                  />
                </Box>
                <Box width="100%" display="flex" justifyContent="center">
                  <GroceryItem
                    name="water bottle"
                    setSelection={setSelection}
                    component={Item.Water}
                    fruitHeight={['55px']}
                  />
                  <GroceryItem
                    name="water bottle"
                    setSelection={setSelection}
                    component={Item.Water}
                    fruitHeight={['55px']}
                  />
                  <GroceryItem
                    name="water bottle"
                    setSelection={setSelection}
                    component={Item.Water}
                    fruitHeight={['55px']}
                  />
                </Box>
                <Box width="100%" display="flex" justifyContent="center">
                  <GroceryItem
                    name="milk"
                    setSelection={setSelection}
                    component={Item.Milk}
                    fruitHeight={['60px']}
                  />
                  <GroceryItem
                    name="milk"
                    setSelection={setSelection}
                    component={Item.Milk}
                    fruitHeight={['60px']}
                  />
                </Box>
              </Box>
            </Stall>
          </Box>
        </Box>
      </GroceryStoreWrapper>
    </DndProvider>
  );
};

export default GroceryStore;
