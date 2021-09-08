import React, {useContext} from "react";
import { UserContext } from "lib/contexts/AuthContext";
import { Redirect, Route, Switch } from "react-router-dom";
import ProfileComponent from "components/Profile";
import HomeContentComponent from "components/Home/HomeContent";


const App: React.VFC = () => {
    const {user} = useContext(UserContext)
    return(
       <div>
           <Switch>
               {!user ? (
                <>
                    <Route path="/" component={HomeContentComponent} exact  />
                    <Redirect to="/" />
                </>
               ): (
                <>
                    <Route path="/" exact>
                        <Redirect to={`/profile`} />
                    </Route>
                    <Route path="/profile" component={ProfileComponent} exact />
                    <Route path="/plans/:plan_id" component={HomeContentComponent} exact />
                </>
               )}
               
           </Switch>
       </div>
    )
}

export default App;
