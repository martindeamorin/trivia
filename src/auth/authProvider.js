import { createContext, useState } from 'react';
import { useDispatch } from '../store/StoreProvider';

export const authContext = createContext();

export default function AuthProvider({children}){
    const [user, setUser] = useState(undefined);
    const dispatch = useDispatch();

    const contextValue = {
        user,
        login : (username) => {
            setUser(username)
        },
        logout : () => {
            dispatch({type: "DELETE_GAME_SCORE"})
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

