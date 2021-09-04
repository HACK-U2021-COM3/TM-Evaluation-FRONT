import React, {useContext} from "react";
import { UserContext } from "lib/contexts/AuthContext";
import HomeLoginHeaderComponent from "components/Home/headers/HomeLoginHeader";
import HomeContentComponent from "components/Home/HomeContent";

const HomeLoginContent: React.VFC = () => {
    const {user} = useContext(UserContext)
    return(
        <>
        <HomeLoginHeaderComponent user={user} />
        <HomeContentComponent />
        </>
    );
}

export default HomeLoginContent;