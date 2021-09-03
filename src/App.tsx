import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AppLoginHome from "./containers/Home/AppLoginHome";
import AppHome from "./containers/Home/AppHome";
import Profile from "./containers/Profile";

const App: React.VFC = () => {
    const isLogin = true
    const user_id = "aaaaaa"
    return(
       <div>
           <Switch>
               {!isLogin ? (
                <>
                    <Route path="/" component={AppHome} exact  />
                    <Redirect to="/" />
                </>
               ): (
                <>
                    <Route path="/" exact>
                        <Redirect to={`/${user_id}`} />
                    </Route>
                    <Route path="/:user_id" component={Profile} exact />
                    <Route path="/:user_id/plans/:plan_id" component={AppLoginHome} exact />
                </>
               )}
               
           </Switch>
       </div>
    )
}

export default App;
