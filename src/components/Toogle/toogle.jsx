import './toogle.css'
import React from 'react';

import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../Context';
import { useContext } from 'react';


function Toogle(props) {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const handleCLick =()=>{
        theme.dispatch({type:'toogle'})
    }
    return (
        <div className="toogle" onClick={handleCLick}>
            <Moon/>
            <Sun/>
            <div className="t-button"  style={darkMode?{left:'2px'}:{right:'2px'}}>

            </div>

        </div>
    );
}

export default Toogle;