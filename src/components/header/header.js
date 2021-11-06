import React, { useState } from 'react'
import RequestForm from '../request-form/request-form.js'
import Modal from '../modal-window/modal.js'
import './style.css'

const Header = () => {
    const [modalActive, setModalActive] = useState (false);
    return(
        <header>
            <section>
                <div className='header__logo'></div>
                <div className='header__right-part'>
                    <nav>
                        <ul>
                            <li><a href='#about-anchor'>О школе</a></li>
                            <li><a href='#teaching-program-anchor'>Курсы</a></li>
                            <li><a href='#teachers-anchor'>Преподаватели</a></li>
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