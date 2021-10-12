import React from 'react';
import {Header, Home, About, Footer, RequestSection} from '../static-blocks';
import {Teachers, TeachingProgram} from '../dynamic-blocks';

const stages = [
    {
        stagePic: '2',
        stageName: 'Домены, сайты,<br />поисковые системы',
        stageDescription: 'понять как работают сайты; понять какие есть варианты создания сайтов и их публикации в сети'
    },
    {
        stagePic: '3',
        stageName: 'Создание статичного<br />сайта',
        stageDescription: 'научиться делать статичные Html-страницы (верстать блоки) с помощью современной IDE'
    },
    {
        stagePic: '4',
        stageName: 'Создание динамического<br />сайта',
        stageDescription: 'научиться делать бекенд разработку - php и mysql'
    }
]

const teachers = [
    {
        teacherPic: '2',
        teacherName: 'Александр',
        teacherStatus: 'Software Development Engineer',
        teacherExp: '12 лет в веб-разаботке' 
    },
    {
        teacherPic: '3',
        teacherName: 'Елизовета',
        teacherStatus: 'Software Development Engineer',
        teacherExp: '9 лет в веб-разаботке' 
    },
    {
        teacherPic: '4',
        teacherName: 'Виктория',
        teacherStatus: 'Software Development Engineer',
        teacherExp: '11 лет в веб-разаботке' 
    }
]

const App = () => {
    localStorage.removeItem('message')
    if (!(localStorage.getItem('stages')) || JSON.parse(localStorage.getItem('stages')).length == 0){
        localStorage.setItem('stages', JSON.stringify(stages))
    }
    if (!localStorage.getItem('teachers') || JSON.parse(localStorage.getItem('teachers')).length == 0){
        localStorage.setItem('teachers', JSON.stringify(teachers))
    }
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