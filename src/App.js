import React from 'react';
import './App.css';
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import MyNavbar from "./components/navbar/MyNavbar";
import Experience from "./components/experience/Experience";
import Home from './components/home/Home'

function App() {
  return (
      <div className={'main'}>
        <MyNavbar/>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
      </div>
  );
}

export default App;
