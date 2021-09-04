import React from "react";
import HomeGuestHeaderComponent from "components/Home/headers/HomeGuestHeader";
import HomeContentComponent from "components/Home/HomeContent";


const HomeGuestComponent: React.VFC = () => {
    return(
        <>
        <HomeGuestHeaderComponent />
        <HomeContentComponent />
        </>
    );
}

export default HomeGuestComponent;