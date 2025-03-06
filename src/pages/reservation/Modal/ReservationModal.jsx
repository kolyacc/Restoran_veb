import React from 'react';
import './Modal.css';
import crown from '../../../assets/crown.svg'
const ReservationModal = ({ active , setActive}) => {
    return (
        <div className={active ? "modal active":"modal"} onClick={() => setActive(false)}>
            <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                <div>
                    <div className='container'>
                        <img src={crown} className='LogoHeader'></img>
                        <h1 className='LogoNameHeader'>Delizi<span>oso</span></h1>

                    </div>
                    <div>
                        <button>Sign in</button>
                        <button>Sign up</button>
                    </div>
                </div>
                <h1>Reservation</h1>
                <p>Due to limited availability, we can hold this table for you for 5:00 minutes</p>

                <h2>Data order</h2>
                <div>
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                    
                    <input type="number" placeholder="Phone number" />
                    <input type="email" placeholder="Email address" />
                    <input type="" placeholder="Select an accasion" />
                    <input type="text" placeholder="Add a special request" />
                    <label>
                        <input type="checkbox"/>
                        Sign me up to receive dining offers and news from this restaurant by email.
                    </label>
                    <button onClick={()=>setActive(false)}>Complete reservation</button>
                </div>
                <div>
                    <div>
                        <h2>Reservation details</h2>
                        <p>Saturday, 28 february 2022</p>
                        <p>04:30 pm</p>
                        <p>2 people (Standar seating)</p>
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
    );
};

export default ReservationModal;