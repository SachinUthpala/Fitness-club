import React from 'react'
import './Hero.css'
import Header from './Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Hart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

const Hero = () => {
  return (
    <div className="hero">
        <div className="blur"></div>
        <div className="left-h">
            <Header />
            {/* The best ad section */}
            <div className="the-best-ad">
                <div></div>
                <span>The Best Fitness Club In Kurunegala</span>
            </div>
            {/* heder text section */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                    <span>In here we will help you to shape and build you a ideal body 
                        and live up your life to full set</span>
                </div>
            </div>

            {/* figures */}
            <div className="figures">
                <div>
                    <span>+140</span>
                    <span>Expert Couches</span>
                </div>
                <div>
                    <span>+2K</span>
                    <span>Members Joined</span>
                </div>
                <div>
                    <span>+50</span>
                    <span>Fitness Programs</span>
                </div>
            </div>
            {/* hero-buttons */}
            <div className="hero-buttons">
                <button className='btn'>Get Started</button>
                <button className='btn'>Learn More</button>
            </div>

        </div>
        <div className="right-h">
            <button className="btn">
                Join Now
            </button>

            <div className="hart-rate">
                <img src={Hart} alt="" />
                <span>Hart Rate</span>
                <span>116 bpm</span>
            </div>

            {/* hero images */}

            <img src={hero_image} alt="" className='hero-img' />
            <img src={hero_image_back} alt="" className='hero-img-back' />

            {/* calories */}
            <div className="calorie">
                <img src={Calories} alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span>220 Cal</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero