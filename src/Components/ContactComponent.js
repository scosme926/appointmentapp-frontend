import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FormControl from "react-bootstrap/FormControl";
import AnonNavbarComponent from "./AnonNavbarComponent"
import Card from "react-bootstrap/Card";
import Breadcrumb from "react-bootstrap/Breadcrumb"
import SecondNavbarComponent from "./SecondNavbarComponent"




function ContactComponent(props) {
    return(
       <>
       <SecondNavbarComponent />
       <Breadcrumb>
         <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
         <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
       </Breadcrumb>
       <br />
           <Container>
              <Row>
                <Col xs="7">
                  <h2><strong>Our Location</strong></h2>
                </Col>
                <Col>
                  <h2><strong>Contact Us</strong></h2>
                </Col>
              </Row>
              <Row>
                <Col>
                <div class="iframe-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1458.3713550204095!2d-81.27976544192524!3d43.0258024556076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882eee4350a72e43%3A0xcb7dd9faacadb9d1!2sCF%20Masonville%20Place!5e0!3m2!1ses-419!2sca!4v1607732833059!5m2!1ses-419!2sca" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                </Col>
                <Col>
                <Form>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" placeholder="Enter Phone" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Message"/>
                  </Form.Group>
                </Form>
                <Button variant="primary" href="/myappoinment">Send</Button>
                </Col>
              </Row>
           </Container>
       </>
    );
}

export default ContactComponent;
