import React, {useContext, useEffect} from "react";
import { UserContext } from "lib/contexts/AuthContext";
import { Redirect, Route, Switch, useHistory} from "react-router-dom";
import ProfileComponent from "components/Profile";
import HomeContentComponent from "components/Home/HomeContent";



const App: React.VFC = () => {
    const history = useHistory()
    const {user, handleSetUser} = useContext(UserContext)
    useEffect(() => {
        const current_user = localStorage.getItem("current_user")
        if(current_user !== null) {
            handleSetUser(JSON.parse(current_user))
        }
    }, [])
    useEffect(() => {
        if(user !== null) {
            history.push("/profile")
        }
    }, [user])
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
