import React from 'react';
import {
  Flex,
  HStack,
  Button,
  useToast
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import SearchInputComponent from 'components/commons/forms/SearchInput';
import TitleInputComponent from 'components/commons/forms/TitleInput';
import NavMenuComponent from 'components/commons/objects/NavMenu';
import HeaderContainerComponent from 'components/commons/layouts/HeaderContainer';

const HomeLoginHeaderComponent: React.VFC<{
  user: {name:  string, imageUrl: string},
  searchQuery: string,
  handleSearch: (e: any) => void
}> = ({user, searchQuery, handleSearch}) =>  {
  const toast = useToast()
  return (
    <>
        <HeaderContainerComponent>
            <HStack spacing={12} alignItems={'center'}>
                <TitleInputComponent />
                <SearchInputComponent searchQuery={searchQuery} handleSearch={handleSearch} />
            </HStack>
            <Flex alignItems={'center'}>
                <Button
                leftIcon={<CheckIcon />} 
                variant="outline"
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
                <NavMenuComponent user={user} />
            </Flex>
        </HeaderContainerComponent>
    </>
  );
}

export default HomeLoginHeaderComponent;