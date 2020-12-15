import React, {Component} from "react";
import SAANWizardStep3Component from "./SAANWizardStep3Component";

class SAANWizardStep3Container extends Component{
  constructor(props) {
    super(props);
    this.state={
    }
    this.onClickSelectButton = this.onClickSelectButton.bind(this);
  }

  onClickSelectButton(e) {
    console.log(e);
    this.props.history.push("/set-an-appoinment-step-4")
  }
  render(){
    return(
      <>
        <SAANWizardStep3Component
            onClickSelectButton={this.onClickSelectButton}
        />
      </>
    )
  };
}


export default SAANWizardStep3Container;
