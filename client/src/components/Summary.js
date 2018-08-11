import React, { Component } from 'react';
import './Summary.css';

class Summary extends Component {
    render() {
        return (
            <div>
                <section className="summary">
                    <div className="header">
                        <h2>Резюме</h2>
                        <p>Мои знания и образование</p>
                        <br/>
                        <hr/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Summary;