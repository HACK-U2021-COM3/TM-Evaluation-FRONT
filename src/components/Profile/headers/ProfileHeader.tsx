import React from 'react';
import { Flex } from '@chakra-ui/react';
import NavMenuComponent from 'components/commons/objects/NavMenu';
import HeaderContainerComponent from 'components/commons/layouts/HeaderContainer';

const ProfileHeaderComponent: React.VFC<{user: {name:  string, imageUrl: string}}> = ({user}) =>  {

  return (
    <>
        <HeaderContainerComponent>
            <Flex alignItems={'center'} justify="end">
                <NavMenuComponent user={user} />
            </Flex>
        </HeaderContainerComponent>
    </>
  );
}

export default ProfileHeaderComponent;