import React, {useState} from 'react'
import certificate from '../../img/misc/certificate.png'
import Modal from '../modal-window/modal.js'
import AddTeachingProgramForm from './add-teaching-program-form.js'
import DeleteTeachingProgramForm from './delete-teaching-program-form.js'
import RequestForm from '../request-form/request-form.js'
import './style.css'

let Stages = () => ({
    render: function(){
        let stages = JSON.parse(localStorage.getItem('stages'))
        if (stages) {
            let listofstages = stages.map(function(obj){
                return <div className='card card-teaching-program'>
                    <div className={`pc pc${(obj.stagePic).toString()}`} />
                    <h3 dangerouslySetInnerHTML={{__html: obj.stageName}} />
                    <p dangerouslySetInnerHTML={{__html: 'Задача курса: ' + obj.stageDescription}} />
                </div>
            })
            return <>{listofstages}</>
        }
        return <></>
    }
})

let inner = '';

const TeachingProgram = () => {
    const [modalActive, setModalActive] = useState (false);
    return (
        <div id='teaching-program' className='teaching-program'>
            <div id='teaching-program-anchor'></div>
            <section>
                <div className='teaching-program__header'>
                    <div>
                        <h2>Профессия "Веб-разработчик"</h2>
                        <p>Программа обучения</p>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <button className='teaching-program__header_button' onClick={() => {
                        setModalActive(true)
                        inner = <AddTeachingProgramForm />}}>+</button>
                    &nbsp;&nbsp;&nbsp;
                    <button className='teaching-program__header_button' onClick={() => {
                        setModalActive(true)
                        inner = <DeleteTeachingProgramForm />}}>-</button>
                </div>
                <div className='teaching-program__stages'>
                    <Stages></Stages>
                </div>
                <div className='teaching-program__description'>
                    <div className='teaching-program__description_column'>
                        <h3>Как проходит обучение?</h3>
                        <ul>
                            <li>Вы оставляете заявку, мы с Вами связываемся<br />и назначаем время собеседования</li>
                            <li>После прохождения собеседования мы сообщаем Вам дату начала обучения, открываем доступы<br />к курсу, заводим Вам дневник для отчетности</li>
                            <li>За каждым студентом закрепляется куратор, который систематически проверяет домашние задания, дает обратную связь</li>
                            <li>Вы выполняете задания в любое удобное время, фиксируете свои решения в дневнике, куратор проверяет Ваши домашние задания и дает обратную связь.</li>
                        </ul>
                    </div>
                    <div className='teaching-program__description_column'>
                        <h3>Что после прохождения курсов?</h3>
                        <p>По окончанию обучения Вы получаете сертификат<br />и возможность продолжить обучение у нас<br />в компании на оплачиваемой стажировке</p>
                        <div className='img-wrapper'>
                            <img src={certificate} />
                        </div>
                    </div>
                </div>
                <div className='teaching-program__button_wrapper'>
                    <button onClick={() => {
                        setModalActive(true)
                        inner = <RequestForm />}}>Оставить заявку</button>
                </div>
            </section>
            <Modal active={modalActive} setActive={setModalActive}>{inner}</Modal>
        </div>
    )
}

export default TeachingProgram