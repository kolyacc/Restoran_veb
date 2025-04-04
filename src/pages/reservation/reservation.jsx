import React from 'react';
import "./reservation.css";
import img from "./ReservationPhoto.svg";
import ReservationModal from './Modal/ReservationModal.jsx';
import ReservationModalCompleted from './Modal/ReservationModalCompleted.jsx';
import ReservationModalCancel from './Modal/ReservarionModalCancel.jsx';
const Reservation = () => {
    const [time, setTime] = React.useState("");

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    
    const [modalActive, setModalActive] = React.useState(null);
    
    return (
        <div>
            <div className="reservation">
                <img src={img} />
                <div>
                    <h2>Book a table</h2>
                    <label for="date">Date</label>
                    <input type="date" id="date" />
                    <label for="time">Time</label>
                    <input 
                        type="time" 
                        id="time" 
                        value={time} 
                        onChange={handleTimeChange} 
                    />
                    <label for="party-size">Party size</label>
                    <select id="party-size">
                        
                        
                        <option value="small">1-2 People</option>
                        <option value="medium">3-4 People</option>
                        <option value="large">5+ People</option>
                    </select>
                    
                    <button onClick={()=>setModalActive(1)}>Book now</button>
            </div>
            
        </div>
        
        <ReservationModalCompleted active={modalActive} setActive={setModalActive} />
        <ReservationModalCancel active={modalActive} setActive={setModalActive} />
        <ReservationModal active={modalActive} setActive={setModalActive} />
        
        
        </div>
        
    );
};

export default Reservation;