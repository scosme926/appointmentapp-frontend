import React, {Component} from "react";
import SAANWizardStep5Component from "./SAANWizardStep5Component";

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
        />
      </>
    )
  };
}


export default SAANWizardStep5Container;
