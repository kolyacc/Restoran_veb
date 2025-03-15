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

const ReservationModalCancel = ({ active , setActive}) => {
    return (
        <div className={active===3 ? "modal active":"modal"} onClick={() => setActive(null)}>
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
                <div className='ReservationModalCompleted' id='ReservationModalCancel'>
                    <h1>Reservation has beeb confirmed</h1>
                    
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

                    
                </div>
                <div className='CencelReservation'>
                    <button onClick={()=>{setActive(null);}}>Cancel reservation</button>
                </div>
            </div>
            
        </div>
    );
};

export default ReservationModalCancel;