import React from 'react';
import {
  Box,
  Button,
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
import { useForm } from 'react-hook-form';
import Stall from '../Stall';
import { ArrowForwardIcon } from '@chakra-ui/icons';
// import { Converter } from '../index';
import { CurrencyConverter } from '../../pages';
import {
  formWrapper,
  GroceryStoreWrapper,
  shelfStyles,
  signWrapper,
} from './GroceryStore.css';
import useCities from '../../hooks/useCities';
import axios from 'axios';

let currencyApiKey = process.env.REACT_APP_CURRENCY_API_KEY;

const GroceryStore = () => {
  const [cartData, setCartData] = React.useState([]);
  const [selection, setSelection] = React.useState(null);
  const [currency, setCurrency] = React.useState('USD');
  const [selectedCity, setSelectedCity] = React.useState('Medellin, Colombia');
  const [selectedCurrency, setSelectedCurrency] = React.useState('');
  const [currencyData, setCurrencyData] = React.useState([]);
  const [exchangeRate, setExchangeRate] = React.useState();
  const [citiesList, setCitiesList] = React.useState([]);
  // const [formData, setFormData] = React.useState(null);

  const { loading, data } = useCities();

  // const [drop] = useDrop(() => ({
  //   accept: 'item',
  //   drop: () => ({ name: 'cart' }),
  //   collect: (monitor) => ({
  //     isOver: monitor.isOver(),
  //     canDrop: monitor.canDrop(),
  //   }),
  // }));

  // const { data, isFetching } = useQuery('cities', () => {
  //   fetch('http://127.0.0.1:3001/cities').then((res) => res.json());
  // });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // function handleFirstCountry(e) {
  //   e.preventDefault();
  //   console.log(e.target.value);
  //   setCurrency(e.target.value);
  // }

  function handleSecondCountry(e) {
    e.preventDefault();
    console.log(e.target.value);
    setSelectedCity(e.target.value);
  }

  const handleGetItem = () => {
    axios
      .post('/cart', cartData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleOnSubmit = () => {};

  React.useEffect(() => {
    setCartData([...cartData, selection]);
  }, [selection]);

  React.useEffect(() => {
    cartData.length > 0 && console.log(cartData.slice(1));
  }, [cartData]);

  React.useEffect(() => {
    data && setCitiesList(data);
  }, [data]);

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
                  display={['none', 'none', null, 'block']}
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
                  value={selectedCity}
                  onChange={handleSecondCountry}
                  mr={1}
                  placeholder={['Select City']}
                >
                  {data &&
                    !loading &&
                    citiesList.map((selectedCity, index) => {
                      return <option key={index}>{selectedCity}</option>;
                    })}
                </Select>
                <Text display={['none', null, null, 'inline']}>?</Text>
                <Button minW={'5rem'} onClick={() => setCartData([])}>
                  Clear Cart
                </Button>
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
            width={['12rem', '17rem', '20rem', null, '25rem']}
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
                Total: (<span className="bold">{currency}</span>)
              </Text>
            </Box>
          </Box>
          {/*<Box*/}
          {/*  css={signWrapper}*/}
          {/*  background={`url(${Item.Sign})`}*/}
          {/*  backgroundSize="cover"*/}
          {/*  width={['12rem', null, '17rem', null, '25rem']}*/}
          {/*>*/}
          {/*</Box>*/}
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
            role={'cart'}
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
                pt={[null, null, '4.4rem', '8.8rem', '10.6rem']}
                height={['7.4rem', null, null, null, null]}
              >
                <GroceryItem
                  name="apple"
                  selectedCity={selectedCity}
                  setSelection={setSelection}
                  component={Item.Apple}
                  fruitHeight={['35px']}
                />
                <GroceryItem
                  name="banana"
                  selectedCity={selectedCity}
                  setSelection={setSelection}
                  component={Item.Banana}
                  fruitHeight={['45px']}
                />
                <GroceryItem
                  name="orange"
                  selectedCity={selectedCity}
                  setSelection={setSelection}
                  component={Item.Orange}
                  fruitHeight={['35px']}
                />
                <GroceryItem
                  name="potato"
                  selectedCity={selectedCity}
                  setSelection={setSelection}
                  component={Item.Potato}
                  fruitHeight={['30px']}
                />
              </Box>
              {/*Fresh stall row 2*/}
              <Box
                css={shelfStyles}
                height={['2.6rem', null, null, null, null]}
                pt={[null, null, null, '3.2rem', '3.7rem']}
              >
                <GroceryItem
                  name="onion"
                  selectedCity={selectedCity}
                  setSelection={setSelection}
                  component={Item.Onion}
                  fruitHeight={['41px']}
                />
                <GroceryItem
                  name="tomato"
                  selectedCity={selectedCity}
                  setSelection={setSelection}
                  component={Item.Tomato}
                  fruitHeight={['47px']}
                />
                <GroceryItem
                  name="bread"
                  selectedCity={selectedCity}
                  setSelection={setSelection}
                  component={Item.Bread}
                  fruitHeight={['35px']}
                />
                <GroceryItem
                  name="bread"
                  selectedCity={selectedCity}
                  setSelection={setSelection}
                  component={Item.Bread}
                  fruitHeight={['35px']}
                />
              </Box>
              {/*Fresh stall row 3*/}
              <Box css={shelfStyles} pt={[null, null, null, '.6rem', '1.6rem']}>
                <GroceryItem
                  name="rice"
                  selectedCity={selectedCity}
                  setSelection={setSelection}
                  component={Item.Rice}
                  fruitHeight={['60px']}
                />
                <GroceryItem
                  name="rice"
                  selectedCity={selectedCity}
                  setSelection={setSelection}
                  component={Item.Rice}
                  fruitHeight={['60px']}
                />
                <GroceryItem
                  name="rice"
                  selectedCity={selectedCity}
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
                pt={[null, null, '2.7rem', '7.2rem', '8.7rem']}
                height={['6rem', null, null, null, null]}
              >
                <GroceryItem
                  name="cheese"
                  selectedCity={selectedCity}
                  setSelection={setSelection}
                  component={Item.Cheese}
                  fruitHeight={['35px']}
                />
                <GroceryItem
                  name="cheese"
                  selectedCity={selectedCity}
                  setSelection={setSelection}
                  component={Item.Cheese}
                  fruitHeight={['35px']}
                />
                <GroceryItem
                  name="eggs"
                  selectedCity={selectedCity}
                  setSelection={setSelection}
                  component={Item.Eggs}
                  fruitHeight={['35px']}
                />
                <GroceryItem
                  name="eggs"
                  selectedCity={selectedCity}
                  setSelection={setSelection}
                  component={Item.Eggs}
                  fruitHeight={['35px']}
                />
                <GroceryItem
                  name="chicken"
                  selectedCity={selectedCity}
                  setSelection={setSelection}
                  component={Item.Chicken}
                  fruitHeight={['53px']}
                />
                <GroceryItem
                  name="meat"
                  selectedCity={selectedCity}
                  setSelection={setSelection}
                  component={Item.Meat}
                  fruitHeight={['53px']}
                />
              </Box>
              {/*Fridge stall row 2*/}
              <Box
                css={shelfStyles}
                height={['3.7rem', null, null, null, null]}
                pt={[null, null, null, '4.3rem', '5.2rem']}
              >
                <Box width="100%" display="flex" justifyContent="center">
                  <GroceryItem
                    name="wine"
                    selectedCity={selectedCity}
                    setSelection={setSelection}
                    component={Item.Wine}
                    fruitHeight={['50px']}
                  />
                  <GroceryItem
                    name="beer"
                    selectedCity={selectedCity}
                    setSelection={setSelection}
                    component={Item.Beer}
                    fruitHeight={['55px']}
                  />
                </Box>
                <Box width="100%" display="flex" justifyContent="center">
                  <GroceryItem
                    name="water bottle"
                    selectedCity={selectedCity}
                    setSelection={setSelection}
                    component={Item.Water}
                    fruitHeight={['55px']}
                  />
                  <GroceryItem
                    name="water bottle"
                    selectedCity={selectedCity}
                    setSelection={setSelection}
                    component={Item.Water}
                    fruitHeight={['55px']}
                  />
                  <GroceryItem
                    name="water bottle"
                    selectedCity={selectedCity}
                    setSelection={setSelection}
                    component={Item.Water}
                    fruitHeight={['55px']}
                  />
                </Box>
                <Box width="100%" display="flex" justifyContent="center">
                  <GroceryItem
                    name="milk"
                    selectedCity={selectedCity}
                    setSelection={setSelection}
                    component={Item.Milk}
                    fruitHeight={['60px']}
                  />
                  <GroceryItem
                    name="milk"
                    selectedCity={selectedCity}
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
