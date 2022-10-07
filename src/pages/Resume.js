import React from 'react';
import "../style/Resume.css";

const Resume = () => {
    return ( <div className="resume-page page">
        <div className="header-banner-2">
            <div className='title title-2'>
                <div className='name'>Angelica Huynh</div>
                <div className='position'>Software Engineer</div>
            </div>
            <div className='links'>
                <a href="https://linkedin.com/in/angelica-huynh" target="_blank" rel="noopener noreferrer" className="fa fa-linkedin"> </a>
                <a href="https://github.com/aphuynh" target="_blank" rel="noopener noreferrer" className="fa fa-github"> </a>
            </div>
        </div>

        <div className='download-section'>
            <a className='download-btn'>Download PDF</a>
        </div>

        <div className='education-section'>
            <div className='education-title'>Education</div>
            <div className='education-info'>
                <div className='left-education'>
                    <div className='education-school'>University of California, Irvine</div>
                    <div className='education-major'>Bachelor of Science in Computer Science</div>
                    <div className='education-gpa'>GPA: 3.62, Dean's List (6 Semesters)</div>
                </div>
                <div className='right-education'>
                    <div className='education-graduation-year'>June 2022</div>
                </div>
            </div>
        </div>

        <div className='skills-section'>
            <div className='skills-title'>Technical Skills</div>
            <div className='skills'></div>
        </div>

        <div className='section-wrapper'>
            <div className='section-name'>Experience</div>
            <div className='experience-wrapper'></div>
        </div>
        <div className='section-wrapper'>
            <div className='section-name'>Projects</div>
            <div className='projects-wrapper'></div>
        </div>

    </div>  );
}

export default Resume;