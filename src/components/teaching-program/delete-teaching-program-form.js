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

let OldStages = () => ({
    render: function(){
        let stages = JSON.parse(localStorage.getItem('stages'))
        if (stages) {
            let listofstages = stages.map(function(obj, index){
                return <p style={{opacity: '1', textAlign: 'left'}}> 
                    <b className='c-r'>{index+1}: </b> {obj.stageName}: {obj.stageDescription}
                </p>
            })
            return <>{listofstages}</>
        }
        return <></>
    }
})

const DeleteTeachingProgramForm = () => (
    <div style={{width: '762px'}}>
        <Formik
            initialValues={{
                number: '',
                errors: {}
            }}
            onSubmit={async (values, {resetForm}) => {
                values.errors = {}
                await sleep(500)
                if (Object.keys(validate(values)).length){
                    values.errors = validate(values)
                }else{
                    let stages = JSON.parse(localStorage.getItem('stages'))
                    stages.splice(values.number-1, 1)
                    localStorage.setItem('stages', JSON.stringify(stages, null, 2))
                    localStorage.setItem('message', 'Этап программы удалён, закройте окно')
                    resetForm()
                }
            }}
        >
        {({ values, handleChange }) => (
            <Form>
                <fieldset>
                    <OldStages />
                </fieldset>
                <fieldset>
                    <div className='input-wrapper'>
                        <input type='number' placeholder='№' name='number'
                            style={{textAlign: 'center'}}
                            min='1'
                            max={JSON.parse(localStorage.getItem('stages')).length}
                            value={values.number}
                            onChange={handleChange} />
                        <label>{values.errors.number}</label>
                    </div>
                </fieldset>
                <fieldset>
                    <button type='submit'>Удалить этап</button>
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

export default DeleteTeachingProgramForm