import React, { useState } from 'react';
import '../Menu.css';

const MenuCategory = () => {
    const [activeCategory, setActiveCategory] = useState('All category');

    const handleButtonClick = (category) => {
        setActiveCategory(category);
    };
    
    return (
        <div className='menu-category'>
            {['All category', 'Dinner', 'Launch', 'Dessert', 'Drink'].map((category) => (
                <button
                    key={category}
                    className={activeCategory === category ? 'menu-categoryActiveButton' : 'menu-categoryButton'}
                    onClick={() => handleButtonClick(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default MenuCategory;