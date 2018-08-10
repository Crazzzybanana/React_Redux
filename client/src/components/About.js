import React, { Component } from 'react';
import './About.css';
// import myImage from '../images/man.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <section>
                    <div className="aboutMe">
                        <h2>Обо мне</h2>
                        <p>Немного информации</p>
                        <br/>
                        <hr/>
                    </div>
                    <div className="container">
                        <div className="">
                            Фото
                            {/* <img src={myImage}/> */}
                        </div>
                        <div>
                            <h3>Кратко о себе</h3>
                            <div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged. It was popularised in the 1960s with the release of 
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                        <div>
                            <h3>Персональная данные</h3>
                            <div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged. It was popularised in the 1960s with the release of 
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;