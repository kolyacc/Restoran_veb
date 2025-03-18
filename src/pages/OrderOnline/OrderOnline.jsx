import React from 'react';
import Menu from '../menu/Menu.jsx'
import './OrderOnline.css';
import { NavLink } from 'react-router-dom';
import { Dishes } from '../menu/Dish/Dish'
import Dish from '../menu/Dish/Dish.jsx'
const OrderOnline = () => {
    return (
        <div className='OrderOnline'>
            <div className='container-Menu'><h1>Menu</h1></div>
            <div className='menu-category'>
                <button>All category</button>
                <button>Dinner</button>
                <button>Launch</button>
                <button>Dessert</button>
                <button>Drink</button>
            </div>
            <div className='OrderOnline-container'>
            <div className='dish-containerOrder' id='OrderOnline'>
                {Dishes.map((dish)=> (
                <Dish 
                    key = {dish.id}
                    title = {dish.title} 
                    rating = {dish.rating}
                    description = {dish.description} 
                    price = {dish.price}
                    DishImg ={dish.dishImg} 
                />
                ))}
            </div>
            <div className='Order-list-container'>
                <div className='Order-list'><h1>Order list</h1></div>
                <div>
                    <h2>Item 1</h2>
                    <h2>Item 2</h2>
                    
                </div>
                <div className='Order-list-voucher'>
                    <h2>Voucher code</h2>
                    <div>
                        <input type="text" id="name" placeholder="Voucher code"/>
                        <button>+</button>
                    </div>
                    
                </div>
                <div className='Order-list-total'>
                    <div><h2>Subtotal</h2> <h3>55$</h3></div>
                    <div><h2>Tax fee</h2> <h3>55$</h3></div>
                    <div><h2>Voucher</h2> <h3>55$</h3></div>
                    <div><h2>Total</h2> <h3>55$</h3></div>
                    
                    
                    <NavLink id='Checkout' to={"/OrderOnline/Checkout"}>Checkout</NavLink>
                </div>
                    
            </div>
            </div>
        </div>
    );
};

export default OrderOnline;