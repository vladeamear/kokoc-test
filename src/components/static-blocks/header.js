import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="section">
                    <div className="header_inner">
                        <div className="logo"></div>
                        <div className="buttons">
                            <a href="" >О школе</a>
                            <a href="" >Курсы</a>
                            <a href="" >Преподаватели</a>
                            <button>Оставить заявку</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
