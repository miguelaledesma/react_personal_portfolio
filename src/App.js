import React, {useState} from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";






function App() {

  



  return (
    <div className="main" id = "dark-mode" >

      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    
    </div>
  );
}

export default App;
