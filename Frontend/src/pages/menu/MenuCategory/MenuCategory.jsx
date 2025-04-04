import React from 'react';
import '../Menu.css';

const MenuCategory = ({ activeCategory, onCategoryChange }) => {
    return (
        <div className='menu-category'>
            {['All category', 'Dinner', 'Launch', 'Dessert', 'Drink'].map((category) => (
                <button
                    key={category}
                    className={activeCategory === category ? 'menu-categoryActiveButton' : 'menu-categoryButton'}
                    onClick={() => onCategoryChange(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default MenuCategory;
