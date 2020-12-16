import React, {Component} from "react";
import MyappoinmentComponent from "./MyappoinmentComponent";
import {getListAppointments} from "../API/AppointmentAPI";


class MyappoinmentContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      appointmentsArray:[],
    };
    this.onSuccessCallbackFunc=this.onSuccessCallbackFunc.bind(this);
    this.onFailureCallbackFunc=this.onFailureCallbackFunc.bind(this);
  }

  componentDidMount() {
       getListAppointments(this.onSuccessCallbackFunc, this.onFailureCallbackFunc);
   }

  onSuccessCallbackFunc(responseData) {
    this.setState({
            appointmentsArray: responseData.results,
        });
  }

  onFailureCallbackFunc(responseData) {
    console.log(responseData);
  }


  render(){
    const { appointmentsArray }=this.state;
    return(
      <>
        <MyappoinmentComponent
          appointmentsArray={appointmentsArray}
        />
      </>
    )
  };
}


export default MyappoinmentContainer;
