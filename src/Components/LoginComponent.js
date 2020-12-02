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


function LoginComponent(props) {
    const { username, password, error, onUsernameChange, onPasswordChange, onLoginClick } = props;
    return(
       <>
       <AnonNavbarComponent />
       <br />
          <br />
            <br />
           <Container>
              <Row>
                <Col></Col>
                <Col>
                <Card>
                <Card.Body>
                <h1>Login</h1>
                 <Form>
                  <Form.Group controlId="formBasicEmail" md={4}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" onChange={onUsernameChange}
                       value={username} />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={onPasswordChange}
                       value={password} />
                  </Form.Group>
                  <Button variant="primary" type="button" onClick={onLoginClick} id="submit" >
                    Submit
                  </Button>{' '}
                  <Button variant="dark" href="/register">Register Here!!</Button>
                 </Form>
                 </Card.Body>
                 </Card>
                 </Col>
                <Col></Col>
              </Row>
           </Container>
       </>
    );
}

export default LoginComponent;
