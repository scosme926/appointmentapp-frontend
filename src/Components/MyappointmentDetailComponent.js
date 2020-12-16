import React, { Component } from "react";
import { Link } from "react-router-dom";



function MyappointmentDetailComponent(props) {
    const { dealDetail } = props;
    console.log(dealDetail)
    return (
        <>

            <h1>Myappointment Details</h1>
            <br />
            <br />
            <p>
            Date: {dealDetail.pickedDate}
            </p>
            <p>
            Time: {dealDetail.pickedTime}
            </p>
            <p>
            Type: {dealDetail.pickedType}
            </p>
            <p>
            Email: {dealDetail.pickedEmail}
            </p>
            <Link to="/dashboard">Back</Link>
        </>
    );
}


export default MyappointmentDetailComponent;
