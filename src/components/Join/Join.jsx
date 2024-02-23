import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';

const Join = () => {
    
    //email sending
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lj7tf3e', 'template_v2rrtyh', form.current, '_saCpDjmvaxbFTD1d')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="join" id="join">
        
        <div className="left-j">
        <hr />
            <div>
                <span className='stroke-text'>READY TO JOIN</span>
                <span >LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" id="" placeholder='Enter Your Mail' />
                <button className="btn-j btn"> Join Now </button>
            </form>
        </div>
    </div>

  )
}

export default Join