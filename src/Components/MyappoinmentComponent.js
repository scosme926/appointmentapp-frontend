import React, { Component } from "react";
import { Link } from "react-router-dom";
import SecondNavbarComponent from "./SecondNavbarComponent"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";



function MyappoinmentComponent(props) {
    return(
       <>
          <SecondNavbarComponent /><br /><br /><br />
          <Container>
            <Row>
              <Col>
                <h1>Track your Appoinments</h1>
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Service</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>11/09/2019</td>
                      <td>Colour Hair</td>
                      <td>$50 CAD</td>
                    </tr>
                    <tr>
                      <td>11/01/2020</td>
                      <td>Hair Cut</td>
                      <td>$25 CAD</td>
                    </tr>
                    <tr>
                      <td>01/02/2020</td>
                      <td>Hair Cut</td>
                      <td>$25 CAD</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
       </>
    );
}

export default MyappoinmentComponent;
