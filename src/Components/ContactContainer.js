import React, { Component } from "react";
import ContactComponent from "./ContactComponent";
import { postLogin } from "../API/LoginAPI"


class ContactContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <ContactComponent
            />
        );
    }
}


export default ContactContainer;
