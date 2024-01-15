import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

import {motion} from 'framer-motion'

const Testimonials = () => {

    const [selected , setSelected] = useState(0);
    const tLength = testimonialsData.length;

    const trans = {type : 'spring' , duration : 7};

  return (
    <div className="testimonials">
        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>What They</span>
            <span>Say About Us</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            <span>
                <span style={{color:'var(--orange)'}}>
                    {testimonialsData[selected].name} 
                </span>
                <span> - </span>
                {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
            <motion.div
                initial={{right:"1rem"}}
                whileInView={{right:"9rem"}}
                transition={trans}
            ></motion.div>
            <motion.div
            initial={{right:"11rem"}}
            whileInView={{right:"7rem"}}
            transition={trans}
            ></motion.div>
            <img src={testimonialsData[selected].image} alt="" />
            <div className="arrows">
                <img src={leftArrow} alt=""
                    onClick={() => {
                        selected === 0 ? setSelected(tLength -1)
                        : setSelected((prev) => prev -1)
                    }}
                />
                <img src={rightArrow} alt=""
                    onClick={() => {
                        selected === (tLength -1) ? setSelected(0)
                        : setSelected((prev) => prev + 1)
                    }}
                />
            </div>
        </div>
    </div>
  )
}

export default Testimonials