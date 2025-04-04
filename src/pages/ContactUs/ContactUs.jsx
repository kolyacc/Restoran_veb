import React from 'react';
import './contactus.css';
const ContactUs = () => {
    return (
        <div className='contact-us'>
            <h1>Contact Us</h1>
            <p>We love hearing from our customers. Feel free to share your experience or ask any questions you may have.</p>
            <form>
                <div className='input-box'>
                    <input type="text" id="name" placeholder="First name"/>
                    <input type="text" id="name" placeholder="Last name"/>
                    <input type="text" id="name" placeholder="Email address"/>
                    <input type="text" id="name" placeholder="Subect"/>
                </div>
                <div className='input-box' id='message'>
                    
                    <input type="email" id="email" placeholder="Massege"/>
                </div>
                <div className='Submit'>
                    <button >Submit</button>
                </div>
                
            </form>
        </div>
    );
};

export default ContactUs;