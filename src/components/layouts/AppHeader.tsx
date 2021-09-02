import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';


const AppHeader: React.VFC = () =>  {
  return (
    <>
      <Box shadow={"sm"} border="1px" borderColor="gray.200" px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <InputGroup>
            <InputLeftElement pointerEvents="none" children={<SearchIcon color="gray.300" />} />
            <Input rounded="3xl" bgColor="white" w="520px" type="text" placeholder="search..." />
            </InputGroup>
          </HStack>
          <HStack>
              <Button colorScheme="blue">ログイン</Button>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}

export default AppHeader;