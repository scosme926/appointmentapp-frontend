import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function SecondNavbarComponent(props) {
  return(
      <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
         <img
           src="https://cdn.icon-icons.com/icons2/1148/PNG/128/1486503773-book-contacts-library-notebook-bookmark-business-phone-book_81251.png"
           width="40"
           height="40"
           className="d-inline-block align-top"
         />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/myappoinment">My Appointments</Nav.Link>
          <Nav.Link href="/set-an-appoinment-step-1">Set an Appointment</Nav.Link>
          <Nav.Link href="/contact-us">Contact Us</Nav.Link>
          <Nav.Link href="/">Logout</Nav.Link>


        </Nav>
      </Navbar>
      </>
  );
}

export default SecondNavbarComponent;
