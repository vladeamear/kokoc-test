import React, { Component } from 'react';
import womanWithPC from "./img/w-with-big-pc.png";

class Home extends Component{
    render(){
        return(
            <div className="home">
                <div className="section">
                    <div className="home_inner">
                        <div className="home-left">
                            <h1>Бесплатное обучение веб-разработке под присмотром наставника</h1>
                            <p>Получите профессию Веб-разработчик с возможностью дальнейшего трудоустройства</p>
                            <button>Узнать больше</button>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
