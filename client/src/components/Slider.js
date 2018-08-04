import React, { Component } from 'react';
import { Parallax, /*Background*/ } from 'react-parallax';

class Slider extends Component {
    render() {
        return (
            <div>
            <Parallax
              blur={5}
              bgImage={require('../images/mac.jpg')}
              bgImageAlt="Header Image"
              strength={100}
            >
              {/* Put some text content here
              or even an empty div with fixed dimensions
              to have a height for the parallax. */}
              <div style={{ height: '850px' }} />
            </Parallax>
            <Parallax
              blur={{ min: -15, max: 15 }}
              bgImage={require('../images/code.jpg')}
              bgImageAlt="the dog"
              strength={50}
            >
              Blur transition from min to max
              <div style={{ height: '800px' }} />
            </Parallax>
            {/* <Parallax strength={100}>
              <div>Use the background component for custom elements</div>
              <Background className="custom-bg">
                <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
              </Background>
            </Parallax> */}
          </div>        
        );
    }
}

export default Slider;