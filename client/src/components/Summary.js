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
                            <div className="col-sm-5 rightColum columH">
                                <p className="summaryMainHeader">
                                    Образование
                                </p>
                                <i className="fas fa-university summaryIcon"></i>
                                <br/>
                                <p className="summaryAboutHeader">Высшее</p>
                                <p className="summaryText">
                                    Киевский политехнический институт им. Игоря Сикорского(КПИ),
                                    факультет прикладной математики(ФПМ), 
                                    кафедра програного обеспечения компьютерных систем,
                                    специальность программная инжерия
                                </p>
                                <p className="summaryAboutHeader">Самообразование</p>
                                <p className="summaryText">
                                    Курсы в интернете, видеокурсы, книги, документация, форумы, статьи...
                                </p>
                            </div>
                            <hr/>
                            <div className="col-sm-5 columH">
                                <p className="summaryMainHeader">
                                    Навыки
                                </p>
                                <i className="fas fa-desktop summaryIcon"></i>
                                <br/>
                                <p className="summaryAboutHeader">Знания в области Web</p>
                                <p className="summaryText">
                                    Языки программирования: C, C++, C#, Java, Javascript, node.js, Python. 
                                    Язык разметки HTML(5), таблицы стилей CSS(3),
                                    адаптивная верстка под мобильные устройства, фреймворк Bootstrap.
                                    СУБД MongoDB, библиотеки React+Redux, jQuery.
                                </p>
                                <p className="summaryAboutHeader">
                                    Знания языков
                                </p>
                                <p className="summaryText">
                                    Английский - Upper-Intermediate
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