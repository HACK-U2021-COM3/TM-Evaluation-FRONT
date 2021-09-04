import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomeLoginComponent from "components/Home/HomeLogin";
import HomeGuestComponent from "components/Home/HomeGuest";
import ProfileComponent from "./components/Profile";

const App: React.VFC = () => {
    const isLogin = true
    const user_id = "aaaaaa"
    return(
       <div>
           <Switch>
               {!isLogin ? (
                <>
                    <Route path="/" component={HomeGuestComponent} exact  />
                    <Redirect to="/" />
                </>
               ): (
                <>
                    <Route path="/" exact>
                        <Redirect to={`/${user_id}`} />
                    </Route>
                    <Route path="/:user_id" component={ProfileComponent} exact />
                    <Route path="/:user_id/plans/:plan_id" component={HomeLoginComponent} exact />
                </>
               )}
               
           </Switch>
       </div>
    )
}

export default App;
