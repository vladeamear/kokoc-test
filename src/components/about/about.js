import React, { Component } from 'react'
import './style.css'

class About extends Component{
    render(){
        return(
            <div id='about' className='about'>
                <div id='about-anchor'></div>
                <section>
                    <div className='about__left-part'>
                        <span>О ШКОЛЕ</span>
                        <h2>Индивидуальный подход <br /> к каждому студенту</h2>
                        <p>Наша школа "Kokoc Group Saransk" проводит бесплатные курсы по основам разработки сайтов: frontend-разработке, backend-разработке, с возможностью дальнейшего трудоустройства</p>
                        <p>Обучение проходит под присмотром наставников, которые уделяют внимание каждому студенту и сопровождают на протяжении всего курса</p>
                    </div>
                    <div className='about__right-part'>
                        <div className='card card-about'>
                            <h3>Удобный формат обучения</h3>
                            <p>3 месячные бесплатные курсы офлайн и онлайн, не привязанные к определенному времени</p>
                        </div>
                        <div className='card card-about'>
                            <h3>Опытные наставники</h3>
                            <p>Обучение под присмотром опытных наставников, которым не все равно</p>
                        </div>
                        <div className='card card-about'>
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