import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe";
import {Projects} from "./layout/sections/projects/Projects";
import {Skills} from "./layout/sections/skills/Skills";
import {Contacts} from "./layout/sections/contacts/Contacts";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <AboutMe/>
        <Projects/>
        <Skills/>
        <Contacts/>

    </div>
  );
}

export default App;
