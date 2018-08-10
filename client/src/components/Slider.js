import React, { Component } from 'react';
import LazyHero from 'react-lazy-hero';
import './Slider.css';

class Slider extends Component {
    render() {
        return (
        <div>
            <LazyHero 
                imageSrc={require("../images/mac.jpg")} 
                isCentered={true} 
                minHeight="100vh"
                opacity={0.2}
                parallaxOffset={100}
                transitionDuration={600}
                transitionTimingFunction="ease-in-out"
            >
                <div className="headerInfo">
                    <h1>Пономарчук Дмитрий</h1>
                    <p>WEB-разработчик</p>
                </div>
            </LazyHero>
        </div>
        );
    }
}

export default Slider;