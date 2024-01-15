import React from 'react'
import './Footer.css'
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="blur"></div>
        <hr />
        <div className="footer" id="foot">
            <div className="social">
                <img src={Github} alt="" />
                <img src={Instagram} alt="" />
                <img src={LinkedIn} alt="" />
            </div>

            <div className="logo">
                <img src={Logo} alt="fitness logo" />
            </div>
        </div>
    </div>
  )
}

export default Footer