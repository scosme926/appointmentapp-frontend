// App.js

import React from 'react';
import Nav from "react-bootstrap/Nav";



import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProgressBarStep5Component(props) {
  return (
    <div className="progressBar">
    <Nav className="justify-content-center" activeKey="/home">
     <Nav.Item>
       <Nav.Link href="/set-an-appoinment-step-1" >
         Step 1
       </Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="/set-an-appoinment-step-2" >
         Step 2
       </Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="/set-an-appoinment-step-3" >
         Step 3
       </Nav.Link >
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="/set-an-appoinment-step-4" >
         Step 4
       </Nav.Link >
     </Nav.Item>
     <Nav.Item>
       <Nav.Link eventKey="disabled" disabled>
         <strong>Step 5</strong>
       </Nav.Link>
     </Nav.Item>
    </Nav>
    </div>
  );
}

export default ProgressBarStep5Component;
