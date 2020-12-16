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
import ProgressBarStep4Component from "./ProgressBarStep4Component"
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";








function SAANWizardStep4Component(props) {
    const { firstName, lastName, email, phone, onFirstnameChange, onLastnameChange, onEmailChange, onPhoneChange }=props
    return(
       <>
          <SecondNavbarComponent />
          <Breadcrumb>
            <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item active>Confirmation</Breadcrumb.Item>
          </Breadcrumb>
          <Container>
          <Row>
            <Col>
              <ProgressBarStep4Component  />
            </Col>
          </Row>
          <br />
            <Row>
              <Col style={{textAlign: "center"}}>
                <h1>Step 4: Consumer Information</h1>
                <p>Please enter the consumer information</p>
              </Col>
            </Row>
            <br />
            <Row>
              <Col sm={2}>
              </Col>
              <Col sm={8}>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter name" value={firstName} onChange={onFirstnameChange} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastname">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={onLastnameChange} />
                    </Form.Group>
                  </Form.Row>
                </Form>
              </Col>
              <Col sm={2}>
              </Col>
            </Row>
            <Row>
            <Col sm={2}>
            </Col>
              <Col sm={8}>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" value={email} onChange={onEmailChange}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPhone">
                      <Form.Label>Phone number</Form.Label>
                      <Form.Control type="number" placeholder="Enter phone " value={phone} onChange={onPhoneChange} />
                    </Form.Group>
                  </Form.Row>
                </Form>
              </Col>
              <Col sm={2}>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col>
                <Button variant="primary" href="/set-an-appoinment-step-3">Back</Button><br /><br />
              </Col>
              <Col style={{textAlign: "right"}}>
                <Button variant="primary" href="/set-an-appoinment-step-5">Next</Button><br /><br />
              </Col>
            </Row>
          </Container>
       </>
    );
}

export default SAANWizardStep4Component;
