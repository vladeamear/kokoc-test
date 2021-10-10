import React, {useState} from 'react'
import Modal from '../modal-window/modal.js'
import AddTeacherForm from './add-teacher-form.js'

import './style.css'

let NewTeachers = () => ({
    render: function(){
        let newteachers = JSON.parse(localStorage.getItem('teachers'));
        if (newteachers) {
            let listofteachers = newteachers.map(function(obj){
                return <div className="card">
                    <div className="avatar man0"></div>
                    <h3>{obj.newTeacherName}</h3>
                    <p>{obj.newTeacherStatus}</p>
                    <p>{obj.newTeacherExp}</p>
                </div>
            })
            return <>{listofteachers}</>
        }
        return <></>
    }
})

const Teachers = () => {
    const [modalActive, setModalActive] = useState (false);
    return (
        <div id="teachers" className="b-f9f9f9">
            <div id="teachers-anchor"></div>
            <section className="pb-75 pt-75">
                <div className="teachers_inner">
                    <div className="d-f mb-50">
                        <h2>Команда преподавателей</h2>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => setModalActive(true)}>+</button>
                    </div>
                    <div className="d-f g-40">
                        <div className="card">
                            <div className="avatar man1"></div>
                            <h3>Александр</h3>
                            <p>Software Development Engineer</p>
                            <p>12 лет в веб-разаботке</p>
                        </div>
                        <div className="card">
                            <div className="avatar man2"></div>
                            <h3>Елизавета</h3>
                            <p>Software Development Engineer</p>
                            <p>9 лет в веб-разаботке</p>
                        </div>
                        <div className="card">
                            <div className="avatar man3"></div>
                            <h3>Виктория</h3>
                            <p>Software Development Engineer</p>
                            <p>11 лет в веб-разаботке</p>
                        </div>
                        <NewTeachers ></NewTeachers>
                    </div>
                    <Modal active={modalActive} setActive={setModalActive}><AddTeacherForm /></Modal>
                </div>
            </section>
        </div>
    );
}

export default Teachers