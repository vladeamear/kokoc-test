import React, { useState } from 'react';
import RequestForm from '../dynamic-blocks/request-form/request-form.js';
import Modal from '../dynamic-blocks/modal-window/modal.js'

const Header = () => {
    const [modalActive, setModalActive] = useState (false);
    return(
        <header>
            <section className="d-f jc-sb ai-c">
                <div className="logo"></div>
                <div className="right">
                    <nav>
                        <ul>
                            <li><a href="#about-anchor">О школе</a></li>
                            <li><a href="#teaching-program-anchor">Курсы</a></li>
                            <li><a href="#teachers-anchor">Преподаватели</a></li>
                        </ul>
                    </nav>
                    <button onClick={() => setModalActive(true)}>Оставить заявку</button>
                </div>
            </section>
            <Modal active={modalActive} setActive={setModalActive}><RequestForm /></Modal>
        </header>
    )
}

export default Header
