import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react'

import Profile1 from '../../img/profile1.jpg'
import Profile2 from '../../img/profile2.jpg'
import Profile3 from '../../img/profile3.jpg'
import Profile4 from '../../img/profile4.jpg'
import Profile5 from '../../img/profile5.jpg'
import Profile6 from '../../img/profile6.jpg'

import 'swiper/swiper-bundle.css'
import { Pagination } from 'swiper';
import 'swiper/components/pagination/pagination.min.css'
import './Testimonial.css'

const profile =[
    {
        id: 1,
        pname:'Mrs Blake',
        Image1: Profile1,
        text:'lorem ispum text Its good to be able to do some of these stuff, its really really good'
    },
    {
        id: 2,
        pname:'Kate',
        Image1: Profile2,
        text:'lorem ispum text Its good to be able to do some of these stuff, its really really good'
    },
    {
        id: 3,
        pname:'Karen',
        Image1: Profile3,
        text:'lorem ispum text Its good to be able to do some of these stuff, its really really good'
    },
    {
        id: 4,
        pname:'Mr Mike',
        Image1: Profile4,
        text:'lorem ispum text Its good to be able to do some of these stuff, its really really good'
    },
    {
        id: 5,
        pname:'Elvis',
        Image1: Profile5,
        text:'lorem ispum text Its good to be able to do some of these stuff, its really really good'
    },
    {
        id: 6,
        pname:'Fiona',
        Image1: Profile6,
        text:'lorem ispum text Its good to be able to do some of these stuff, its really really good'
    }
] 

const Portfolio = () => {
    return (
        <div className="testimonials" id='testimonials'>
            <span>Client's Feedback</span>
            <span>Testimonials</span>
            <div className="blur2 t-blur" style={{background:"pink"}}></div>
            <div className="blur2 t-blur1" style={{background:"skyblue"}}></div>

        <Swiper
        spaceBetween={10}
        slidesPerView={1}
        grabCursor={true}
        className='portfolio-slider' 
        modules={[Pagination]}
        pagination={{clickable:true}}
        >
        {
            profile.map(({id, pname, Image1, text})=>{
                return(
                    <SwiperSlide  key={id}>
                        <div className='person'>
                            <img src={Image1} alt="" />
                            <span>{pname}</span>
                            <span>{text}</span>
                        </div>
                        
                    </SwiperSlide>
                )
            })
        }
        </Swiper>
        </div>
    );
};

export default Portfolio;
