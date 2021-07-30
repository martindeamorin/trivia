import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import GamePage from "../pages/GamePage";
import HomePage from "../pages/HomePage";
import RecordPage from "../pages/RecordPage";

export default function AppRouter(){
    return(
    <BrowserRouter>
        <NavBar/>
        <div className="bodyContainer">

        <Switch>
            <Route path="/play" component={GamePage}/>
            <Route path="/record" component={RecordPage}/>
            <Route exact path="/" component={HomePage}/>
            <Route path="*"><h1>¡Ups, something went wrong!</h1></Route>
        </Switch>
        </div>
    </BrowserRouter>
    )
}