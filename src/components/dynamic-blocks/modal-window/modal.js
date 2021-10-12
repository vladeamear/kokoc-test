import React from 'react'
import './style.css'

const Modal = ({active, setActive, children}) => {
    localStorage.removeItem('message')
    return (
        <div
            className={active ? "modal active" : "modal"}
            onClick={() => {setActive(false); localStorage.removeItem('message')}}>
            <div className='modal_content' onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal