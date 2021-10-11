// import React, {Component} from 'react';
// import {useFormik} from 'formik';
import './style.css';

// export default function RequestForm () {

//     const validate = values => {
//         const errors = {}


//     }

//     const formik = useFormik({
//         initialValues:{
//             name: "",
            // secondname: "",
            // phonenumber: "",
            // tg: "",
//             layout: true
//         },
//         onSubmit: values => {
//             alert(JSON.stringify(values, null, 2))
//         }
//     })

//     return(
//         <div className="request">
//             <form onSubmit={formik.handleSubmit}>
//                 <fieldset className="inputs">
//                     <input type="text" placeholder="Имя" id="name"
//                         onChange={formik.handleChange}
//                         value={formik.values.name} />
//                     <input type="text" placeholder="Фамилия" id="secondname"
//                         onChange={formik.handleChange}
//                         value={formik.values.secondname} />
//                     <input type="text" placeholder="Номер телефона" id="phonenumber"
//                         onChange={formik.handleChange}
//                         value={formik.values.phonenumber} />
//                     <input type="text" placeholder="Ник в Telegram" id="tg"
//                         onChange={formik.handleChange}
//                         value={formik.values.tg} />
//                 </fieldset>
//                 <fieldset>
//                     <h3>Какое направление Вам интересно?</h3>
//                     <input type="checkbox" id="layout" name="direction" value="layout"
//                         defaultChecked={formik.values.layout} />
//                     <label htmlFor="layout"
//                         onPress={() => setFieldValue('layout', !formik.values.layout)}
//                         >Верстка</label>
//                     <input type="checkbox" id="frontend" name="direction" value="frontend"/>
//                     <label htmlFor="frontend">Front-end</label>
//                     <input type="checkbox" id="backend" name="direction" value="backend"/>
//                     <label htmlFor="backend">Backend</label>
//                 </fieldset>
//                 <fieldset>
//                     <button type="submit">Оставить заявку</button>
//                     <p>Нажимая “Оставить заявку” Вы соглашаетесь<br />с обработкой персональных данных</p>
//                 </fieldset>
//             </form>
//         </div>
//     );
// }


import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import './style.css';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const validate = values =>{
    const errors = {}

    if(!values.name){
        errors.name = 'Обязательное поле'
    }

    return JSON.stringify(errors, null, 2)
}

const RequestForm = () => (
  <div className="request">
    <Formik
        initialValues={{
            name: '',
            secondname: '',
            phonenumber: '',
            tg: '',
            directions: [],
        }}
        onSubmit={async (values, {resetForm}) => {
            await sleep(500);
            (validate(values) !== JSON.stringify({})) ? alert(validate(values)) : alert(JSON.stringify(values, null, 2));
            // alert(JSON.stringify(values, null, 2));
            resetForm()
        }}
    >
    {({ values, handleChange, handleBlur }) => (
        <Form>
            <fieldset className="inputs">
                <input type="text" placeholder="Имя" name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                <input type="text" placeholder="Фамилия" name="secondname"
                    value={values.secondname}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                <input type="text" placeholder="Номер телефона" name="phonenumber"
                    value={values.phonenumber} 
                    onChange={handleChange}
                    onBlur={handleBlur} />
                <input type="text" placeholder="Ник в Telegram" name="tg"
                    value={values.tg}
                    onChange={handleChange}
                    onBlur={handleBlur} />
            </fieldset>
            <fieldset>
                <h3>Какое направление Вам интересно?</h3>
                <label className={values.directions.includes("layout") ? "cb checked" : "cb"} >
                    <Field type="checkbox" name="directions" value="layout" />
                    Верстка
                </label>
                <label className={values.directions.includes("frontend") ? "cb checked" : "cb"} >
                    <Field type="checkbox" name="directions" value="frontend" />
                    Front-end
                </label>
                <label className={values.directions.includes("backend") ? "cb checked" : "cb"} >
                    <Field type="checkbox" name="directions" value="backend" />
                    Backend
                </label>
            </fieldset>
            <fieldset>
                <button type="submit">Оставить заявку</button>
                <p>Нажимая “Оставить заявку” Вы соглашаетесь
                <br />с обработкой персональных данных</p>
                <br />
                <p></p>
            </fieldset>
            </Form>
        )}
        </Formik>
    </div>
    );

    export default RequestForm