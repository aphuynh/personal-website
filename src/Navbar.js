import React from 'react';
import {NavLink} from "react-router-dom";
import "./style/Navbar.css";

const Navbar = () => {

    const getNavClass = (state) =>{
        return state.isActive ? "nav-item active-nav-item" : "nav-item";
    }

    return ( 
        <>
            <nav className='nav-bar'>
                    <NavLink className={getNavClass} to="/projects">Projects</NavLink>
                    <NavLink className={getNavClass} to="/" end>Home</NavLink>
                    <NavLink className={getNavClass} to="/resume">Resume</NavLink>
                
            </nav>
        </>
    );
}

export default Navbar;