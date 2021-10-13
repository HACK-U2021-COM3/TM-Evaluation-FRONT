import React from 'react';
import {HStack, Image, Text, Flex, Box} from '@chakra-ui/react';
import SearchInput from 'components/commons/forms/SearchInput';
import HeaderContainerComponent from 'components/commons/layouts/HeaderContainer';
import { GoogleLogin } from 'react-google-login';
import { GoogleService } from 'lib/services/google/GoogleService';
import { useHistory } from 'react-router-dom';
import {SearchContextValue} from 'lib/contexts/SearchContext'


const HomeGuestHeaderComponent: React.VFC<{
}> = () =>  {
  const history = useHistory()
  const {keyword, searchQuery, handleSearch} = SearchContextValue()
  const handleLogin = async (res: any) => {
    await (new GoogleService()).loginWithGoogle(res)
    history.go(0)
  }
  return (
    <>
        <HeaderContainerComponent>
            <Flex alignItems={'center'}>
                <Image src="/images/logo.png" w="50px" h="50px" />
                <Box mx={"3"}>
                    <SearchInput searchQuery={searchQuery} handleSearch={handleSearch} />
                </Box>
                <Text as={"span"} color="white">キーワード: {keyword}</Text>
            </Flex>
            <HStack>
                <GoogleLogin
                clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
                buttonText="ログイン"
                onSuccess={handleLogin}
                onFailure={(res) => console.error(res)}
                cookiePolicy={'single_host_origin'}
                />
            </HStack>

        </HeaderContainerComponent>
    </>
  );
}

export default HomeGuestHeaderComponent;
