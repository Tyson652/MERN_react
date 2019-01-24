import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import NewsFeedPage from "./pages/NewsFeedPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import NewChallengePage from "./pages/NewChallengePage";
import SubmissionPage from "./pages/SubmissionPage";
import ProfilePage from "./pages/ProfilePage";
import TermsAndConditions from "./pages/TermsAndConditions";


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <div>
              <Switch>
                <Route exact path = "/termsandconditions" component = {TermsAndConditions} />
                <Route exact path = "/portal" component = {MainPage} />
                <Route exact path = "/login" component = {LoginPage} />
                <Route exact path = "/register" component = {RegisterPage} />
                <PrivateRoute exact path = "/profile" component = {ProfilePage} />
                <PrivateRoute exact path = "/home" component = {NewsFeedPage} />
                <PrivateRoute exact path = "/newchallenge" component = {NewChallengePage} />
                <PrivateRoute exact path = "/newsubmission" component = {SubmissionPage} />
              </Switch>
            </div>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;