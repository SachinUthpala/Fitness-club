import React from 'react'
import './Reasons.css'
import imagel from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import addi from '../../assets/adidas.png'
import nb from '../../assets/nb.png';
import nike from '../../assets/nike.png'
import tick from "../../assets/tick.png"

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
        <div className="blur"></div>
        <div className="left-r">
            <img src={imagel} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <span>Some Reasons </span>

            <div>
                <span className='stroke-text'>Why </span>
                <span>Choice Us ? </span>
            </div>

            <div className='details-r'>
                <div>
                    <img src={tick} alt="" />
                    <span>+ 140 Expert Coaches</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Most correct Programs</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>1 Free Program For New member</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>Reliable Partners</span>
                </div>
            </div>

            <span>OUR PARTNERS</span>
            <div className='partners'>
                <img src={nb} alt="" />
                <img src={addi} alt="" />
                <img src={nike} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Reasons