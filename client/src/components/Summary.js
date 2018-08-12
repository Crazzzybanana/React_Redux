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
                        <hr className="headerHr"/>
                    </div>
                    <div className="container summaryContainer">
                        <div className="row">
                            <div className="col rightColum columH">
                                <p>
                                    Образование
                                </p>
                            </div>
                            <hr/>
                            <div className="col columH">
                                <p>
                                    Знания и навыки
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Summary;