import React, { Component } from "react";
import { Link } from "react-router-dom";
import SecondNavbarComponent from "./SecondNavbarComponent"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";



function CalendarComponent(props) {
    return(
       <>
          <SecondNavbarComponent /><br /><br /><br />
          <Container>
            <Row>
              <Col>
                <h1>Calendar</h1>
              </Col>
            </Row>
          </Container>
       </>
    );
}

export default CalendarComponent;
