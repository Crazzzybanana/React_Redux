import React, { Component } from 'react';
import StuffSale from '../images/StuffSale.png'
import Port from '../images/Portfolio.png';
import './Portfolio.css';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <section className="portfolio">
                    <div className="header">
                        <h2>Портфолио</h2>
                        <p>Моя работа за последнее время</p>
                        <br/>
                        <hr className="headerHr whiteHr"/>
                    </div>
                    <div className="container containerContainer">
                        <div className="row">
                            <div className="col portfolioCol">
                                <h3>Последние работы</h3>
                                <div className="lastWorks row">
                                    <img src={StuffSale} alt="siteImage" className="porfolioSiteImage col-md-6"></img>
                                    <img src={Port} alt="siteImage" className="porfolioSiteImage col-md-6"></img>
                                </div>
                                <h3>Опыт работы</h3>
                                <div className="experience">
                                    <span className="dot"></span>
                                    <p>В активном поиске работы</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Portfolio;