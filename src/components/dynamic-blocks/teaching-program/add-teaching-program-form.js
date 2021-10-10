import React, {Component} from 'react';
import './style.css';

export default class AddTeachingProgramForm extends Component {

    constructor(props){
        super(props);
        this.eventNSName = this.eventNSName.bind(this);
        this.eventNSTask = this.eventNSTask.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state={
            newStageName: '',
            newStageTask: ''
        };
    }

    eventNSName(event) {
        this.setState({ newStageName: event.target.value })
    }
    eventNSTask(event) {
        this.setState({ newStageTask: event.target.value })
    }
    onFormSubmit(event) {
        event.preventDefault();
        let stages = localStorage.getItem('stages') ? JSON.parse(localStorage.getItem('stages')) : [];
        stages = [...stages, this.state]
        localStorage.setItem('stages', JSON.stringify(stages));
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <fieldset className="inputs">
                    <input type="text" placeholder="Название" value={this.state.newStageName} onChange={this.eventNSName} />
                    <input type="text" placeholder="Задача курса" value={this.state.newStageTask} onChange={this.eventNSTask} />
                </fieldset>
                <fieldset>
                    <button type="submit">Добавить этап</button>
                </fieldset>
            </form>
        );
    }
}