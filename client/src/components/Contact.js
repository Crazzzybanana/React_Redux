import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div>
                <section className="contact">
                    <div className="header">
                        <h2>Контакты</h2>
                        <p>Связаться со мной</p>
                        <br/>
                        <hr/>
                    </div>
                    <div className="container containerContainer">
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;