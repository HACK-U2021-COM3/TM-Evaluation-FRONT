import React from 'react';
import { Flex,Heading } from '@chakra-ui/react';
import NavMenuComponent from 'components/commons/objects/NavMenu';
import HeaderContainerComponent from 'components/commons/layouts/HeaderContainer';

const ProfileHeaderComponent: React.VFC = () =>  {

  return (
    <>
        <HeaderContainerComponent>
            <Heading>ここにロゴ</Heading>
            <Flex alignItems={'center'}>
                <NavMenuComponent />
            </Flex>
        </HeaderContainerComponent>
    </>
  );
}

export default ProfileHeaderComponent;