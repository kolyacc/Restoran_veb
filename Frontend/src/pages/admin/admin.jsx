import React, { useState } from 'react';

const AdminMenu = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [dishes, setDishes] = useState([]);
    const [newDish, setNewDish] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === 'password') {
            setIsLoggedIn(true);
        } else {
            alert('Invalid username or password');
        }
    };

    const addDish = () => {
        if (newDish.trim()) {
            setDishes([...dishes, newDish]);
            setNewDish('');
        }
    };

    const updateDish = (index, updatedDish) => {
        const updatedDishes = dishes.map((dish, i) => (i === index ? updatedDish : dish));
        setDishes(updatedDishes);
    };

    const deleteDish = (index) => {
        const updatedDishes = dishes.filter((_, i) => i !== index);
        setDishes(updatedDishes);
    };

    if (!isLoggedIn) {
        return (
            <div>
                <h1>Admin Login</h1>
                <div>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1>Admin Menu</h1>
            <div>
                <input
                    type="text"
                    value={newDish}
                    onChange={(e) => setNewDish(e.target.value)}
                    placeholder="Enter new dish"
                />
                <button onClick={addDish}>Add Dish</button>
            </div>
            <ul>
                {dishes.map((dish, index) => (
                    <li key={index}>
                        <input
                            type="text"
                            value={dish}
                            onChange={(e) => updateDish(index, e.target.value)}
                        />
                        <button onClick={() => deleteDish(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminMenu;