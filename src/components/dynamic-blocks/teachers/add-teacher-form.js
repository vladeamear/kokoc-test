import React, {Component} from 'react';
import './style.css';

export default class AddTeacherForm extends Component {

    constructor(props){
        super(props);
        this.eventNTName = this.eventNTName.bind(this);
        this.eventNTStatus = this.eventNTStatus.bind(this);
        this.eventNTExp = this.eventNTExp.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state={
            newTeacherName: '',
            newTeacherStatus: '',
            newTeacherExp: ''
        };
    }

    eventNTName(event) {
        this.setState({ newTeacherName: event.target.value })
    }
    eventNTStatus(event) {
        this.setState({ newTeacherStatus: event.target.value })
    }
    eventNTExp(event) {
        this.setState({ newTeacherExp: event.target.value })
    }
    onFormSubmit(event) {
        event.preventDefault();
        let teachers = localStorage.getItem('teachers') ? JSON.parse(localStorage.getItem('teachers')) : [];
        teachers = [...teachers, this.state]
        localStorage.setItem('teachers', JSON.stringify(teachers));
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <fieldset className="inputs">
                    <input type="text" placeholder="Имя" value={this.state.newTeacherName} onChange={this.eventNTName} />
                    <input type="text" placeholder="Должность" value={this.state.newTeacherStatus} onChange={this.eventNTStatus} />
                    <input type="text" placeholder="Опыт работы" value={this.state.newTeacherExp} onChange={this.eventNTExp} />
                </fieldset>
                <fieldset>
                    <button type="submit">Добавить учителя</button>
                </fieldset>
            </form>
        );
    }
}