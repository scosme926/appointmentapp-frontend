import React, { Component } from "react";
import { Link } from "react-router-dom";
import SecondNavbarComponent from "./SecondNavbarComponent"
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Lista from "../Img/Lista.jpg"
import Contact from "../Img/Contact us.jpg"
import Calendario from "../Img/Calendario.jpg"
import "../App.css"



function DashComponent(props) {
    return(
       <>
        <SecondNavbarComponent /><br /><br /><br />
        <Container>
          <Row>
            <CardDeck className="Dashboard-Container">
              <Col>
                <Card style={{ height: '30rem' }}>
                  <Card.Img variant="top" src={Lista} />
                  <Card.Body>
                    <Card.Title>My Appointments</Card.Title>
                    <Card.Text>
                      Here you can see the appointments that you have had and the appointments that you have pending.{' '}
                    </Card.Text>
                    <Button variant="primary" href="/myappoinment">My Appointments</Button>
                  </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card  style={{ height: '30rem' }}>
                  <Card.Img variant="top" src={Calendario} />
                  <Card.Body>
                    <Card.Title>Set An Appointment</Card.Title>
                    <Card.Text>
                      Select the best day and time for your new look.
                    </Card.Text>
                    <br />
                    <Button variant="primary" href="/set-an-appoinment-step-1">Set An Appointment</Button>
                  </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ height: '30rem' }} >
                  <Card.Img variant="top" src={Contact} />
                    <br />
                  <Card.Body>
                    <Card.Title>Contact Us</Card.Title>
                    <br />
                    <Card.Text>
                      If you have any doubts or questions, do not hesitate to contact us.
                    </Card.Text>
                    <br />
                    <Button variant="primary" href="contact-us">Contact Us</Button>
                  </Card.Body>
                </Card>
              </Col>
            </CardDeck>
          </Row>
        </Container>
       </>
    );
}

export default DashComponent;
