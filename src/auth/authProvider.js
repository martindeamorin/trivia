import { createContext, useState } from 'react';

export const authContext = createContext();

export default function AuthProvider({children}){
    const [user, setUser] = useState(undefined);

    const contextValue = {
        user,
        login : (username) => {
            setUser(username)
        },
        logout : () => {
            setUser(undefined)
        },
        isLogged : () => {
            return user ? true : false;
        }
    }

    return(
        <authContext.Provider value={contextValue}>
            {children}
        </authContext.Provider>
    )
}

