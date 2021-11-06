import React from 'react'
import { Formik, Field, Form } from 'formik'
import MaskedInput from 'react-text-mask'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const phoneNumberMask = [
    '+','7',' ','(',/[1-9]/,/\d/,/\d/,')',' ',/\d/,/\d/,/\d/,'-',/\d/,/\d/,'-',/\d/,/\d/
]

const validate = values => {
    let errors = {}
    if(!values.name){
        errors.name = 'Обязательное поле'
    } else if (/[^А-яA-z]/.test(values.name)){
        errors.name = 'Поле не должно содержать чисел и<br />спец. символов, в том числе пробелов'
    }
    if(!values.secondname){
        errors.secondname = 'Обязательное поле'
    } else if (/[^А-яA-z]/.test(values.secondname)){
        errors.secondname = 'Поле не должно содержать чисел и<br />спец .символов, в том числе пробелов'
    }
    if(!values.phonenumber){
        errors.phonenumber = 'Обязательное поле'
    } else if(values.phonenumber.indexOf('_') != -1){
        errors.phonenumber = 'Поле не заполнено'
    }
    if(!values.tg){
        errors.tg = 'Обязательное поле'
    }else if (values.tg.indexOf(' ') != -1){
        errors.tg = 'Поле не должно содержать пробелов'
    } else if (/[^a-z0-9_]/.test(values.tg)){
        errors.tg = 'Допустимые символы:<br />0-9, a-z, _'
    }
    return errors
}

const RequestForm = () => (
    <div style={{width: '762px'}}>
        <Formik
            initialValues={{
                name: '',
                secondname: '',
                phonenumber: '',
                tg: '',
                directions: [],
                errors: {}
            }}
            onSubmit={async (values, {resetForm}) => {
                values.errors = {}
                await sleep(500);
                if (Object.keys(validate(values)).length){
                    values.errors = validate(values)
                }else{
                    let str = `${values.name} ${values.secondname},<br />` +
                    `мы свяжемся с Вами по номеру телефона ${values.phonenumber} или в Telegram (${values.tg}).<br />`
                    if (values.directions.length != 0){
                        str += ' Среди интересов Вы указали: '
                        values.directions.forEach(elem => {
                            if (elem === 'layout') str += 'Верстка '
                            if (elem === 'frontend') str += 'Front-end '
                            if (elem === 'backend') str += 'Backend '
                        })
                    }
                    localStorage.setItem('message', str)
                    localStorage.setItem('requester', JSON.stringify(values, null, 2))
                    resetForm()
                };
            }}
        >
    {({ values, handleChange, handleBlur }) => (
        <Form>
            <fieldset className='inputs'>
                <div className='input-wrapper'>
                    <input type="text" placeholder='Имя' name='name'
                        maxLength='20'
                        value={values.name}
                        onBlur={handleBlur}
                        onChange={handleChange} />
                    <label>{values.errors.name}</label>
                </div>
                <div className='input-wrapper'>
                    <input type='text' placeholder='Фамилия' name='secondname'
                        maxLength='20'
                        value={values.secondname}
                        onBlur={handleBlur}
                        onChange={handleChange}/>
                    <label>{values.errors.secondname}</label>
                </div>
                <div className='input-wrapper'>
                    <MaskedInput type='text' placeholder='Номер телефона' name='phonenumber'
                        mask={phoneNumberMask}
                        value={values.phonenumber} 
                        onBlur={handleBlur}
                        onChange={handleChange}/>
                    <label>{values.errors.phonenumber}</label>
                </div>
                <div className='input-wrapper'>
                    <input type='text' placeholder='Ник в Telegram' name='tg'
                        value={values.tg}
                        onBlur={handleBlur}
                        onChange={handleChange} />
                    <label>{values.errors.tg}</label>
                </div>
            </fieldset>
            <fieldset>
                <h3>Какое направление Вам интересно?</h3>
                <label className={values.directions.includes('layout') ? 'checkbox checked' : 'checkbox'} >
                    <Field type='checkbox' name='directions' value='layout' />
                    Верстка
                </label>
                <label className={values.directions.includes('frontend') ? 'checkbox checked' : 'checkbox'} >
                    <Field type='checkbox' name='directions' value='frontend' />
                    Front-end
                </label>
                <label className={values.directions.includes('backend') ? 'checkbox checked' : 'checkbox'} >
                    <Field type='checkbox' name='directions' value='backend' />
                    Backend
                </label>
            </fieldset>
            <fieldset>
                <button type='submit'>Оставить заявку</button>
                <p>Нажимая “Оставить заявку” Вы соглашаетесь
                <br />с обработкой персональных данных</p>
                <br />
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

export default RequestForm