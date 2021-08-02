import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { authContext } from "../auth/authProvider";

export default function NavBar(){
    const auth = useContext(authContext);
    return(
        <div className="navbar">
            <div>
                <Link to="/">TRIVIA-APP</Link>
            </div>
            <div>
            { !auth.isLogged() ?
                <NavLink activeClassName="active" exact to="/">Home</NavLink>
                :
                <>
                <NavLink activeClassName="active" to="/play">Play</NavLink>
                <NavLink activeClassName="active" to="/record">Record</NavLink>
                <button onClick={auth.logout}>Cerrar sesion</button>
                </>
            }

            </div>

        </div>
    )
}