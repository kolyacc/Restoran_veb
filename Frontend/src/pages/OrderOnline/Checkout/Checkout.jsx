import React from 'react';
import { NavLink } from 'react-router-dom';
import './Checkout.css';
const Checkout = () => {
    return (
        <div className='checkout'>
            <div className='checkout-header'>
                <NavLink to={"/OrderOnline"}>{'<'}</NavLink>
                <div><h1>Checkout</h1>
                </div>
            </div>
            <h1>Shiping address</h1>
            <div className='checkout-address'>
               
                <input type="text" placeholder="Address"/>
                <button>Change</button>
            </div>
            <h1>Order data</h1>
            <div className='checkout-data'>
                <div >
                    <input type="text" id="name" placeholder="First name"/>
                    <input type="text" id="name" placeholder="Last name"/>
                    <input type="text" id="name" placeholder="Phone number"/>
                    <input type="text" id="name" placeholder="Email address"/>
                </div>
                <div>
                    
                    <input type="text" id="email" placeholder="Note"/>
                </div>
            </div>
            <div className='custom-checkbox' id='checkout-checkbox'>   
                <h1>Order time</h1>
                <div>
                    <input type="radio" id="contactChoice1" name="contact"  />
                    <label for="contactChoice1">Order now</label>

                    <input type="radio" id="contactChoice2" name="contact"  />
                    <label for="contactChoice2">Order later</label>
                </div>
                <h1>Order method</h1>
                <div>
                    <input type="radio" id="contactChoice3" name="contact2"  />
                    <label for="contactChoice3">Delivery</label>

                    <input type="radio" id="contactChoice4" name="contact2"  />
                    <label for="contactChoice4">Take a way</label>
                </div>
                <h1>Payment method</h1>
                <div className='payment-method'>
                    <input type="radio" id="Payment1" name="contact3"  />
                    <label for="Payment1">Cash On Delivery</label>

                    <input type="radio" id="Payment2" name="contact3"  />
                    <label for="Payment2">BCA Virtual Account</label>

                    <input type="radio" id="Payment3" name="contact3"  />
                    <label for="Payment3">Credit Card</label>

                    <input type="radio" id="Payment4" name="contact3"  />
                    <label for="Payment4">Transfer Bank</label>
                </div>
            </div>
            <div className='custom-checkbox' id='checkout-checkbox-2'>
                <input   type="checkbox" id="checkbox1"/>
                <label for="checkbox1">Choose to indicate that you have read and agree to our Terms of use & Privacy Policy.</label>
            </div>
            <div className='Order-Now'><button>Order now</button></div>
            
        </div>
    );
};

export default Checkout;