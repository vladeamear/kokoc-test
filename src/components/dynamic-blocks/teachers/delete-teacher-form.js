import React from 'react';
import { Formik, Form } from 'formik';
import './style.css';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const validate = values => {
    let errors = {}

    if(!values.number){
        errors.number = 'Обязательное поле'
    }

    return errors
}

let OldTeachers = () => ({
    render: function(){
        let teachers = JSON.parse(localStorage.getItem('teachers'));
        if (teachers) {
            let listofteachers = teachers.map(function(obj, index){
                return <p style={{opacity: "1", textAlign: 'left'}}> 
                    <b className="c-r">{index+1}: </b> {obj.teacherName}: {obj.teacherStatus}, {obj.teacherExp}
                </p>
            })
            return <>{listofteachers}</>
        }
        return <></>
    }
})


const DeleteTeacherForm = () => (
  <div>
    <Formik
        initialValues={{
            number: '',
            errors: {}
        }}
        onSubmit={async (values, {resetForm}) => {
            values.errors = {}
            await sleep(500);
            if (Object.keys(validate(values)).length){
                values.errors = validate(values)
            }else{
                let teachers = JSON.parse(localStorage.getItem('teachers'))
                teachers.splice(values.number-1, 1)
                localStorage.setItem('teachers', JSON.stringify(teachers, null, 2));
                localStorage.setItem('message', 'Преподаватель удалён, закройте окно')
                resetForm()
            };
            
        }}
    >
    {({ values, handleChange }) => (
        <Form>
            <fieldset>
                <OldTeachers />
            </fieldset>
            <fieldset>
                <div className="input-wrapper">
                    <input type="number" placeholder="№" name="number"
                        style={{textAlign: 'center'}}
                        min="1"
                        max={JSON.parse(localStorage.getItem('teachers')).length}
                        value={values.number}
                        onChange={handleChange} />
                    <label>{values.errors.number}</label>
                </div>
            </fieldset>
            <fieldset>
                <button type="submit">Удалить преподавателя</button>
                <p
                    className={
                        localStorage.getItem('message')
                        ? "message a"
                        : "message"
                    }
                    dangerouslySetInnerHTML={{__html: localStorage.getItem('message')}} />
            </fieldset>
            </Form>
        )}
        </Formik>
    </div>
);

export default DeleteTeacherForm