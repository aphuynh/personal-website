import React from 'react';
import "../style/Home.css";
//import profilePic from '../img/me.jpg';
import profilePic from '../img/profileSmall.jpg';
import ProjectPreview from '../ProjectPreview';
import StrengthBar from '../StrengthBar';

const Home = (props) => {
    return ( <div className="home-page page">
        <div className='intro-section'>
            <div className="profile-picture-wrapper">
                <img className="profile-pic" src={profilePic} alt="Angelica Huynh"></img>
            </div>
            <div className="header-banner">
                <div className='title'>
                    <div className='name'>Angelica Huynh</div>
                    <div className='position'>Software Engineer</div>
                </div>
                <div className='links'>
                    <a href="https://linkedin.com/in/angelica-huynh" target="_blank" rel="noopener noreferrer" className="fa fa-linkedin"> </a>
                    <a href="https://github.com/aphuynh" target="_blank" rel="noopener noreferrer" className="fa fa-github"> </a>
                </div>
            </div>
            <div className='about-banner'>
                <div className="description">
                    Hello! I am a recent graduate from University of California, Irvine, with a Bachelor of Science in Computer Science. I am currently working as a Full Stack Developer for Sidescrawl.

                    
                </div>
            </div>
        </div>

        <div className='project-section'>
            <div className="project-preview-banner">
                <div className='project-banner-title'>
                    My Projects
                </div>

                <div className="project-banner-description">
                    Below area few of my projects that have taught and helped me a lot for my career.
                </div>
                
            </div>
            <div className='projects-wrapper'>
                <div className='projects-background-strip'></div>
                <div className='projects'>
                    {props.projects.map((proj, idx) => (<ProjectPreview key={"project" + idx} project={proj}>
                        
                    </ProjectPreview>))}
                    
                </div>
                
            </div>
        </div>

        <div className='skills-preview-section'>
            <div className='skills-preview-info'>
                <div className='skills-preview-title'>My Skills</div>
                <div className='skills-preview-description'>Raccoons are in the family Caniformia, and are related to the mustelids. The raccoon has short legs, pointed nose, small ears, grayish-brown fur, and a bushy tail. The raccoon's most distinctive features are its multi-purpose front paws, its facial 'mask', and its striped tail.</div>
            </div>
            <div className='skills-preview'>
                {console.log(props.skills)}
                    {props.skills.map((skill, idx) => (
                        <StrengthBar skill={skill}></StrengthBar>
                    ))}
            </div>
        </div>
        
        
    </div> );
}

export default Home;