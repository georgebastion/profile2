import React from 'react';
import './Navbar.css'
import Toogle from '../Toogle/toogle';

import { Link } from 'react-scroll/modules';
function Navbar(props) {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Bastion</div>
                <Toogle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{listStyleType:'none', cursor: 'pointer', color: 'var(--orange)'}}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'><li>Home</li></Link>
                        <Link spy={true} to='Services' smooth={true} activeClass='activeClass'><li>Services</li></Link>
                        <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'><li>Experience</li></Link>

                        <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'><li>Portfolio</li></Link>

                        <Link spy={true} to='Testimonials' smooth={true} activeClass='activeClass'><li>Testimonials</li></Link>                    
                        
                    </ul>
                </div>
                <button className="button">Contact</button>
            </div>
        </div>
    );
}

export default Navbar;