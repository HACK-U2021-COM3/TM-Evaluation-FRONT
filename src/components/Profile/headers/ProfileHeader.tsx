import React from 'react';
import { Image } from '@chakra-ui/react';
import NavMenuComponent from 'components/commons/objects/NavMenu';
import HeaderContainerComponent from 'components/commons/layouts/HeaderContainer';

const ProfileHeaderComponent: React.VFC<{user: {name:  string, imageUrl: string}}> = ({user}) =>  {

  return (
    <>
        <HeaderContainerComponent>
          <Image src="/images/logo.png" w="50px" h="50px" />
          <NavMenuComponent user={user} />
        </HeaderContainerComponent>
    </>
  );
}

export default ProfileHeaderComponent;