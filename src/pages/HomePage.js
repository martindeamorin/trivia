import "../styles/HomePage.css"
import { useDispatch } from "../store/StoreProvider"
import { Link, Redirect, useHistory } from "react-router-dom";

export default function HomePage(){

const dispatch = useDispatch();
const history = useHistory();

let handleNameChange = (e) => {
    e.preventDefault()
    console.log(e.target.children[0].value)
    dispatch({type : "CHANGE_USER_NAME", payload : {playerName : e.target.children[0].value}})
    return history.push("/play")
}

    return(
        <div>
            <h1>¡Introduce your name and procede to play!</h1>
            <form className="homeForm" onSubmit={handleNameChange}>
                <input type="text" name="playerName"></input>
                <button type="submit">Let's play</button>
            </form>

        </div>
    )
}