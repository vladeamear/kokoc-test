import React from 'react'
import { Formik, Form } from 'formik'
import './style.css'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const validate = values => {
    let errors = {}
    if(!values.teacherPic){
        errors.teacherPic = 'Обязательное поле'
    }
    if(!values.teacherName){
        errors.teacherName = 'Обязательное поле'
    } else if (/[^А-я]/.test(values.teacherName)){
        errors.teacherName = 'Допустимые символы: А-я'
    }
    if(!values.teacherStatus){
        errors.teacherStatus = 'Обязательное поле'
    }
    if(!values.teacherExp){
        errors.teacherExp = 'Обязательное поле'
    } 
    return errors
}

const AddTeacherForm = () => (
    <div style={{width: '762px'}}>
        <Formik
            initialValues={{
                teacherPic: '',
                teacherName: '',
                teacherStatus: '',
                teacherExp: '',
                errors: {}
            }}
            onSubmit={async (values, {resetForm}) => {
                values.errors = {}
                await sleep(500);
                if (Object.keys(validate(values)).length){
                    values.errors = validate(values)
                }else{
                    let teachers = localStorage.getItem('teachers') ? JSON.parse(localStorage.getItem('teachers')) : []
                    teachers = [...teachers, values]
                    localStorage.setItem('teachers', JSON.stringify(teachers, null, 2))
                    localStorage.setItem('message', 'Преподаватель добавлен, закройте окно')
                    resetForm()
                };
                
            }}
        >
        {({ values, handleChange, handleBlur }) => (
            <Form>
                <fieldset className='inputs'>
                    <div className='input-wrapper'>
                        <input type='number' placeholder='№ картинки (1-4)' name='teacherPic'
                            min='1'
                            max='4'
                            onChange={handleChange} />
                        <label>{values.errors.teacherPic}</label>
                    </div>
                    <div className='input-wrapper'>
                        <input type='text' placeholder='Имя' name='teacherName'
                            value={values.teacherName}
                            onChange={handleChange} />
                        <label>{values.errors.teacherName}</label>
                    </div>
                    <div className='input-wrapper'>
                        <input type='text' placeholder='Направление' name='teacherStatus'
                            value={values.teacherStatus}
                            onBlur={handleBlur}
                            onChange={handleChange}/>
                        <label>{values.errors.teacherStatus}</label>
                    </div>
                    <div className='input-wrapper'>
                        <input type='text' placeholder='Опыт' name='teacherExp'
                            value={values.teacherExp} 
                            onBlur={handleBlur}
                            onChange={handleChange}/>
                        <label>{values.errors.teacherExp}</label>
                    </div>
                </fieldset>
                <fieldset>
                    <button type='submit'>Добавить преподавателя</button>
                    <p
                        className={
                            localStorage.getItem('message')
                            ? 'message a'
                            : 'message'
                        }
                        dangerouslySetInnerHTML={{__html: localStorage.getItem('message')}} />
                </fieldset>
            </Form>
        )}
        </Formik>
    </div>
)

export default AddTeacherForm