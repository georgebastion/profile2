import React from 'react';
import './Footer.css'
import Wave from "../../img/wave.png"
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import UilFacebook from '@iconscout/react-unicons/icons/uil-facebook';
import UilWhatsapp from '@iconscout/react-unicons/icons/uil-whatsapp';


function Footer(props) {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{width: '100%'}} />
            <div className="f-content">
                <span>georgejacob437@gmail.com</span>
                <div className="f-icons">
                    <Insta size='3rem'/>
                    <UilFacebook size='3rem'/>
                    <UilWhatsapp size='3rem'/>


                </div>

            </div>
        </div>
    );
}

export default Footer;