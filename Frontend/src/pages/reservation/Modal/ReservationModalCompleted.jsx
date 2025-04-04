import React from 'react';
import './Modal.css';
import './ReservationModalCompleted.css';
import crown from '../../../assets/crown.svg'
import { NavLink } from 'react-router-dom';
import img from "../ReservationPhoto.svg";
import Clock from './Elements/Clock.svg';
import Date from './Elements/Date.svg';
import Date2 from './Elements/Date2.svg';
import Checkbox from './Elements/Checkbox.svg';
import People from './Elements/People.svg';
import Cancel from './Elements/Cancel.svg';
import Modify from './Elements/Modify.svg';
const ReservationModalCompleted = ({ active , setActive}) => {
    return (
        <div className={active===2 ? "modal active":"modal"} onClick={() => setActive(null)}>
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
                <div className='ReservationModalCompleted'>
                    <h1>Reservation has beeb confirmed</h1>
                    <div >
                            <img src={Checkbox } />
                            <p>The confirmation result has been sent to your email</p>
                        </div>
                        <div>
                            <img src={Date2} />
                            <p>Booking ID : #123456</p>
                        </div>
                </div>
                <div className='modal__ReservationCompleted'>
                    <img src={img} id='ReservationCompletedImg' />
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

                    <div className='Buttons'>
                        <button onClick={()=>{setActive(1);}} className='ModifyButton'>Modify <img src={Modify} /></button>
                        <button onClick={()=>{setActive(3);}} className='CancelButton'>Cancel <img src={Cancel} /></button>
                
                    </div>
               </div>
               <div>
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
    );
};

export default ReservationModalCompleted;