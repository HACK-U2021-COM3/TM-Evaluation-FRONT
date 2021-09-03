import React from "react";
import AppHeader from "../../../components/commons/layouts/AppHeader";
import AppLoginHeader from "../../../components/commons/layouts/AppLoginHeader";

const Header: React.VFC<{isLogin: boolean}> = ({isLogin}) => (!isLogin ? <AppHeader /> : <AppLoginHeader />);

export default Header;