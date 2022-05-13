import React from 'react';
import './Intro.css'
import Github from '../../img/github.png'
import Instagram  from '../../img/instagram.png'
import Linkendin from '../../img/linkedin.png'

import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'

import FloatingDiv from './FloatingDiv/FloatingDiv'
import { useContext } from 'react';
import { themeContext } from '../../Context';

import { motion } from 'framer-motion';
const Intro = () => {
    const transitionn={duration:3,type:'spring'}
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro" id='Home'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I'm</span>
                    <span>Georgie Bastion</span>
                    <span>Frontend Developer with high level
                        of experience in web designing and development,
                        producing the Quality work
                    </span>
                </div>
                <button className="button i-button">Hire Me</button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={Linkendin} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img 
                initial={{left:'-36%'}}
                whileInView={{left:'-24%'}}
                transition={transitionn}
                src={glassesimoji} style={{top:'20%', transform:'scale(0.6)', left:'45%'}} alt=""  className='floating-div'/>
                
                <motion.div
                initial={{top:'-4%',left:'74%'}}
                whileInView={{left:'68%'}}
                transition={transitionn}
                style={{top:'-4%', left:'68%', color: darkMode? 'black':''}} className='floating-div'> 
                    <FloatingDiv image={Crown}  txt1='Web' txt2='Developer'/>
                </motion.div>
                <motion.div
                initial={{left:'9rem'}}
                whileInView={{left:'0rem'}}
                transition={transitionn}
                style={{top:'18rem', left:'0rem', color: darkMode? 'black':''}}> 
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
                </motion.div>
                {/*blur divs */}

                <div className="blur" style={{background:'rgb(238 210 255)', top:'10rem', width:'21rem', height:'17rem',left:'0rem'}}></div>
                <div className="blur" style={{background:'#C1F5FF', top:'-15%', width:'31rem', height:'17rem',left:'50%'}}></div>

            </div>
        </div>
    );
};

export default Intro;