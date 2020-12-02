import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import IndexContainer from "./IndexContainer"
import LoginContainer from "./LoginContainer"
import RegisterContainer from "./RegisterContainer"
import DashboardContainer from "./DashboardContainer"
import MyappoinmentContainer from "./MyappoinmentContainer"
import CalendarContainer from "./CalendarContainer"





class AppContainer extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={IndexContainer} />
                <Route path="/login" exact component={LoginContainer} />
                <Route path="/register" exact component={RegisterContainer} />
                <Route path="/dashboard" exact component={DashboardContainer} />
                <Route path="/myappoinment" exact component={MyappoinmentContainer} />
                <Route path="/calendar" exact component={CalendarContainer} />


            </Router>
        );
    }
}

export default AppContainer;
