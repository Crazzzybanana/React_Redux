import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="main_footer footer_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                © 2018 Пономарчук Дмитрий.
                                <div className="contactTable">
                                    <ul>
                                        <li>
                                            <a href="http://t.me/Crazzybanan" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-telegram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/dima-ponomarchuk-098a53150/" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;