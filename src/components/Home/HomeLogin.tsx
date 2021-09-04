import React from "react";
import HomeLoginHeaderComponent from "components/Home/headers/HomeLoginHeader";
import HomeContentComponent from "components/Home/HomeContent";

const HomeLoginComponent: React.VFC = () => {
    return(
        <>
        <HomeLoginHeaderComponent />
        <HomeContentComponent />
        </>
    );
}

export default HomeLoginComponent;