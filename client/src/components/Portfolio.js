import React, { Component } from 'react';
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
                                <h3>Свежие работы</h3>
                                <h3>Опыт работы</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Portfolio;