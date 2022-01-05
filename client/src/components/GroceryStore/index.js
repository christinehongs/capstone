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
import styled from '@emotion/styled';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { css } from '@emotion/react';
import * as Item from '../../assets/images';
import { Supermarket } from '../../assets/images';
import { GroceryItem } from '../index';
import { countryAcronyms } from '../../data/countryAcronyms';
import { useForm } from 'react-hook-form';
import Stall from '../Stall';
import { InfoIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';

const shelfStyles = css`
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

const GroceryStoreWrapper = styled(Box)`
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

const formWrapper = css`
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

const signWrapper = css`
  position: relative;
  //top: 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  aspect-ratio: 8 / 7;

  .sign {
    box-shadow: inset 0 1px 4px 0 rgba(0, 0, 0, 0.3);
    background-color: #EDBE85;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
  }
`;


const GroceryStore = () => {

  const [selection, setSelection] = React.useState('');
  const [firstCountry, setFirstCountry] = React.useState('');
  const [secondCountry, setSecondCountry] = React.useState('');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function handleFirstCountry(e) {
    e.preventDefault();
    console.log(e.target.value);
    setFirstCountry(e.target.value);
  }

  function handleSecondCountry(e) {
    e.preventDefault();
    console.log(e.target.value);
    setSecondCountry(e.target.value);
  }

  const handleOnSubmit = () => {};

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
                <FormLabel display={['none', null, null, 'block']} htmlFor="firstCountry" mr={2}>
                  I am from
                </FormLabel>
                <Select
                  {...register('initialCountry')}
                  maxW={["200px"]}
                  id="initialCountry"
                  placeholder="Select country"
                  onChange={handleFirstCountry}
                  mr={1}
                >
                  {countryAcronyms.map((data, index) => {
                    return <option key={index}>{data.country}</option>;
                  })}
                </Select>
                <Text display={['none', null, null, 'inline']}>.</Text>
                <ArrowForwardIcon display={['block', null, null, 'none']}/>
                <FormLabel display={['none', null, null, 'block']} htmlFor="secondCountry" ml={2} mr={2}>
                  How much would my groceries cost in
                </FormLabel>
                <Select
                  {...register('secondaryCountry')}
                  maxW={["200px"]}
                  id="secondaryCountry"
                  placeholder="Select country"
                  onChange={handleSecondCountry}
                  mr={1}
                >
                  {countryAcronyms.map((data, index) => {
                    return <option key={index}>{data.country}</option>;
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
          left={['2rem', null, null, "12.45rem"]}
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
              padding={5}
              className="sign"
              width="80%"
              height="50%"
              mb={6}
              ml={[-3]}
              borderRadius="5px"
            >
              <Text bg='#EDBE85'>
                Currently shopping in:
                <b>{secondCountry}!</b>
                <br></br>
                Total cost in cart:
                <br></br>(<b>{firstCountry}</b>): (first country currency(acryonym)
                total)
                <br></br>(<b>{secondCountry}</b>): (second country currency(acryonym)
                total)
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
                <b>{selection}</b> <Link to="/item-details">(More info)<InfoIcon/></Link>
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
            maxW={['150px', '200px', null, null, '20rem']}
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
              <Box css={shelfStyles} pt={'7.6rem'}>
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
              <Box css={shelfStyles} pt={'0.9rem'}>
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
              <Box css={shelfStyles} pt={'1.8rem'}>
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
              <Box css={shelfStyles} pt={'6rem'}>
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
              <Box css={shelfStyles} pt={'1.8rem'}>
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
