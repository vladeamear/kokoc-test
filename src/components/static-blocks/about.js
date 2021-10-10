import React, { Component } from 'react';
import './style.css';

class About extends Component{
    render(){
        return(
            <div id="about" className="b-f9f9f9">
                <div id="about-anchor"></div>
                <section className="d-f pt-75 pb-75 jc-sb ai-c">
                    <div className="about-left">
                        <span>О ШКОЛЕ</span>
                        <h2>Индивидуальный подход <br /> к каждому студенту</h2>
                        <p>Наша школа "Kokoc Group Saransk" проводит бесплатные курсы по основам разработки сайтов: frontend-разработке, backend-разработке, с возможностью дальнейшего трудоустройства</p>
                        <p>Обучение проходит под присмотром наставников, которые уделяют внимание каждому студенту и сопровождают на протяжении всего курса</p>
                    </div>
                    <div className="about-right d-f g-20">
                        <div className="card p-20">
                            <h3>Удобный формат обучения</h3>
                            <p>3 месячные бесплатные курсы офлайн и онлайн, не привязанные к определенному времени</p>
                        </div>
                        <div className="card p-20">
                            <h3>Опытные наставники</h3>
                            <p>Обучение под присмотром опытных наставников, которым не все равно</p>
                        </div>
                        <div className="card p-20">
                            <h3>Оплачиваемая стажировка</h3>
                            <p>Оплачиваемая стажировка для лучших выпускников, где обучение будет продолжено</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About