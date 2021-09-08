import {Link, useHistory} from "react-router-dom";
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

const NavMenu: React.VFC<{user: {name:  string, imageUrl: string}}> = ({user}) => {
  const history = useHistory()
    const handleLogout = async () => {
      await (new GoogleService()).logoutWithGoogle()
      history.go(0)
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
            src={user.imageUrl}
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