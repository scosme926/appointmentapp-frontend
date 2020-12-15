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
import Index1 from "../Img/Index1.jpg";


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
                      height={600}  
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=Second slide&bg=282c34"
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=Third slide&bg=20232a"
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>

        </>
    );
}

export default IndexComponent;
