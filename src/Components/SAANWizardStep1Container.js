import React, {Component} from "react";
import SAANWizardStep1Component from "./SAANWizardStep1Component";

class SAANWizardStep1Container extends Component{
  constructor(props) {
    super(props);
    this.state={
      date:null,
    }
    this.onDateChange = this.onDateChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onDateChange(pickedDate) {
      this.setState({
        date:pickedDate,
      });
      localStorage.setItem("PickedDate", pickedDate);
  }

  onButtonClick(e) {
    this.props.history.push("/set-an-appoinment-step-2")
  }
  render(){
    const { date } = this.state;
    return(
      <>
        <SAANWizardStep1Component
            date={date}
            onDateChange={this.onDateChange}
            onButtonClick={this.onButtonClick}
        />
      </>
    )
  };
}


export default SAANWizardStep1Container;
