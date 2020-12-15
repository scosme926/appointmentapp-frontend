// App.js

import React from 'react';
import './App.css';

import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const percentage = 73

  return (
    <div className="progressBar">
      <h3>React Bootstrap Progress Bar Demo</h3>

       <ProgressBar now={percentage} />
    </div>
  );
}

export default App;
