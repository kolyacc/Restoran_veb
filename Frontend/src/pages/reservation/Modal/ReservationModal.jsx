import React from 'react';
import './Modal.css';
import crown from '../../../assets/crown.svg'
import Clock from './Elements/Clock.svg';
import Date from './Elements/Date.svg';
import People from './Elements/People.svg';
import { NavLink } from 'react-router-dom';


const ReservationModal = ({ active , setActive}) => {
    return (
        <div className={active===1 ? "modal active":"modal"}onClick={() => setActive(null)}>
            <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                <div className='header'>
                    <div>
                        <img src={crown} className='LogoHeader'></img>
                        <h1 className='LogoNameHeader'>Delizi<span>oso</span></h1>

                    </div>
                    <div>
                        <NavLink to="/LogIn">Sign in</NavLink>
                        <NavLink to="/SignUp" id='GreenButtonAutor'>Sign up</NavLink>
                    </div>
                </div>
                <div className='modal__content__header'>
                    <h1>Reservation</h1>
                    <p>Due to limited availability, we can hold this table for you for <span>5:00 minutes</span></p>
                </div>
                
                <h2>Data order</h2>
                <div className='content__order'>
                <div className='modal__content__inputs'>
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                    
                    <input type="number" placeholder="Phone number" />
                    <input type="email" placeholder="Email address" />
                    <input type="" placeholder="Select an accasion" />
                    <input type="text" placeholder="Add a special request" />
                    <div className='custom-checkbox'>
                        <input type='checkbox' id="subscribe"/>
                        <label htmlFor="subscribe">
                            Sign me up to receive dining offers and news from this restaurant by email.
                        </label>
                    </div>
                    
                    <button id='CompleteReservation'onClick={()=>{setActive(2);}}>Complete reservation</button>
                </div>
                <div className='modal__content__details'>
                    <div className='modal__content__details__info'>
                        <h2>Reservation details</h2>
                        <div >
                            <img src={Date } />
                            <p>Saturday, 28 february 2022</p>
                        </div>
                        <div>
                            <img src={Clock} />
                            <p>04:30 pm</p>
                        </div>
                        <div >
                            <img src={People} />
                            <p>2 people (Standar seating)</p>
                        </div>
                        
                    </div>
                    <h2>Restaurant informations</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit 
                        voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae 
                        vitae dicta sunt explicabo.</p>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
                        consectetur, adipisci velit, sed quia non numquam eius modi tempora 
                        incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                        Ut enim ad minima veniam.</p>
                </div>
                </div>
                
                
            </div>
            
        </div>
    );
};

export default ReservationModal;