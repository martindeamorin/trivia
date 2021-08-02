import "../styles/HomePage.css"
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import {authContext} from "../auth/authProvider";

export default function HomePage(){

    const auth = useContext(authContext);
    const history = useHistory();

    let handleNameChange = (e) => {
        e.preventDefault()
        auth.login(e.target.children[0].value)
        return history.push("/play")
    }

    return(
        <div>
            <h1>¡Introduce your name and proceed to play!</h1>
            <form className="homeForm" onSubmit={handleNameChange}>
                <input type="text" name="playerName"></input>
                <button type="submit">Let's play</button>
            </form>

        </div>
    )
}