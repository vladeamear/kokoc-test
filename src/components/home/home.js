import React, { Component } from 'react'
import womanWithPC from '../../img/misc/w-with-big-pc.png'
import './style.css'

class Home extends Component{
    render(){
        return(
            <div id='home' className='home'>
                <section>
                    <div className='home__left-part'>
                        <h1>Бесплатное обучение веб-разработке под присмотром наставника</h1>
                        <p>Получите профессию Веб-разработчик с возможностью дальнейшего трудоустройства</p>
                        <button onClick={(e) => {
                            e.preventDefault();
                            window.location.href='/#about-anchor';
                            }}>Узнать больше</button>
                    </div>
                    <div className='home__right-part'>
                        <img src={womanWithPC} />
                        <span className='home__php'>PHP</span>
                        <span className='home__js'>JAVA SCRIPT</span>
                        <span className='home__xml'>XML</span>
                        <span className='home__html'>HTML</span>
                        <span className='home__sql'>SQL</span>
                        <span className='home__css'>CSS</span>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home