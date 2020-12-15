import React, { Component } from "react";
import { Link } from "react-router-dom";
import SecondNavbarComponent from "./SecondNavbarComponent"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { enGB } from 'date-fns/locale'
import { DatePickerCalendar } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import Breadcrumb from "react-bootstrap/Breadcrumb"
import { format } from 'date-fns'
import Button from "react-bootstrap/Button";
import 'react-nice-dates/build/style.css'
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import ProgressBar from "react-bootstrap/ProgressBar"
import ProgressBarStep2Component from "./ProgressBarStep2Component"
import Card from "react-bootstrap/Card";





function SAANWizardStep2Component(props) {
    const { onClickDropButton }=props;
    return(
       <>
          <SecondNavbarComponent />
          <Breadcrumb>
            <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item active>Select the Type</Breadcrumb.Item>
          </Breadcrumb>
          <Container>
          <Row>
            <Col>
              <ProgressBarStep2Component  />
            </Col>
          </Row>
          <br />
            <Row>
              <Col>
                <h1>Step 2: Select the Type</h1>
                <p>Please select the type of work that you want</p>
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
              <DropdownButton id="dropdown-basic-button" onSelect={onClickDropButton} title="Select a Type">
                <Dropdown.Item eventKey="Hair Color">Hair Color</Dropdown.Item>
                <Dropdown.Item eventKey="Hair Style">Hair Style</Dropdown.Item>
                <Dropdown.Item eventKey="Hair Cut">Hair Cut</Dropdown.Item>
              </DropdownButton>
              </Col>
              <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            </Row>
            <Row>
            <Col sm={6}>
            </Col>
            <Col sm={4} style={{textAlign: "center"}}>
            <Card>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
            <Col sm={3}>
            </Col>
            </Row>
            <Row>
              <Col>
              <br />
              <Button variant="primary" href="/set-an-appoinment-step-1">Back</Button><br /><br />
              </Col>
            </Row>
          </Container>
       </>
    );
}

export default SAANWizardStep2Component;
