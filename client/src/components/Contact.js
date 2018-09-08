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
                        <hr className="headerHr"/>
                    </div>
                    <div className="container containerContainer">
                        <div className="row">
                            <div className="col">
                                <div className="contaxtBox">
                                    <div className="fas fa-map-marker-alt"></div>
                                    <h3>Адрес</h3>
                                    <p>Украина, г.Киев</p>
                                </div>
                                <div className="contaxtBox">
                                    <div className="fas fa-phone-square"></div>
                                    <h3>Телефон</h3>
                                    <p>+380 (99) 536-79-17</p>
                                </div>
                                <div className="contaxtBox">
                                    <div className="fab fa-telegram"></div>
                                    <h3>Телеграм</h3>
                                    <p>
                                        <a href="http://t.me/Crazzybanan" target="_blank" rel="noopener noreferrer">telegram.org</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="contaxtBox">
                                    <div className="fab fa-github"></div>
                                    <h3>GitHub</h3>
                                    <p>
                                        <a href="https://github.com/Crazzzybanana" target="_blank" rel="noopener noreferrer">github.com</a>
                                    </p>
                                </div>
                                <div className="contaxtBox">
                                    <div className="fas fa-at"></div>
                                    <h3>Email</h3>
                                    <p><a href="mailto:sgrdimka11@rambler.ru">sgrdimka11@rambler.ru</a></p>
                                </div>
                                <div className="contaxtBox">
                                    <div className="fab fa-linkedin"></div>
                                    <h3>Linkedin</h3>
                                    <p>
                                        <a href="https://www.linkedin.com/in/dima-ponomarchuk-098a53150/" target="_blank" rel="noopener noreferrer">linkedin.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Contact;