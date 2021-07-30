import { NavLink, Link } from "react-router-dom";

export default function NavBar(){
    return(
        <div className="navbar">
            <div>
                <Link to="/">TRIVIA-APP</Link>
            </div>
            <div>
            <NavLink activeClassName="active" exact to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/play">Play</NavLink>
            <NavLink activeClassName="active" to="/record">Record</NavLink>
            </div>

        </div>
    )
}