import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Sidebar from './Components/Sidebar';
import Experience from './Components/Experience';

class App extends React.Component {
  render() {
    return (
      <div className="App" id="outer-container">
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          <Routes>
            <Route className="menu-item" path="/" element={<Home />} />
            <Route className="menu-item" path="/Experience" element={<Experience />} />
            <Route className="menu-item" path="/Skills" element={<Skills />} />
            <Route className="menu-item" path="/Contact" element={<Contact />} />
          </Routes>
    </div>
    );
  }
  
}

export default App;