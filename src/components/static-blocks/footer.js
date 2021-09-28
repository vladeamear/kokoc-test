import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <div className="section">
                    <div className="footer_inner">
                        <div className="footer-left">
                            <div className="logo-bottom"></div>
                            <a href="">Политика обработки данных</a>
                        </div>
                        <div className="footer-medium">
                            <div className="footer-links">
                                <a href="">О школе</a>
                                <a href="">Курсы</a>
                                <a href="">Преподаватели</a>
                            </div>
                            <a href="" className="company-link">© Kokoc group Saransk 2021</a>
                        </div>
                        <div className="footer-right">
                            <div className="footer-links">
                                <a href="">Контакты</a>
                            </div>
                            <p><a href="mailto:saransk@kokocgroup.ru">saransk@kokocgroup.ru</a></p>
                            <p><a href="">Богдана Хмельницкого 33,<br />Саранск</a></p>
                            <div className="socials">
                                <a href=""><div className="instagram"></div></a>
                                <a href=""><div className="telegram"></div></a>
                                <a href=""><div className="facebook"></div></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
