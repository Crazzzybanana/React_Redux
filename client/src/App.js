import React, { Component } from 'react';
import {BrowserRouter as Router, /*Route*/} from 'react-router-dom';
import Slider from './components/Slider';
import About from './components/About';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Slider/>
          <About/>
        </div>
      </Router>
    );
  }
}

export default App;
