import React from 'react';
import {
  Box,
  Flex,
  Heading,
} from '@chakra-ui/react';
import NavMenuComponent from '../objects/NavMenu';

const AppProfileHeader: React.VFC = () =>  {

  return (
    <>
      <Box shadow={"sm"} border="1px" borderColor="gray.200" px={4}>
        <Flex maxW="1920px" mx="auto" h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Heading>ここにロゴ</Heading>
          <Flex alignItems={'center'}>
            <NavMenuComponent />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default AppProfileHeader;