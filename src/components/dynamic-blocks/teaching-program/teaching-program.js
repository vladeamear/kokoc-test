import React, {useState} from 'react';
import './style.css';
import pc0 from '../img/computers0.png'
import pc1 from '../img/computers1.png'
import pc2 from '../img/computers2.png'
import pc3 from '../img/computers3.png'
import certificate from '../img/certificate.png'
import Modal from '../modal-window/modal.js'
import AddTeachingProgramForm from './add-teaching-program-form.js'
import RequestForm from '../request-form/request-form.js'
import { RequstForm } from '..';

let NewStages = () => ({
    render: function(){
        let newstages = JSON.parse(localStorage.getItem('stages'));
        if (newstages) {
            let listofstages = newstages.map(function(obj){
                return <div className="card p-20">
                    <img src={pc0} />
                    <h3>{obj.newStageName}</h3>
                    <p>Задача курса: {obj.newStageTask}</p>
                </div>
            })
            return <>{listofstages}</>
        }
        return <></>
    }
})

let inner = "";

const TeachingProgram = () => {
    const [modalActive, setModalActive] = useState (false);
    return (
        <div id="teaching-program" className="b-r">
            <div id="teaching-program-anchor"></div>
            <section className="pt-75 pb-75 c-w">
                <div className="d-f mb-50">
                    <div>
                        <h2>Профессия "Веб-разработчик"</h2>
                        <p>Программа обучения</p>
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <button className="c-r b-w" onClick={() => {
                        setModalActive(true)
                        inner = <AddTeachingProgramForm />}}>+</button>
                </div>
                <div className="d-f g-20 c-b">
                    <div className="card p-20">
                        <img src={pc1} />
                        <h3>Домены, сайты,<br />поисковые системы</h3>
                        <p>Задача курса: понять как работают сайты; понять какие есть варианты создания сайтов и их публикации в сети</p>
                    </div>
                    <div className="card p-20">
                        <img src={pc2} />
                        <h3>Создание статичного<br />сайта</h3>
                        <p>Задача курса: научиться делать статичные Html-страницы (верстать блоки) с помощью современной IDE</p>
                    </div>
                    <div className="card p-20">
                        <img src={pc3} />
                        <h3>Создание динамического<br />сайта</h3>
                        <p>Задача курса: научиться делать бекенд разработку - php и mysql</p>
                    </div>
                    <NewStages></NewStages>
                </div>
                <div className="d-f g-40 mt-50 mb-50">
                    <div className="f-1">
                        <h3>Как проходит обучение?</h3>
                        <ul>
                            <li>Вы оставляете заявку, мы с Вами связываемся<br />и назначаем время собеседования</li>
                            <li>После прохождения собеседования мы сообщаем Вам дату начала обучения, открываем доступы<br />к курсу, заводим Вам дневник для отчетности</li>
                            <li>За каждым студентом закрепляется куратор, который систематически проверяет домашние задания, дает обратную связь</li>
                            <li>Вы выполняете задания в любое удобное время, фиксируете свои решения в дневнике, куратор проверяет Ваши домашние задания и дает обратную связь.</li>
                        </ul>
                    </div>
                    <div className="f-1">
                        <h3>Что после прохождения курсов?</h3>
                        <p className="mt-10 mb-30">По окончанию обучения Вы получаете сертификат<br />и возможность продолжить обучение у нас<br />в компании на оплачиваемой стажировке</p>
                        <div className="img-wrapper">
                            <img src={certificate} />
                        </div>
                    </div>
                </div>
                <div className="d-f jc-c">
                    <button className="b-w c-r" onClick={() => {
                        setModalActive(true)
                        inner = <RequstForm />
                        console.log(inner)}}>Оставить заявку</button>
                </div>
            </section>
            <Modal active={modalActive} setActive={setModalActive}>{inner}</Modal>
        </div>
    );
}

export default TeachingProgram