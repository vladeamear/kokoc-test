import React from 'react';
import Header from '../components/header/header.js'
import Home from '../components/home/home.js'
import About from '../components/about/about.js'
import TeachingProgram from '../components/teaching-program/teaching-program.js'
import Teachers from '../components/teachers/teachers.js'
import RequestSection from '../components/request-section/request-section.js'
import Footer from '../components/footer/footer.js'

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
        teacherName: 'Елизавета',
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