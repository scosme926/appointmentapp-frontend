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
import Step1 from "../Img/Step-2.jpg";
import Step3 from "../Img/Step-3.jpg";
import Step4 from "../Img/Step-4.jpg";






function SAANWizardStep2Component(props) {
    const { onClickSelectButton }=props;
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
              <Col style={{textAlign: "center"}}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={Step1} />
                  <Card.Body>
                    <Card.Title>Hair Style</Card.Title>
                    <Button variant="primary" onClick={(event)=>onClickSelectButton(event,"Hair Style")}>Select</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{textAlign: "center"}}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={Step3} />
                  <Card.Body>
                    <Card.Title>Hair Cut</Card.Title>
                    <Button variant="primary"onClick={(event)=>onClickSelectButton(event,"Hair Cut")}>Select</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col style={{textAlign: "center"}} >
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={Step4} />
                  <Card.Body>
                    <Card.Title>Hair Color</Card.Title>
                    <Button variant="primary" onClick={(event)=>onClickSelectButton(event,"Hair Color")}>Select</Button>
                  </Card.Body>
                </Card>
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
