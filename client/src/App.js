import React, { Component } from 'react';
import {BrowserRouter as Router, /*Route*/} from 'react-router-dom';
import Slider from './components/Slider';
import About from './components/About';
import Summary from './components/Summary';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Slider/>
          <About/>
          <Summary/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
