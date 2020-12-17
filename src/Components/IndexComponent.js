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
import Index1 from "../Img/Index1 (1).jpg";
import Index2 from "../Img/Index2.png";


import "../App.css"
function IndexComponent(props) {
    return (
        <>
          <AnonNavbarComponent />

                 <Carousel>
                  <Carousel.Item interval={10000}>
                    <img
                      className="d-block w-100"
                      src={Index1}
                      alt="First slide"
                      width={100}
                      height={591}
                    />
                    <Carousel.Caption>
                      <h3>My Appoinments App</h3>
                      <Button variant="primary" href="login">Login</Button>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={5000}>
                    <img
                      className="d-block w-100"
                      src={Index2}
                      alt="Third slide"
                      width={100}
                      height={591}
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>

        </>
    );
}

export default IndexComponent;
