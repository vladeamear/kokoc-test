import React, {Component} from 'react';
import './style.css';

export default class RequestForm extends Component {

    DATA;
    
    constructor(props){
        super(props);
        this.eventName = this.eventName.bind(this);
        this.eventSecondname = this.eventSecondname.bind(this);
        this.eventPhoneNumber = this.eventPhoneNumber.bind(this);
        this.eventTG = this.eventTG.bind(this);
        this.toggleLayout = this.toggleLayout.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state={
            name: '',
            secondname: '',
            phoneNumber: '',
            tg: '',
            layout: true,
            frontend: false,
            backend: false
        };
    }

    eventName(event) {
        this.setState({ name: event.target.value })
    }
    eventSecondname(event) {
        this.setState({ secondname: event.target.value })
    }
    eventPhoneNumber(event) {
        this.setState({ phoneNumber: event.target.value })
    }
    eventTG(event) {
        this.setState({ tg: event.target.value })
    }
    toggleLayout = () => {
        this.setState({layout: !this.state.layout});
    }
    toggleFrontend = () => {
        this.setState({frontend: !this.state.frontend});
    }
    toggleBackend = () => {
        this.setState({backend: !this.state.backend});
    }
    onFormSubmit(event) {
        event.preventDefault();
        localStorage.setItem('contact_form', JSON.stringify(this.state));
        
    }

    componentDidMount() {
        this.DATA = JSON.parse(localStorage.getItem('contact_form'));

        if (localStorage.getItem('contact_form')) {
            this.setState({
                name: this.DATA.name,
                secondname: this.DATA.secondname,
                phoneNumber: this.DATA.phoneNumber,
                tg: this.DATA.tg,
                layout: this.DATA.layout,
                frontend: this.DATA.frontend,
                backend: this.DATA.backend
            })
        } else {
            this.setState({
                name: '',
                secondname: '',
                phoneNumber: '',
                tg: '',
                layout: true,
                frontend: false,
                backend: false
            })
        }
    }

    render(){
        return(
            <div className="request">
                <form onSubmit={this.onFormSubmit}>
                    <fieldset className="inputs">
                        <input type="text" placeholder="Имя" value={this.state.name} onChange={this.eventName} />
                        <input type="text" placeholder="Фамилия"  value={this.state.secondname} onChange={this.eventSecondname} />
                        <input type="text" placeholder="Номер телефона" value={this.state.phoneNumber} onChange={this.eventPhoneNumber} />
                        <input type="text" placeholder="Ник в Telegram" value={this.state.tg} onChange={this.eventTG} />
                    </fieldset>
                    <fieldset>
                        <h3>Какое направление Вам интересно?</h3>
                        <input type="checkbox" id="layout" name="direction" value="layout" defaultChecked={this.state.layout}/>
                        <label htmlFor="layout" onClick={this.toggleLayout}
                            >Верстка</label>
                        <input type="checkbox" id="frontend" name="direction" value="frontend"
                            defaultChecked={this.state.frontend} />
                        <label htmlFor="frontend" onClick={this.toggleFrontend}>Front-end</label>
                        <input type="checkbox" id="backend" name="direction" value="backend"
                            defaultChecked={this.state.backend} />
                        <label htmlFor="backend" onClick={this.toggleBackend}>Backend</label>
                    </fieldset>
                    <fieldset>
                        <button type="submit">Оставить заявку</button>
                        <p>Нажимая “Оставить заявку” Вы соглашаетесь<br />с обработкой персональных данных</p>
                    </fieldset>
                </form>
            </div>
        );
    }
}