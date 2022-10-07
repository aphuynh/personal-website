import React from 'react';
import "./style/ProjectPreview.css";
import {NavLink} from "react-router-dom";

const ProjectPreview = (project) => {
    return ( 
        <div className='project-preview'>
            <div className='project-preview-name'>{project.project.projectName}</div>
            <div className='project-preview-contributors'>{project.project.contributors}</div>
            <div className='project-preview-category'>{project.project.category}</div>

            <div className='project-preview-image'></div>

            <div className='project-preview-description'>{project.project.description}</div>
            <NavLink className="project-preview-link" to="/projects">OPEN</NavLink>
        </div>
    );
}

export default ProjectPreview;