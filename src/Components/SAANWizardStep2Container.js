import React, {Component} from "react";
import SAANWizardStep2Component from "./SAANWizardStep2Component";

class SAANWizardStep2Container extends Component{
  constructor(props) {
    super(props);
    this.state={
    }
    this.onClickSelectButton = this.onClickSelectButton.bind(this);
  }

  onClickSelectButton(e,pickedType) {
    console.log(pickedType);
    localStorage.setItem("PickedType", pickedType);
    this.props.history.push("/set-an-appoinment-step-3")
  }
  render(){
    return(
      <>
        <SAANWizardStep2Component
            onClickSelectButton={this.onClickSelectButton}
        />
      </>
    )
  };
}


export default SAANWizardStep2Container;
