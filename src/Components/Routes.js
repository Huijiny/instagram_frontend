import React from "react";
import {Route, Switch} from "react-router-dom" ;
import PropTypes from "prop-types";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";
import Explore from "../Routes/Explore";
import Search from "../Routes/Search";
import Profile from "../Routes/Profile";

const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Feed}/>
        <Route expact path="/explore" component={Explore}/>
        <Route expact path="/search" component={Search}/>
        <Route expact path="/profile" component={Profile}/>
    </Switch>
);

const LoggedOutRoutes = () => (
    <Switch>
    <Route exact path="/" component={Auth}/>
    </Switch>
);

const AppRouter  = ({isLoggedIn}) => (
    isLoggedIn ? <LoggedInRoutes/> : <LoggedOutRoutes/> 
 );

 AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

 export default AppRouter;