import './Works.css'
import React from 'react';
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'

const Works = () => {
    return (
        <div className="experience1">
            <div className="awesome">
                <span>Past Experiences</span>
                <span>Brands & Clients</span>
                <span>Lorem ispum is simpley yummy text
                     <br/>of printing Lorem Ispum is
                     </span>
                <a href="#contact" >
                    <button className="button s-button" >Hire me</button>
                </a>
            </div>
            <div className="r-side">
                <div className="mainCircle">
                    <div className="secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </div>
                <div className="backCircle blueCircle"></div>
                <div className="backCircle yellowCircle"> </div>
            </div>
        </div>
       
    );
};

export default Works;