import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <section className="portfolio">
                    <div className="header">
                        <h2>Портфолио</h2>
                        <p>Мои работы за последнее время</p>
                        <br/>
                        <hr className="headerHr whiteHr"/>
                    </div>
                    <div className="container containerContainer">
                    </div>
                </section>
            </div>
        );
    }
}

export default Portfolio;