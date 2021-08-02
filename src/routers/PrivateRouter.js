import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { authContext } from "../auth/authProvider";

export default function PrivateRouter({component: Component, ...rest}){
    const auth = useContext(authContext);
    
    return(
        <Route {...rest}>
            {auth.isLogged() ? <Component /> : <Redirect to="/"/>}
        </Route>
    )


}