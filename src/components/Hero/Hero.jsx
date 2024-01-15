import React from 'react'
import './Hero.css'
import Header from './Header/Header'

const Hero = () => {
  return (
    <div className="hero">
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

        </div>
        <div className="right-h">Right Side</div>
    </div>
  )
}

export default Hero