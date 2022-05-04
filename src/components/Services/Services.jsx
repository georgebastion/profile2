import React from 'react';
import './Services.css'
import Glasses from '../../img/glasses.png'
import HeartEmoji from '../../img/heartemoji.png'
import Humble from '../../img/humble.png'
import Cards from './cards/cards'
function Services(props) {
    return (
        <div className='services'>
            {/*Left Side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ispum is simpley yummy text
                     <br/>of printing Lorem Ispum is
                     </span>
                <a href="./resume.pdf" download>
                    <button className="button s-button" >Download CV</button>
                </a>
            </div>
            {/*Right Side */}
            <div className="right">
                <div className="blur" style={{background:'rgb(238 210 255)'}}></div>
                <div className="r-cards">
                    <Cards image={Glasses} txt1='Developer' txt2='Html, Css, JavaScript, React, NodeJs, Express' />
                </div>
                <div className="right2">
                    <div className="cards">
                        <Cards image={HeartEmoji} txt1='Design' txt2='Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd' />
                    </div>
                    <div className="cards">
                        <Cards image={Humble} txt1='UI/UX' txt2='Designs Lorem ispum dummy text
                        are ussually sections where we need some random text' />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Services;