import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import wTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plan-container">
        <div className="program-header">
            <span>READY TO START</span>
            <span className='stroke-text'>YOUR JOURNEY</span>
            <span>WITH US</span>
        </div>

        {/* plans cards */}
        <div className="plans">
            {
                plansData.map((plans ,i ) => (
                    <div className="plan">
                        {plans.icon}
                        <span>{plans.name} </span>
                        <span>$ {plans.price}</span>

                        <div className="features">
                            {
                                plans.features.map((feacture , i ) => (
                                    <div className="feature">
                                        <img src={wTick} alt="" />
                                        <span key={i}>{feacture}</span>
                                    </div>
                                ))
                            }
                        </div>

                        <div>
                            <span>{'SEE MORE -->'}</span>
                        </div>
                        <button className="btn">
                            Join Now
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Plans