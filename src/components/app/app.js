import React, {useState} from 'react';
import {Header, Home, About, Footer, RequestSection} from '../static-blocks';
import {Teachers, TeachingProgram} from '../dynamic-blocks';

const App = () => {
    return(
        <>
            <Header />
            <Home />
            <About />
            <TeachingProgram />
            <Teachers/>
            <RequestSection />
            <Footer />
        </>
    )
}

export default App