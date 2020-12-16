import React, {Component} from "react";
import SAANWizardStep4Component from "./SAANWizardStep4Component";

class SAANWizardStep4Container extends Component{
  constructor(props) {
    super(props);
    this.state={
      firstName:"",
      lastName:"",
      email:"",
      phone:"",
    }
    this.onFirstnameChange = this.onFirstnameChange.bind(this);
    this.onLastnameChange = this.onLastnameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
  }

  onFirstnameChange(e) {
      this.setState({
          firstName: e.target.value,
      });
      localStorage.setItem("PickedFirstName",e.target.value);
  }

  onLastnameChange(e) {
      this.setState({
          lastName: e.target.value,
      });
      localStorage.setItem("PickedLastName",e.target.value);

  }

  onEmailChange(e) {
      this.setState({
          email: e.target.value,
      });
      localStorage.setItem("PickedEmail",e.target.value);

  }

  onPhoneChange(e) {
      this.setState({
          phone: e.target.value,
      });
      localStorage.setItem("PickedPhone",e.target.value);

  }

  render(){
    const { firstName, lastName, email, phone }=this.state;
    return(
      <>
        <SAANWizardStep4Component
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          onFirstnameChange={this.onFirstnameChange}
          onLastnameChange={this.onLastnameChange}
          onEmailChange={this.onEmailChange}
          onPhoneChange={this.onPhoneChange}
        />
      </>
    )
  };
}


export default SAANWizardStep4Container;
