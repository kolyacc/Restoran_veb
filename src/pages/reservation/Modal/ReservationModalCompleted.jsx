import React from 'react';
import './Modal.css';

const ReservationModalCompleted = ({ active , setActive}) => {
    return (
        <div className={active ? "modal active":"modal"} onClick={() => setActive(false)}>
            <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                <h1>Reservation completed</h1>
                <p>Thank you for your reservation. We look forward to welcoming you to the restaurant.</p>
                <button>Modify</button>
                <button>Cansel</button>
            </div>
            
        </div>
    );
};

export default ReservationModalCompleted;