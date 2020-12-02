import React, { Component } from "react";
import { Link } from "react-router-dom";
import SecondNavbarComponent from "./SecondNavbarComponent"
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";



function DashComponent(props) {
    return(
       <>
        <SecondNavbarComponent /><br /><br /><br />
        <Container>
          <Row>
            <CardDeck>
              <Col>
                <Card>
                  <Card.Img variant="top" src="https://cdn5.dibujos.net/dibujos/pintados/202020/un-libro-abierto-colegio-11788058.jpg" />
                  <Card.Body>
                    <Card.Title>My Appoinments</Card.Title>
                    <Card.Text>
                      Here you can see the appoinments that you have had and the appoinments that you have pending.{' '}
                    </Card.Text>
                    <Button variant="primary" href="/myappoinment">My Appoinments</Button>
                  </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                  <Card.Img variant="top" src="https://img.freepik.com/vector-gratis/fecha-limite-calendario-reloj-diseno-plano_115464-601.jpg?size=626&ext=jpg" />
                  <Card.Body>
                    <Card.Title>Calendar</Card.Title>
                    <Card.Text>
                      Select the best day and time for your new look.
                    </Card.Text>
                    <Button variant="primary" href="/calendar">Calendar</Button>
                  </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                  <Card.Img variant="top" src="https://image.freepik.com/vector-gratis/muestra-fondo-dibujado-mano-informacion-contacto_23-2148190270.jpg" />
                  <Card.Body>
                    <Card.Title>Contact Us</Card.Title>
                    <Card.Text>
                      If you have any doubts or questions, do not hesitate to contact us.
                    </Card.Text>
                    <Button variant="primary" href="/myappoinment">Contact Us</Button>
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
