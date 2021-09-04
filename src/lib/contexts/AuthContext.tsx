import React, {createContext} from "react";
import { useContext } from "react";

type userContextValue = {
    user: {name: string, imageUrl: string},
}

export const UserContext = createContext<userContextValue>({
    user: JSON.parse(`${localStorage.getItem("current_user")}`),
})

export const AuthContext: React.FC = ({children}) => {
    const user = useContext(UserContext)
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}
