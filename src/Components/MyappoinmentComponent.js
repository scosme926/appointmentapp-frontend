import React, { Component } from "react";
import { Link } from "react-router-dom";
import SecondNavbarComponent from "./SecondNavbarComponent"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Breadcrumb from "react-bootstrap/Breadcrumb"
import Button from "react-bootstrap/Button";




function MyappoinmentComponent(props) {
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>11/09/2019</td>
                      <td>11:30 am</td>
                      <td>Colour Hair</td>
                    </tr>
                    <tr>
                      <td>11/01/2020</td>
                      <td>3:30 pm</td>
                      <td>Hair Cut</td>
                    </tr>
                    <tr>
                      <td>01/02/2020</td>
                      <td>12:30 pm</td>
                      <td>Hair Cut</td>
                    </tr>
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
