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
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import ProgressBar from "react-bootstrap/ProgressBar"
import ProgressBarStep3Component from "./ProgressBarStep3Component"
import Card from "react-bootstrap/Card";







function SAANWizardStep3Component(props) {
    const { onClickSelectButton }=props;
    return(
       <>
          <SecondNavbarComponent />
          <Breadcrumb>
            <Breadcrumb.Item href="/dashboard">Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item active>Schedule Your Appoinment</Breadcrumb.Item>
          </Breadcrumb>
          <Container>
          <Row>
            <Col>
              <ProgressBarStep3Component  />
            </Col>
          </Row>
          <br />
            <Row>
              <Col>
                <h1>Step 3: Select the Hour</h1>
              </Col>
            </Row>
            <Row>
              <Col>
              </Col>
              <Col xs="8">
                <h3>Schedule Your Appoinment</h3>
              </Col>
              <Col>
              </Col>
            </Row>
            <br />
            <Row>
            <Col >
              <Card style={{ width: '10rem' }}>
                <Card.Body>
                  <Card.Title>Morning</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    <strong>Hour:</strong> 7:30am
                  </Card.Text>
                  <Button variant="primary" onClick={(event)=>onClickSelectButton(event,"7:30am")}>Select</Button>
                </Card.Body>
              </Card>
            </Col><Col >
              <Card style={{ width: '10rem' }}>
                <Card.Body>
                  <Card.Title>Morning</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>
                    <strong>Hour:</strong> 8:30am
                  </Card.Text>
                  <Button variant="primary" onClick={(event)=>onClickSelectButton(event,"8:30am")}>Select</Button>
                </Card.Body>
              </Card>
            </Col>
              <Col >
                <Card style={{ width: '10rem' }}>
                  <Card.Body>
                    <Card.Title>Morning</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>
                      <strong>Hour:</strong> 9:30pm
                    </Card.Text>
                    <Button variant="primary" onClick={onClickSelectButton}>Select</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col >
                <Card style={{ width: '10rem' }}>
                  <Card.Body>
                    <Card.Title>Morning</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>
                      <strong>Hour:</strong> 10:30pm
                    </Card.Text>
                    <Button variant="primary" onClick={onClickSelectButton}>Select</Button>
                  </Card.Body>
                </Card>
              </Col><Col >
                <Card style={{ width: '10rem' }}>
                  <Card.Body>
                    <Card.Title>Morning</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>
                      <strong>Hour:</strong> 11:30pm
                    </Card.Text>
                    <Button variant="primary" onClick={onClickSelectButton}>Select</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            <Row>
              <Col >
                <Card style={{ width: '10rem' }}>
                  <Card.Body>
                    <Card.Title>Afternoon</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>
                      <strong>Hour:</strong> 12:30pm
                    </Card.Text>
                    <Button variant="primary" onClick={onClickSelectButton}>Select</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col >
                <Card style={{ width: '10rem' }}>
                  <Card.Body>
                    <Card.Title>Afternoon</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>
                      <strong>Hour:</strong> 1:30pm
                    </Card.Text>
                    <Button variant="primary" onClick={onClickSelectButton}>Select</Button>
                  </Card.Body>
                </Card>
              </Col><Col >
                <Card style={{ width: '10rem' }}>
                  <Card.Body>
                    <Card.Title>Afternoon</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>
                      <strong>Hour:</strong> 2:30pm
                    </Card.Text>
                    <Button variant="primary" onClick={onClickSelectButton}>Select</Button>
                  </Card.Body>
                </Card>
              </Col><Col >
                <Card style={{ width: '10rem' }}>
                  <Card.Body>
                    <Card.Title>Afternoon</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>
                      <strong>Hour:</strong> 3:30pm
                    </Card.Text>
                    <Button variant="primary" onClick={onClickSelectButton}>Select</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col >
                <Card style={{ width: '10rem' }}>
                  <Card.Body>
                    <Card.Title>Afternoon</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    <Card.Text>
                      <strong>Hour:</strong> 4:30pm
                    </Card.Text>
                    <Button variant="primary" onClick={onClickSelectButton}>Select</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
       </>
    );
}

export default SAANWizardStep3Component;
