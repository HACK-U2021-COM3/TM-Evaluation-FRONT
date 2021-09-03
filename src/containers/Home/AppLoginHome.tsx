import React from "react";
import AppLoginHeader from "../../components/commons/layouts/AppLoginHeader";
import HomeContent from "./HomeContent";

const AppLoginHome: React.VFC = () => {
    return(
        <>
        <AppLoginHeader />
        <HomeContent />
        </>
    );
}

export default AppLoginHome;