// App.js

import React from 'react';
import Nav from "react-bootstrap/Nav";



import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProgressBarStep3Component(props) {
  return (
    <div className="progressBar">
    <Nav className="justify-content-center" activeKey="/home">
     <Nav.Item>
       <Nav.Link  href="/set-an-appoinment-step-1" >
         Step 1
       </Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link href="/set-an-appoinment-step-2"  >
         Step 2
       </Nav.Link>
     </Nav.Item>
     <Nav.Item>
       <Nav.Link  eventKey="disabled" disabled>
         <strong>Step 3</strong>
       </Nav.Link >
     </Nav.Item>
     <Nav.Item>
       <Nav.Link eventKey="disabled" disabled >
         Step 4
       </Nav.Link >
     </Nav.Item>
     <Nav.Item>
       <Nav.Link eventKey="disabled" disabled>
         Step 5
       </Nav.Link>
     </Nav.Item>
    </Nav>
    </div>
  );
}

export default ProgressBarStep3Component;
