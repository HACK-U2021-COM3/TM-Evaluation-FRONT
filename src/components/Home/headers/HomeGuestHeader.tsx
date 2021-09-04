import React from 'react';
import { HStack,Button } from '@chakra-ui/react';
import SearchInput from 'components/commons/forms/SearchInput';
import HeaderContainerComponent from 'components/commons/layouts/HeaderContainer';


const HomeGuestHeaderComponent: React.VFC = () =>  {
  return (
    <>
        <HeaderContainerComponent>
            <HStack spacing={8} alignItems={'center'}>
                <SearchInput />
            </HStack>
            <HStack>
                <Button colorScheme="blue">ログイン</Button>
            </HStack>

        </HeaderContainerComponent>
    </>
  );
}

export default HomeGuestHeaderComponent;