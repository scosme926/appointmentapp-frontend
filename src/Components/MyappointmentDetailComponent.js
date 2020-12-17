
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
import ProgressBarStep5Component from "./ProgressBarStep5Component"
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";



function MyappointmentDetailComponent(props) {
    const { dealDetail } = props;
    console.log(dealDetail)
    return (
        <>
        <SecondNavbarComponent />
        <Breadcrumb>
          <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item active>My Appointment Details</Breadcrumb.Item>
        </Breadcrumb>
        <Container>
          <Row>
            <Col style={{textAlign: "center"}}>
              <h1>My Appointment Details</h1>
            </Col>
          </Row>
          <br />
          <Row>
          <Col sm={3}>
          </Col>
            <Col sm={6}>
              <Card>
              <Card.Title style={{textAlign: "center"}}>Details</Card.Title>
              <Card.Body>
              <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Date:
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue={dealDetail.pickedDate} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Type:
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue={dealDetail.pickedType} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Time:
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue={dealDetail.pickedTime} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column sm="2">
                    Email:
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue={dealDetail.pickedEmail} />
                  </Col>
                </Form.Group>
                </Form>
              </Card.Body>
              </Card>
            </Col>
            <Col sm={3}>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm={6} style={{textAlign: "left"}}>
              <Button variant="primary" href="/myappoinment">Back</Button><br /><br />
            </Col>
          </Row>
        </Container>
        </>
    );
}


export default MyappointmentDetailComponent;
