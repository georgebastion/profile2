import './Experience.css'

import React from 'react';
import { useContext } from 'react';
import { themeContext } from '../../Context';

function Experience(props) {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="experience" id='Experience'>
            <div className="achievement">
                <div className="circle" style={{color: darkMode ? 'black':''}}>8+</div>
                    <span>years</span>
                    <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{color: darkMode ? 'black':''}}>20+</div>
                    <span>completed</span>
                    <span>Projects</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{color: darkMode ? 'black':''}}>5+</div>
                    <span>Companies</span>                
            </div>
        </div>
    );
}

export default Experience;