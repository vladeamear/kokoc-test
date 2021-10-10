import React, { Component } from 'react';
import {RequstForm} from '../dynamic-blocks/index.js'

export default class RequestSection extends Component{
    render(){
        return(
            <div id="request-section">
                <section className="d-f pt-75 pb-75">
                    <h2 className="mb-50 ta-c w-100">Записаться на курс</h2>
                    <div className="d-f jc-c w-100">
                        <RequstForm />
                    </div>
                </section>
            </div>
        )
    }
}