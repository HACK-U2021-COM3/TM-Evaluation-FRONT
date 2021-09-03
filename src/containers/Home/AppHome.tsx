import React from "react";
import AppHeader from "../../components/commons/layouts/AppHeader";
import HomeContent from "./HomeContent";

const AppHome: React.VFC = () => {
    return(
        <>
        <AppHeader />
        <HomeContent />
        </>
    );
}

export default AppHome;