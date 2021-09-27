import React, {Component} from 'react';
import {Header, Home, About, Footer} from '../static-blocks';
export default class App extends Component {
    render(){
        return(
            <>
                <Header />
                <Home />
                <About />
                <Footer />
            </>
        )
    }
}