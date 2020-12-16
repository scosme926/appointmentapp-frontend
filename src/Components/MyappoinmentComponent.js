import React, { Component } from "react";
import { Link } from "react-router-dom";
import SecondNavbarComponent from "./SecondNavbarComponent"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Breadcrumb from "react-bootstrap/Breadcrumb"
import Button from "react-bootstrap/Button";
import { enGB } from 'date-fns/locale'
import { format } from 'date-fns'



function AppointmentItem(props) {
    const { pickedDate, pickedType, pickedTime, id}= props.item;
    const pickedDateObj=new Date(pickedDate);
    return (
        <tr key={id}>
           <td>{pickedDateObj && format(pickedDateObj, 'dd MMM yyyy', { locale: enGB })}</td>
           <td>{pickedTime}</td>
           <td>{pickedType}</td>
           <td>
               <Link to={`/myappoinment/${id}`}>View</Link>
           </td>
        </tr>
    );
}



function MyappoinmentComponent(props) {
  function renderRow(item) {
        return <AppointmentItem item={item} />;
    }

    const { appointmentsArray }=props;
    console.log("MyappoinmentComponent|appointmentsArray", appointmentsArray)
    return(
       <>
          <SecondNavbarComponent />
          <Breadcrumb>
            <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item active>My Appoinments</Breadcrumb.Item>
          </Breadcrumb>
          <Container>
            <Row>
              <Col sm={2}>
              </Col >
              <Col sm={8} style={{textAlign: "center"}}>
                <h1>Track your Appoinments</h1>
                <br />
                <Table striped bordered hover size="">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Service</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {appointmentsArray.map(renderRow)}
                  </tbody>
                </Table>
              </Col>
              <Col sm={2}>
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
            <Row>
              <Col>
                <Button variant="primary" href="/dashboard">Back</Button><br /><br />
              </Col>
            </Row>
          </Container>
       </>
    );
}

export default MyappoinmentComponent;
