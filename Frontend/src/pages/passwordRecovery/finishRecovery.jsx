import React, { useState } from 'react';
import './recovery.css'; // Assuming you have a CSS file for styling
const FinishRecovery = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            console.log('Password successfully updated:', password);
        } else {
            console.error('Passwords do not match');
        }
    };

    return (
        <div className='password-recovery' >
            <h2>Відновлення пароля</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="password">Новий пароль:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Підтвердьте пароль:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Відновити пароль</button>
            </form>
        </div>
    );
};

export default FinishRecovery;