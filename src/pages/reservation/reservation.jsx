import React from 'react';
import "./reservation.css";
import img from "./ReservationPhoto.svg";
import ReservationModal from './Modal/ReservationModal.jsx';
const Reservation = () => {
    const [time, setTime] = React.useState("");

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    
    const [modalActive, setModalActive] = React.useState(false);
    return (
        <div>
            <main className="reservation">
            <img src={img} alt="Reservation" />
            <div>
                <h2>Book a table</h2>
                <input type="date" id="date" />
                
                <input 
                    type="time" 
                    id="time" 
                    value={time} 
                    onChange={handleTimeChange} 
                />
                
                <select id="party-size">
                    <option value="" disabled selected>Party size</option>
                    <option value="small">1-2 People</option>
                    <option value="medium">3-4 People</option>
                    <option value="large">5+ People</option>
                </select>
                
                <button onClick={()=>setModalActive(true)}>Book now</button>
            </div>
            
        </main>
        <ReservationModal active={modalActive} setActive={setModalActive} />
        
        </div>
        
    );
};

export default Reservation;