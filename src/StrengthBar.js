import React from 'react';
import "./style/StrengthBar.css";

const StrengthBar = (props) => {
    return ( 
        <div className='strength'>
            <div className='skill-preview-name'>{props.skill.skillName}</div>
            <div className='strength-bar'>
                <div className='strength-level' style={{width: props.skill.percent + "%"}}></div>
                <div className='percent'>{props.skill.percent}%</div>
            </div>
        </div>
    );
}

export default StrengthBar;