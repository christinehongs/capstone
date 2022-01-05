import React from 'react'
import {
    Box,
    VStack,
    Center,
    Wrap,
    WrapItem,

  } from '@chakra-ui/react';
import Navbar from '../components/Navbar'


function ItemDetails() {
    return (
    <>
        <Navbar/>
        <Wrap bg='#EEC396' justify='center' overflow='hidden' position='absolute' width='100%' height='93.2vh'>
            <VStack pt='2rem'>
                <WrapItem  pr='5rem' pb='2rem'>
                    <Center rounded='md' w='35vw' h='15vh' bg='#AE7B5B'>
                        <Box boxShadow='dark-lg' p='6' rounded='md' w='90%' h='60%'bg='#FCF7EE' >
                            <Center color='black !important'>
                                <b>Selected item</b>
                            </Center>
                        </Box>
                    </Center>
                </WrapItem>
                <WrapItem pr='5rem'>
                    <Center rounded='md' w='35vw' h='65vh' bg='#AE7B5B'>
                        <Box boxShadow='dark-lg' p='6' rounded='md' w='85%' h='85%'bg='#FCF7EE' >
                            <Center color='black !important'>
                                <div>
                                    <ol>
                                        <li>item </li>
                                        <li>item </li>
                                    </ol>
                                </div>
                            </Center>
                        </Box>
                    </Center>
                </WrapItem>
            </VStack>
            <WrapItem pt='2rem'>
                <Center rounded='md' w='35vw' h='84vh' bg='#AE7B5B'>
                    <Box boxShadow='dark-lg' p='6' rounded='md' w='85%' h='88%'bg='#FCF7EE' >
                        <Center color='black !important'>
                            information
                        </Center>
                    </Box>
                </Center>
            </WrapItem>
        </Wrap>
    </>
    )
}

export default ItemDetails
