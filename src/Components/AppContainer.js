import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import IndexContainer from "./IndexContainer"
import LoginContainer from "./LoginContainer"
import RegisterContainer from "./RegisterContainer"
import DashboardContainer from "./DashboardContainer"
import MyappoinmentContainer from "./MyappoinmentContainer"
import SAANWizardStep1Container from "./SAANWizardStep1Container"
import SAANWizardStep2Container from "./SAANWizardStep2Container"
import SAANWizardStep3Container from "./SAANWizardStep3Container"
import SAANWizardStep4Container from "./SAANWizardStep4Container"
import SAANWizardStep5Container from "./SAANWizardStep5Container"
import ContactContainer from "./ContactContainer"




class AppContainer extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={IndexContainer} />
                <Route path="/login" exact component={LoginContainer} />
                <Route path="/register" exact component={RegisterContainer} />
                <Route path="/dashboard" exact component={DashboardContainer} />
                <Route path="/myappoinment" exact component={MyappoinmentContainer} />
                <Route path="/set-an-appoinment-step-1" exact component={SAANWizardStep1Container} />
                <Route path="/set-an-appoinment-step-2" exact component={SAANWizardStep2Container} />
                <Route path="/set-an-appoinment-step-3" exact component={SAANWizardStep3Container} />
                <Route path="/set-an-appoinment-step-4" exact component={SAANWizardStep4Container} />
                <Route path="/set-an-appoinment-step-5" exact component={SAANWizardStep5Container} />
                <Route path="/contact-us" exact component={ContactContainer} />




            </Router>
        );
    }
}

export default AppContainer;
