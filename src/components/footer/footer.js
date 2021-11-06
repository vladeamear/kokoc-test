import React, { Component } from 'react'
import './style.css'

class Footer extends Component{
    render(){
        return(
            <footer id='footer' className='footer'>
                <section>
                    <div className='footer__side'>
                        <div className='logo-bottom'></div>
                        <a href='#'>Политика обработки данных</a>
                    </div>
                    <div className='footer__mid-part'>
                        <nav className='mt-20'>
                            <ul>
                                <li><a href='#about-anchor'><h3>О школе</h3></a></li>
                                <li><a href='#teaching-program-anchor'><h3>Курсы</h3></a></li>
                                <li><a href='#teachers-anchor'><h3>Преподаватели</h3></a></li>
                            </ul>
                        </nav>
                        <div><a href='#'>© KOKOC GROUP SARANSK 2021</a></div>
                    </div>
                    <div className='footer__side'>
                        <div><a href='#'><h3>Контакты</h3></a></div>
                        <p><a href='mailto:saransk@kokocgroup.ru'>saransk@kokocgroup.ru</a></p>
                        <p><a href='#'>Богдана Хмельницкого 33,<br />Саранск</a></p>
                        <div className='socials'>
                            <a href=''><div className='instagram'></div></a>
                            <a href=''><div className='telegram'></div></a>
                            <a href=''><div className='facebook'></div></a>
                        </div>
                    </div>
                </section>
            </footer>
        )
    }
}

export default Footer