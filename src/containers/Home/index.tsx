import React from "react";
import AppLoginHome from "./AppLoginHome";
import AppHome from "./AppHome";

const Home: React.VFC= () => {
    const isLogin = true
    return(!isLogin ? <AppHome /> : <AppLoginHome />);
}

export default Home;
