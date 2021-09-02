import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Button,
  useToast
} from '@chakra-ui/react';
import SearchInputComponent from '../forms/SearchInput';
import TitleInputComponent from '../forms/TitleInput';
import NavMenuComponent from '../objects/NavMenu';

const AppLoginHeader: React.VFC = () =>  {
  const toast = useToast()

  return (
    <>
      <Box shadow={"sm"} border="1px" borderColor="gray.200" px={4}>
        <Flex maxW="1920px" mx="auto" h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={12} alignItems={'center'}>
            <TitleInputComponent />
            <SearchInputComponent />
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              colorScheme="blue"
              mx="5"
              onClick={() => toast({
                title: "保存しました",
                position: "top",
                duration: 9000,
                isClosable: true,
              })}
            >
              保存する
            </Button>
            <NavMenuComponent />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default AppLoginHeader;