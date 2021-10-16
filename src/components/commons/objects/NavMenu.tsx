import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Divider,
} from '@chakra-ui/react';
import { GoogleService } from "lib/services/google/GoogleService";
import { User } from "lib/models/user";
import { UserContext } from "lib/contexts/AuthContext";

const NavMenu: React.VFC<{user: User}> = ({user}) => {
    const {handleSetUser} = useContext(UserContext)
    const handleLogout = async () => {
      await (new GoogleService()).logoutWithGoogle()
      await handleSetUser(null)
    }
    return(
        <Menu>
        <MenuButton
          as={Button}
          rounded={'full'}
          variant={'link'}
          cursor={'pointer'}
          minW={0}>
          <Avatar
            size={'sm'}
            src={user?.imageUrl}
          />
        </MenuButton>
        <MenuList>
        <MenuItem>
        <Link to="/profile">
          プロフィール
        </Link>
        </MenuItem>
        <Divider />
          <MenuItem onClick={handleLogout}>ログアウト</MenuItem>
        </MenuList>
      </Menu>
    );
}

export default NavMenu;