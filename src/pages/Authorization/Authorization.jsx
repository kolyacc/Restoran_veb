import React from 'react';
import crown from '../../assets/crown.svg'
import Background from './Background.svg'
import { NavLink } from 'react-router-dom';
import './Authorization.css'
const Authorization = () => {
    return (
        <div className='Authorization'>
            <div id='Authorization'>
                <NavLink to='/'><img src={crown} className='LogoHeader'/></NavLink>
                <div className='Authorization__form'>
                    <h1>Sign up</h1>
                    <p>Already have an account? <NavLink>Log in</NavLink></p>
                    <h3>Full name</h3>
                    <input type="text" placeholder="Full name"/>
                    <h3>Email address</h3>
                    <input type="email" placeholder="Email address"/>
                    <h3>Password</h3>
                    <input type="password" placeholder="Password"/>
                    <div className='Authorization__checkbox'>
                        <div className='custom-checkbox'>
                            <input type='checkbox' id="subscribe"/>
                            <label htmlFor="subscribe">
                                Remember me
                            </label>
                            
                        </div>
                        <div><NavLink>Forget password?</NavLink></div>
                        
                    </div>
                    
                    
                    <button>Sign up</button>
                </div>
            </div>
            <img src={Background} />
        </div>
    );
};

export default Authorization;