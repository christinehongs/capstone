import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Select,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import * as Item from '../../assets/images';
import { Supermarket } from '../../assets/images';
import { GroceryItem } from '../index';
import { useForm } from 'react-hook-form';
import Stall from '../Stall';
import { ArrowForwardIcon, DeleteIcon } from '@chakra-ui/icons';
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
import useCart from '../../hooks/useCart';

const GroceryStore = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const [selection, setSelection] = React.useState(null);
  const [currency, setCurrency] = React.useState('USD');
  const [selectedCity, setSelectedCity] = React.useState('Medellin, Colombia');
  const [selectedCurrency, setSelectedCurrency] = React.useState('');
  const [currencyData, setCurrencyData] = React.useState([]);
  const [exchangeRate, setExchangeRate] = React.useState();
  const [citiesList, setCitiesList] = React.useState([]);
  // const [formData, setFormData] = React.useState(null);

  const { isLoading: citiesLoading, data: citiesData } = useCities();
  const { isLoading: cartDataLoading, data: cartData } = useCart();

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

  function handleSecondCountry(e) {
    e.preventDefault();
    console.log(e.target.value);
    setSelectedCity(e.target.value);
  }

  const handlePostCartData = () => {
    console.log(cartItems.length);
    if (cartItems.length > 1) {
      axios
        .post(
          'http://localhost:3001/cart',
          JSON.stringify(cartItems.slice(1)),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log('cart is empty');
    }
  };

  const handleOnSubmit = () => {};

  React.useEffect(() => {
    setCartItems([...cartItems, selection]);
  }, [selection]);

  React.useEffect(() => {
    cartItems.length > 0 && console.log(cartItems.slice(1));
  }, [cartItems]);

  React.useEffect(() => {
    console.log('cities:', citiesLoading);
    citiesData && setCitiesList(citiesData);
  }, [citiesData, citiesLoading]);

  React.useEffect(() => {
    console.log('cart:', cartDataLoading);
    cartData && console.log(cartData[0]);
  }, [cartData, cartDataLoading]);

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
                  value={selectedCity}
                  onChange={handleSecondCountry}
                  mr={1}
                >
                  {citiesData &&
                    !citiesLoading &&
                    citiesList.map((selectedCity, index) => {
                      return <option key={index}>{selectedCity}</option>;
                    })}
                </Select>
                <Text display={['none', null, null, 'inline']}>?</Text>
                <Button minW={'5rem'} onClick={() => setCartItems([])}>
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
            // width={['12rem', null, '17rem', null, '25rem']}
            // width="100%"
            height="100%"
            minW={[null, null, null, '480px']}
            // maxW={['200px', null, '500px', '600px']}
            maxH={['150px', null, '400px', '500px']}
          >
            {cartItems.length > 1 ? (
              <DeleteIcon
                pos="absolute"
                top="40%"
                right="7%"
                zIndex={2}
                onClick={() => setCartItems([])}
                opacity={cartItems.length === 1 ? 0.4 : 1}
                cursor={cartItems.length > 1 ? 'pointer' : 'none'}
              />
            ) : null}

            <Box
              pos="relative"
              pb={3}
              className="sign"
              flexDir="column"
              width="80%"
              height="50%"
              mb={6}
              ml={[-3]}
              borderRadius="5px"
            >
              {cartDataLoading ? (
                <Image src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/68c512cd-5771-4700-b611-d8bfe279847d/dc3jnaf-5f55762d-dcfe-4f1c-8ce2-6f59140b54cd.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY4YzUxMmNkLTU3NzEtNDcwMC1iNjExLWQ4YmZlMjc5ODQ3ZFwvZGMzam5hZi01ZjU1NzYyZC1kY2ZlLTRmMWMtOGNlMi02ZjU5MTQwYjU0Y2QuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MboqVNsrmsomDBGyOAEUWxN-oTX3SCewmf48jh8G8X0" />
              ) : (
                <Table>
                  <Thead
                    pos="sticky"
                    top={0}
                    bg="#f6dfc2"
                    boxShadow="0 1px 2px 0 rgba(0, 0, 0, 0.5)"
                  >
                    <Tr>
                      <Th>City, Country</Th>
                      <Th>Price</Th>
                    </Tr>
                  </Thead>
                  <Tbody boxShadow="inset 0 1px 2px 0 rgba(0, 0, 0, 0.8)">
                    {cartData
                      ? cartData.map((item, index) => (
                          <Tr key={index}>
                            <Td>{item.city}</Td>
                            <Td>${item.price}</Td>
                          </Tr>
                        ))
                      : null}
                  </Tbody>
                </Table>
              )}
              <Text>
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
            onClick={handlePostCartData}
            role={'cart'}
            className="cart"
            src={Item.Cart}
            alt="cart"
            zIndex="3"
            maxW={['150px', '230px', null, null, '20rem']}
            cursor={cartItems.length > 1 ? 'pointer' : 'default'}
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
                  name="apples"
                  selectedCity={selectedCity}
                  setSelection={setSelection}
                  component={Item.Apple}
                  fruitHeight={['35px']}
                />
                <GroceryItem
                  name="bananas"
                  selectedCity={selectedCity}
                  setSelection={setSelection}
                  component={Item.Banana}
                  fruitHeight={['45px']}
                />
                <GroceryItem
                  name="oranges"
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
                  name="onions"
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
