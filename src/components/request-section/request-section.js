import React, { Component } from 'react'
import RequstForm from '../request-form/request-form.js'
import './style.css'

export default class RequestSection extends Component{
    render(){
        return(
            <div id='request-section' className='request-section'>
                <section>
                    <h2>Записаться на курс</h2>
                    <div className='request-section__request-form-wrapper'>
                        <RequstForm />
                    </div>
                </section>
            </div>
        )
    }
}