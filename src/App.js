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
      projectName: "FabFlix", 
      contributors: "Angelica Huynh",
      category: "School Project",
      description: "Fabflix is a web-based ecommerce system where users are able to browse and purchase movies.\n This project gave experience in all different areas of development, including frontend, backend, databases, testing, and design."
    },

    {
      projectName: "UCI Search Engine", 
      contributors: "Angelica Huynh",
      category: "School Project",
      description: "nafkjnfkjsadnfkjsndkfjsndkfjnksdfmksadmfkm"
    },

    {
      projectName: "Blobs Vs. Toys", 
      contributors: "Angelica Huynh",
      category: "School Project",
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
            <Route path="/" element={<Home projects={projectsArray} skills={skillsArray}/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </div>
      
    </div>
    
  )
}

export default App;
