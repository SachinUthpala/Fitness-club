import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import rarrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className="programs" id="programs">
        <div className="program-header">
            <span>Explore Our</span>
            <span className='stroke-text'>Programs</span>
            <span>To Shape Ypu</span>
        </div>

        <div className="program-categories">
            {
                programsData.map((program) =>(
                    <div className='category'>
                        {program.image}
                        <span>
                            {program.heading}
                        </span>
                        <span>
                            {program.details}
                        </span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={rarrow} alt="" />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Programs