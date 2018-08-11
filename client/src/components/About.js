import React, { Component } from 'react';
import './About.css';
import myImage from '../images/mac.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <section className="about">
                    <div className="header">
                        <h2>Обо мне</h2>
                        <p>Немного информации</p>
                        <br/>
                        <hr/>
                    </div>
                    <div className="container aboutContainer">
                        <div className="row">
                            <div className="col-lg-4">
                                <h3>Кратко о себе</h3>
                                <div>
                                    Доброго времени суток, меня зовут Дмитрий. 
                                    Занимаюсь разработкой сайтов с нуля. Выполняю верстку и программирование сайтов.
                                    В данный момент учусь в университете на третем курсе и ищу работу веб-разработчиком.
                                </div>
                            </div>
                            <div className="col-lg-4 aboutImage">
                                <h3>Фото</h3>
                                <img src={myImage} alt="profile" className="circle-img img-circle"/>
                            </div>
                            <div className="col-lg-4">
                                <h3>Персональная данные</h3>
                                <h2>Пономарчук Дмитрий</h2>
                                <div>
                                    <p>
                                    Профессиональное создание сайтов: разработка дизайна, HTML верстка, 
                                    программирование на node.js, JavaScript.
                                    </p>
                                    <p>День рождения: 13 ноября 1998</p>
                                    <p>E-mail: sgrdimka11@rambler.ru</p>
                                    <p>Веб-сайт: (soon)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;