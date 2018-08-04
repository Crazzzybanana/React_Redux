import React, { Component } from 'react';
import {BrowserRouter as Router, /*Route*/} from 'react-router-dom';
import Slider from './components/Slider';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Slider/>
          <p>Check</p>
        </div>
      </Router>
    );
  }
}

export default App;
