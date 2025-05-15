import React, { useState } from 'react';
import './recovery.css'; // Assuming you have a CSS file for styling
import { useNavigate } from 'react-router-dom';

const PasswordRecovery = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate password recovery logic
        setMessage('Инструкция по восстановлению пароля отправлена на вашу почту.');
        // Redirect to the desired page
        navigate('/LogIn/PasswordRecovery/Finish');
    };

    return (
        <div className='password-recovery'>
            <h2>Восстановление пароля</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
                        Введите ваш email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>
                    Отправить
                </button>
            </form>
            {message && <p style={{ marginTop: '20px', color: 'green' }}>{message}</p>}
        </div>
    );
};

export default PasswordRecovery;