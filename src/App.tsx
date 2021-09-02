import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";

const App: React.VFC = () => {
    return(
       <div>
           <Switch>
               <Route path="/" component={Home}  />
           </Switch>
       </div>
    )
}

export default App;
