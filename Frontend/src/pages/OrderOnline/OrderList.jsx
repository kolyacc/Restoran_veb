import React from 'react';
import './OrderOnline.css';
import { NavLink } from 'react-router-dom';
const OrderList = () => {
    

    return (
            <div className='Order-list-container'>
                <div className='Order-list'> 
                    <NavLink to={"/OrderOnline"}>{'<'}</NavLink>
                    <h1>Order list</h1>
                </div>
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
    );
};

export default OrderList;