import React from 'react';
import Menu from '../menu/Menu.jsx'
import { NavLink } from 'react-router-dom';
const OrderOnline = () => {
    return (
        <div>
            <h1>Menu</h1>
            <Menu />
            <div>
                <div><h1>Order list</h1></div>
                <div>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    
                </div>
                <div>
                    <h1>Voucher code</h1>
                    <input type="text" id="name" placeholder="Voucher code"/>
                    <button>+</button>
                </div>
                <div>
                    <h2>Subtotal</h2>
                    <h2>Tax fee</h2>
                    <h2>Voucher</h2>
                    <h2>Total</h2>
                    <NavLink to={"/OrderOnline/Checkout"}>Checkout</NavLink>
                </div>
                    
            </div>
        </div>
    );
};

export default OrderOnline;