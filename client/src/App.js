import React, { Component } from 'react';
import {BrowserRouter as Router, /*Route*/} from 'react-router-dom';
import Slider from './components/Slider';
import About from './components/About';
import Summary from './components/Summary';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Slider/>
          <About/>
          <Summary/>
          <Portfolio/>
          <Contact/>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
