import React, {Component} from "react";
import SAANWizardStep5Component from "./SAANWizardStep5Component";
import {postCreateAppointment} from "../API/AppointmentAPI";

class SAANWizardStep5Container extends Component{
  constructor(props) {
    super(props);
    this.state={
      pickedDate: new Date(localStorage.getItem("PickedDate")),
      pickedType: localStorage.getItem("PickedType"),
      pickedTime: localStorage.getItem("PickedTime"),
      pickedFirstName:localStorage.getItem("PickedFirstName"),
      pickedEmail: localStorage.getItem("PickedEmail"),
    }
    this.onSubmitClick=this.onSubmitClick.bind(this);
    this.onSuccessCallbackFunc=this.onSuccessCallbackFunc.bind(this);
    this.onFailureCallbackFunc=this.onFailureCallbackFunc.bind(this);
  }

  onSubmitClick(e) {
    postCreateAppointment(this.state,this.onSuccessCallbackFunc,this.onFailureCallbackFunc);

  }

  onSuccessCallbackFunc(e) {
    alert("Appoinment Set");
    this.props.history.push("/myappoinment");

  }

  onFailureCallbackFunc(e) {
    alert("Appoinment Fail")

  }

  render(){
    const {pickedDate, pickedType, pickedTime, pickedFirstName, pickedEmail} =this.state;
    return(
      <>
        <SAANWizardStep5Component
          pickedDate={pickedDate}
          pickedType={pickedType}
          pickedTime={pickedTime}
          pickedFirstName={pickedFirstName}
          pickedEmail={pickedEmail}
          onSubmitClick={this.onSubmitClick}
        />
      </>
    )
  };
}


export default SAANWizardStep5Container;
