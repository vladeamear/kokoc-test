import React from 'react';
import { Formik, Form } from 'formik';
import './style.css';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const validate = values => {
    let errors = {}

    if(!values.stagePic){
        errors.stagePic = 'Обязательное поле'
    }

    if(!values.stageName){
        errors.stageName = 'Обязательное поле'
    }

    if(!values.stageDescription){
        errors.stageDescription = 'Обязательное поле'
    }

    return errors
}

const AddTeachingProgramForm = () => (
<div style={{width: '762px'}}>
    <Formik
        initialValues={{
            stagePic: '',
            stageName: '',
            stageDescription: '',
            errors: {}
        }}
        onSubmit={async (values, {resetForm}) => {
            values.errors = {}
            await sleep(500);
            if (Object.keys(validate(values)).length){
                values.errors = validate(values)
            }else{
                let stages = localStorage.getItem('stages') ? JSON.parse(localStorage.getItem('stages')) : [];
                stages = [...stages, values]
                localStorage.setItem('stages', JSON.stringify(stages, null, 2));
                localStorage.setItem('message', 'Этап программы добавлена, закройте окно')
                resetForm()
            };
            
        }}
    >
    {({ values, handleChange }) => (
        <Form>
            <fieldset className="inputs">
                <div className="input-wrapper">
                    <input type="number" placeholder="№ картинки (1-4)" name="stagePic"
                        min="1"
                        max="4"
                        value={values.stagePic}
                        onChange={handleChange} />
                    <label>{values.errors.stagePic}</label>
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Название" name="stageName"
                        value={values.stageName}
                        onChange={handleChange} />
                    <label>{values.errors.stageName}</label>
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Описание" name="stageDescription"
                        value={values.stageDescription}
                        onChange={handleChange}/>
                    <label>{values.errors.stageDescription}</label>
                </div>
            </fieldset>
            <fieldset>
                <button type="submit">Добавить программу</button>
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

export default AddTeachingProgramForm