import React, {Component} from "react";
import SAANWizardStep2Component from "./SAANWizardStep2Component";

class SAANWizardStep2Container extends Component{
  constructor(props) {
    super(props);
    this.state={
    }
    this.onClickDropButton = this.onClickDropButton.bind(this);
  }

  onClickDropButton(value) {
    console.log(value);
    localStorage.setItem("PickedType", value);
    this.props.history.push("/set-an-appoinment-step-3")
  }
  render(){
    return(
      <>
        <SAANWizardStep2Component
            onClickDropButton={this.onClickDropButton}
        />
      </>
    )
  };
}


export default SAANWizardStep2Container;
