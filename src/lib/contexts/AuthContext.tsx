import React, {createContext, useState} from "react";
import {User} from "lib/models/user"

type userContextValue = {
    user: User,
    handleSetUser: (user: any) => void,
}

export const UserContext = createContext<userContextValue>({
    user: null,
    handleSetUser: () => undefined,
})

export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User>(null);
    const handleSetUser = (user: any) => {
        setUser(user)
    }

    return (
        <UserContext.Provider value={{user, handleSetUser}}>
            {children}
        </UserContext.Provider>
    );
}
