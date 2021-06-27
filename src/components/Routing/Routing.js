import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from '../Login/Login';
import NewUser from '../SignUp/NewUser';
import Home from '../Home/Home';
import UserEntered from '../Home/ForNewUser'
import LandingPage from '../LandingPage/LandingPage';



const Routing = (props) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <Login onLogin={props.onLogin} />
          </Route>
          <Route path="/welcome">
            <Home />
          </Route>
          <Route path="/signUp">
            <NewUser onSignUp={props.onSignUp} />
          </Route>
          <Route path="/fornewUser">
            <UserEntered />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default Routing;
