import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe";
import {Projects} from "./layout/sections/projects/Projects";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";
import {SkillsOlder} from "./layout/sections/skills/SkillsOlder";
import {GoTopButton} from "./components/goTopBtn/GoTopBtn";
import {Particle} from "./components/particle/Particle";

function App() {
  return (
    <div className="App">
        <Particle/>
        <Header/>
        <Main/>
        <AboutMe/>
        <Projects/>
        <SkillsOlder/>
        <Contacts/>
        <Footer/>
        <GoTopButton/>
    </div>
  );
}

export default App;
