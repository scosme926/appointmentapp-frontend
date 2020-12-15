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
import ProgressBarStep1Component from "./ProgressBarStep1Component"




function SAANWizardStep1Component(props) {
    const { date, onDateChange, onButtonClick } = props
    return(
       <>
          <SecondNavbarComponent />
          <Breadcrumb>
            <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item active>Set an Appoinment</Breadcrumb.Item>
          </Breadcrumb>
          <Container>
          <Row>
            <Col>
              <ProgressBarStep1Component  />
            </Col>
          </Row>
            <Row>
              <Col>
                <h1>Step 1: Set An Appoinment</h1>
                <p>To set an appoinment, please begin by clicking on a date that you would like the appoinment to take place</p>
                <p>The selected date is: {date && format(date, 'dd MMM yyyy', { locale: enGB })}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <DatePickerCalendar locale={enGB} date={date} onDateChange={onDateChange} />
                {date !== null &&
                  <>
                  <Button onClick={onButtonClick} variant="primary">Pick this Date</Button><br /><br />
                  <Button variant="danger" href="/">Cancel</Button>
                  </>
                }
              </Col>
            </Row>
          </Container>
       </>
    );
}

export default SAANWizardStep1Component;
