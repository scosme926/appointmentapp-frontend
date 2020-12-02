import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AnonNavbarComponent from "./AnonNavbarComponent";
import ControlledCarousel from "./ControlledCarousel";
import Carousel from "react-bootstrap/Carousel";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../App.css"
function IndexComponent(props) {
    return (
        <>
          <AnonNavbarComponent />
          <Container style={{backgroundColor:"black", backgroundSize:"100%"}} fluid>
            <Row>
              <Col>
                 <h1>Doris Beauty Salon Appoinment App</h1>

                 <Jumbotron style={{backgroundColor:"tomato",margin:"75px"}}>
                    <h1>Best Place For Your Hair In The City!!!</h1>
                    <h6>
                      Haircuts, Hair Colour, Highlights, Hair Extensions And More!!!
                    </h6>
                    <p>
                      <Button variant="dark" href="/login">Login here!!</Button>
                    </p>
                 </Jumbotron>
           </Col>
           </Row>
           </Container>
        </>
    );
}

export default IndexComponent;
