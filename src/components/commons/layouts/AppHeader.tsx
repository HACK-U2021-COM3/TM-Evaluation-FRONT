import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Button,
} from '@chakra-ui/react';
import SearchInput from '../forms/SearchInput';


const AppHeader: React.VFC = () =>  {
  return (
    <>
      <Box shadow={"sm"} border="1px" borderColor="gray.200" px={4}>
        <Flex maxW="1920px" mx="auto" h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <SearchInput />
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