import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomeLoginComponent from "components/Home/HomeLogin";
import HomeGuestComponent from "components/Home/HomeGuest";
import ProfileComponent from "components/Profile";
import { useContext } from "react";
import { UserContext } from "lib/contexts/AuthContext";

const App: React.VFC = () => {
    const {user} = useContext(UserContext)
    console.log(user)
    const user_id = "aaaa"
    return(
       <div>
           <Switch>
               {!user ? (
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
