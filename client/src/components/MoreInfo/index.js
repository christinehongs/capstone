import React from 'react';
import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const MoreInfo = ({ isOpen, onClose, selection, itemsList }) => {
  React.useEffect(() => {
    console.log(itemsList);
  }, [itemsList]);
  return (
    <Modal
      blockScrollOnMount={false}
      isOpen={isOpen}
      onClose={onClose}
      size="4xl"
      positon="relative"
      boxSizing="border-box"
      overflow="hidden"
    >
      <ModalOverlay />
      <ModalContent overflow="hidden" height="100%" maxH="880px">
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          positon="relative"
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          flexDir={['vertical', null, null, 'horizontal']}
          height="100%"
          bg="#eec396"
          p={6}
        >
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
          >
            <Box
              // minH={['10rem']}
              borderRadius={8}
              p={5}
              shadow="large"
              bg="#ae7b5b"
              width="100%"
              height="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDir="column"
              mx={3}
              mb={4}
            >
              <Box
                shadow="large"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius={8}
                width="100%"
                height="100%"
                bg="white"
                p={6}
              >
                <Text>Selected Item: {selection}</Text>
              </Box>
            </Box>
            <Box
              mt={4}
              borderRadius={8}
              p={5}
              shadow="large"
              bg="#ae7b5b"
              width="100%"
              height="100%"
            >
              <Box
                shadow="large"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius={8}
                width="100%"
                height="100%"
                bg="white"
                p={6}
              >
                <Table>
                  <Thead>
                    <Tr>
                      <Th>City, Country</Th>
                      <Th>Price</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {itemsList
                      ? itemsList.map((item, index) => (
                          <Tr key={index}>
                            <Th>{item.city}</Th>
                            <Th>{item.price}</Th>
                          </Tr>
                        ))
                      : null}
                  </Tbody>
                </Table>
              </Box>
            </Box>
          </Box>
          <Box
            // minH={['10rem']}
            mx={3}
            borderRadius={8}
            p={5}
            shadow="large"
            bg="#ae7b5b"
            width="100%"
            height="100%"
          >
            <Box
              shadow="large"
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius={8}
              width="100%"
              height="100%"
              bg="white"
              p={6}
            >
              <Text>Selected Item:</Text>
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MoreInfo;
