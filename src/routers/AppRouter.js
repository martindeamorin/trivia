import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
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
            <PrivateRouter path="/play" component={GamePage}/>
            <PrivateRouter path="/record" component={RecordPage}/>
            <PublicRouter exact path="/" component={HomePage}/>
            <Route path="*"><h1>¡Ups, something went wrong!</h1></Route>
        </Switch>
        </div>
    </BrowserRouter>
    )
}