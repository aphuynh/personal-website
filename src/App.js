import React from 'react';
import Navbar from './Navbar';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import "./style/App.css";



const App = () => {
  const projectsArray = [
    {
      projectName: "Project 1", 
      contributors: "Angelica Huynh",
      category: "Personal Project",
      description: "nafkjnfkjsadnfkjsndkfjsndkfjnksdfmksadmfkm"
    },

    {
      projectName: "Project 2", 
      contributors: "Angelica Huynh",
      category: "Personal Project",
      description: "nafkjnfkjsadnfkjsndkfjsndkfjnksdfmksadmfkm"
    },

    {
      projectName: "Project 3", 
      contributors: "Angelica Huynh",
      category: "Personal Project",
      description: "nafkjnfkjsadnfkjsndkfjsndkfjnksdfmksadmfkm"
    }

  ]

  const skillsArray = [
    {skillName: "Python", percent: 90},
    {skillName: "C/C++", percent: 60},
    {skillName: "Java", percent: 60},
    {skillName: "HTML", percent: 80},
    {skillName: "CSS", percent: 80},
    {skillName: "Javascript", percent: 85},
    {skillName: "ReactJS", percent: 80},
    {skillName: "SQL", percent: 80}
  ]

  return (
    <div className='app-page'>
      
      <Navbar/>
      <div className='content'>
        <Routes>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/" element={<Home projects={projectsArray} skills={skillsArray}/>}/>
            <Route path="/resume" element={<Resume/>}/>
        </Routes>
      </div>
      
    </div>
    
  )
}

export default App;
