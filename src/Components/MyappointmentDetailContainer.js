import React, { Component } from "react";
import MyappointmentDetailComponent from "./MyappointmentDetailComponent";
import { getAppointmentDetail } from "../API/AppointmentAPI";

class MyappointmentDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dealDetail: {},
        };
        this.onSuccessCallbackFunc = this.onSuccessCallbackFunc.bind(this);
        this.onFailureCallbackFunc = this.onFailureCallbackFunc.bind(this);
    }

    componentDidMount() {
        // This is how we extract the object ID from the URL.
        const { id } = this.props.match.params;

        getAppointmentDetail(id, this.onSuccessCallbackFunc, this.onFailureCallbackFunc);
    }

    onSuccessCallbackFunc(responseData) {
        console.log("BACKEND SERVER RETURNED:", responseData);
        this.setState({
            dealDetail: responseData,
        });
    }

    onFailureCallbackFunc(responseData) {
        console.log("BACKEND SERVER RETURNED:", responseData);
    }

    render() {
        const { dealDetail } = this.state;
        return (
            <MyappointmentDetailComponent
                dealDetail = {dealDetail}
            />
        );
    }
}

export default MyappointmentDetailContainer;
