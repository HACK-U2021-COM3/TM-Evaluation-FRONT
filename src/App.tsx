import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./containers/commons/layouts/Header";
import Home from "./containers/Home";
import Profile from "./containers/Profile";

const App: React.VFC = () => {
    const isLogin = true
    return(
       <div>
           <Header isLogin={isLogin} />
           <Switch>
               <Route path="/" component={Home} exact  />
               <Route path="/:user_id" component={Profile} />
               <Redirect to="/" />
           </Switch>
       </div>
    )
}

export default App;
