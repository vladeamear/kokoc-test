import React, { Component } from 'react';
import womanWithPC from "./img/w-with-big-pc.png";

class Home extends Component{
    render(){
        return(
            <div id="home" className="d-f b-w">
                <section className="d-f jc-sb pt-75 pb-75">
                    <div className="home-left">
                        <h1>Бесплатное обучение веб-разработке под присмотром наставника</h1>
                        <p className="pb-50">Получите профессию Веб-разработчик с возможностью дальнейшего трудоустройства</p>
                        <button onClick={(e) => {
                            e.preventDefault();
                            window.location.href='/#about-anchor';
                            }}>Узнать больше</button>
                    </div>
                    <div className="home-right">
                        <img src={womanWithPC} />
                        <span className="php">PHP</span>
                        <span className="js">JAVA SCRIPT</span>
                        <span className="xml">XML</span>
                        <span className="html">HTML</span>
                        <span className="sql">SQL</span>
                        <span className="css">CSS</span>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home
