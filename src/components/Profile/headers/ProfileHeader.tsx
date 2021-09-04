import React from 'react';
import { Flex,Heading } from '@chakra-ui/react';
import NavMenuComponent from 'components/commons/objects/NavMenu';
import HeaderContainerComponent from 'components/commons/layouts/HeaderContainer';

const ProfileHeaderComponent: React.VFC<{user: {name:  string, imageUrl: string}}> = ({user}) =>  {

  return (
    <>
        <HeaderContainerComponent>
            <Heading>ここにロゴ</Heading>
            <Flex alignItems={'center'}>
                <NavMenuComponent user={user} />
            </Flex>
        </HeaderContainerComponent>
    </>
  );
}

export default ProfileHeaderComponent;