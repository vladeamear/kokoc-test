import React, {useState} from 'react'
import Modal from '../modal-window/modal.js'
import AddTeacherForm from './add-teacher-form.js'
import DeleteTeacherForm from './delete-teacher-form.js'

import './style.css'

let NewTeachers = () => ({
    render: function(){
        let newteachers = JSON.parse(localStorage.getItem('teachers'));
        if (newteachers) {
            let listofteachers = newteachers.map(function(obj){
                return <div className="card">
                    <div className={`avatar man${obj.teacherPic}`}></div>
                    <h3 dangerouslySetInnerHTML={{__html: obj.teacherName}} />
                    <p dangerouslySetInnerHTML={{__html: obj.teacherStatus}} />
                    <p dangerouslySetInnerHTML={{__html: obj.teacherExp}} />
                </div>
            })
            return <>{listofteachers}</>
        }
        return <></>
    }
})

let inner = ''

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
                        <button onClick={() => {setModalActive(true); inner = <AddTeacherForm />}}>+</button>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => {setModalActive(true); inner = <DeleteTeacherForm />}}>-</button>
                    </div>
                    <div className="d-f g-40">
                        <NewTeachers ></NewTeachers>
                    </div>
                    <Modal active={modalActive} setActive={setModalActive}>{inner}</Modal>
                </div>
            </section>
        </div>
    );
}

export default Teachers