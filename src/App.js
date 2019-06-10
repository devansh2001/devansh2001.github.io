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
      <div>
        <MyNavbar/>
        <Home/>
        <About/>
        <br/>
        <hr/>
        <br/>
        <Skills/>
        <Projects/>
        <br/>
        <hr/>
        <br/>
        <Experience/>
      </div>
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
