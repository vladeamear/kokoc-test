import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <footer id="footer">
                <section className="d-f pt-75 pb-50 c-w">
                    <div className="d-f footer-side jc-sb fd-c">
                        <div className="logo-bottom"></div>
                        <a href="#">Политика обработки данных</a>
                    </div>
                    <div className="d-f f-1 ta-c jc-sb fd-c h-100">
                        <nav className="mt-20">
                            <ul>
                                <li><a href="#about-anchor"><h3>О школе</h3></a></li>
                                <li><a href="#teaching-program-anchor"><h3>Курсы</h3></a></li>
                                <li><a href="#teachers-anchor"><h3>Преподаватели</h3></a></li>
                            </ul>
                        </nav>
                        <div><a href="#">© KOKOC GROUP SARANSK 2021</a></div>
                    </div>
                    <div className="d-f footer-side jc-sb fd-c">
                        <div className="mt-20"><a href="#"><h3>Контакты</h3></a></div>
                        <p><a href="mailto:saransk@kokocgroup.ru">saransk@kokocgroup.ru</a></p>
                        <p><a href="#">Богдана Хмельницкого 33,<br />Саранск</a></p>
                        <div className="socials">
                            <a href=""><div className="instagram"></div></a>
                            <a href=""><div className="telegram"></div></a>
                            <a href=""><div className="facebook"></div></a>
                        </div>
                    </div>
                </section>
            </footer>
        )
    }
}

export default Footer
