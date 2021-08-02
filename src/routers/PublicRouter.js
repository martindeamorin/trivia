import { Fragment, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { authContext } from '../auth/authProvider';

export default function PublicRouter({component: Component, ...rest}) {
    const auth = useContext(authContext);
    
    return (
       <Route {...rest}> 
           {auth.isLogged() ?  <Redirect to="/record"></Redirect>  : <Component/>}
       </Route>
    )
}
