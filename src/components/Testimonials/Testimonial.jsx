import React from 'react';
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'

import Profile1 from '../../img/profile1.jpg'
import Profile2 from '../../img/profile2.jpg'
import Profile3 from '../../img/profile3.jpg'
import Profile4 from '../../img/profile4.jpg'
import Profile5 from '../../img/profile5.jpg'
import Profile6 from '../../img/profile6.jpg'

import 'swiper/swiper-bundle.css'

const profile =[
    {
        id:1,
        pname:'Mrs Blake',
        Image: {Profile1},
        text:'lorem ispum text Its good to be able to do some of these stuff, its really really good'
    },
    {
        pname:'Kate',
        id:2,
        Image: {Profile2},
        text:'lorem ispum text Its good to be able to do some of these stuff, its really really good'
    },
    {
        pname:'Karen',
        id:3,
        Image: {Profile3},
        text:'lorem ispum text Its good to be able to do some of these stuff, its really really good'
    },
    {
        pname:'Mr Mike',
        id:4,
        Image1: {Profile4},
        text:'lorem ispum text Its good to be able to do some of these stuff, its really really good'
    },
    {
        pname:'Elvis',
        id:5,
        Image1: {Profile5},
        text:'lorem ispum text Its good to be able to do some of these stuff, its really really good'
    },
    {
        pname:'Fiona',
        id:6,
        Image1: {Profile6},
        text:'lorem ispum text Its good to be able to do some of these stuff, its really really good'
    }
]

const Portfolio = () => {
    return (
        <div className="portfolio">
            <span>Recent Projects</span>
            <span>Portfolio</span>
        <Swiper
        spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider' 
        >
        {
            profile.map(({id, pname, Image1, text}, {index})=>{
                
                    <SwiperSlide key={id}>
                        <img src={Image1} alt="" />
                        <span>{pname}</span>
                        <span>{text}</span>
                    </SwiperSlide>
            })
        }
        </Swiper>
        </div>
    );
};

export default Portfolio;
