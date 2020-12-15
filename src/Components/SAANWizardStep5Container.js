import React, {Component} from "react";
import SAANWizardStep5Component from "./SAANWizardStep5Component";

class SAANWizardStep5Container extends Component{
  constructor(props) {
    super(props);
    this.state={
      pickedDate: new Date(localStorage.getItem("PickedDate")),
      pickedType: localStorage.getItem("PickedType"),
    }
  }

  render(){
    const {pickedDate, pickedType} =this.state;
    return(
      <>
        <SAANWizardStep5Component
          pickedDate={pickedDate}
          pickedType={pickedType}
        />
      </>
    )
  };
}


export default SAANWizardStep5Container;
