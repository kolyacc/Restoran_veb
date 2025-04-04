import { NavLink, Outlet } from 'react-router-dom'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import king from '../../assets/king.png'
import crown from '../../assets/crown.svg'
import basket from '../../assets/basket.svg'
import twitter from '../../assets/twitter.png'
import BurgerMenu from './BurgerMenu.svg'
import './Layout.css'
import React, { useState } from 'react';


const setActiveFooter = ({isActive}) => isActive ? 'activeFooter' : 'footerButton';
const setActiveHeader = ({isActive}) => isActive ? 'activeHeader' : 'headerButton';


function Layon() {
    const [burgerActive, setBurgerActive] = React.useState(false);
    return (
        <>
            <header >
                <div className='container 'id='Header'>
                    <div className='Logo-Header'>
                        <NavLink to = "/"><img src={crown} className='LogoHeader'></img></NavLink>
                        <NavLink to = "/" className='LogoNameHeader'><h1 className='LogoNameHeader'>Delizi<span>oso</span></h1></NavLink>
                        
                    </div>
                  
                    <div className='Buttons-Header'>
                        <NavLink to = "/" className={setActiveHeader}>Home</NavLink>
                        <NavLink to="/Menu" className={setActiveHeader}>Menu</NavLink>
                        <NavLink to="/Aboutus"className={setActiveHeader}>About us</NavLink>
                        <NavLink to="/OrderOnline" className={setActiveHeader}>Order online</NavLink>
                        <NavLink to="/Reservation" className={setActiveHeader}>Reservation</NavLink>
                        <NavLink to="/ContactUs" className={setActiveHeader}>Contact us</NavLink>
                    </div>
                    <div className='Buttons-Header'>
                        <NavLink  to="/OrderOnline"><img src={basket}></img></NavLink>
                        <NavLink to="/LogIn"className="LogInButton">Log in</NavLink>
                    </div>
                </div>
                
                
                <div className='Burger-Menu-Header'> 
                  <NavLink  to="/OrderOnline"><img src={basket}></img></NavLink>
                  <button onClick={()=>setBurgerActive(true)}><img src={BurgerMenu}></img></button>
                </div>
                
                <div className={burgerActive ? "Burger-Menu active":"Burger-Menu"}>
                  <button onClick={()=>setBurgerActive(false)}>X</button>
                  <div>
                    <NavLink to = "/" className={setActiveHeader} onClick={()=>setBurgerActive(false)}>Home</NavLink>
                    <NavLink to="/Menu" className={setActiveHeader} onClick={()=>setBurgerActive(false)}>Menu</NavLink>
                    <NavLink to="/Aboutus"className={setActiveHeader} onClick={()=>setBurgerActive(false)}>About us</NavLink>
                    <NavLink to="/OrderOnline" className={setActiveHeader} onClick={()=>setBurgerActive(false)}>Order online</NavLink>
                    <NavLink to="/Reservation" className={setActiveHeader} onClick={()=>setBurgerActive(false)}>Reservation</NavLink>
                    <NavLink to="/ContactUs" className={setActiveHeader} onClick={()=>setBurgerActive(false)}>Contact us</NavLink>
                    <NavLink to="/LogIn"className={setActiveHeader} onClick={()=>setBurgerActive(false)}>Log in</NavLink>
                  </div>
                </div>
                
            </header>
            
            <main>
            <Outlet />
            </main>
            
            
    
            <footer>
              <div className='Info'>
                <div className='buttonBlock'>
                  <img className='LogoFooter' src={king}/>
                  <h1 className='LogoName'>Delizi<span>oso</span></h1>
                </div>
                <p className='footerText'>Viverra gravida morbi egestas
                  facilisis tortor netus non duis
                  tempor.</p>
                <div className='buttonBlock'>
                  <button className='socialsiteButton'><img className='socialsite' src={twitter}></img></button>
                  <button className='socialsiteButton'><img className='socialsite' src={instagram}></img></button>
                  <button className='socialsiteButton'><img className='socialsite' src={facebook}></img></button>
                </div>
                
              </div>
              <div className='Page'>
                <h1 className='footerH1'>Page</h1>
                <NavLink to = "/" className={setActiveFooter}>Home</NavLink>
                <NavLink to = "/Menu"className={setActiveFooter}> Menu</NavLink>
                <NavLink to = "/OrderOnline"className={setActiveFooter}>Order online</NavLink>
                <NavLink to = "/Caterin"className={setActiveFooter}>Catering</NavLink>
                <NavLink to = "/Reservation"className={setActiveFooter}>Reservation</NavLink>
              </div>
              < div className='Information'>
                <h1 className='footerH1'>Information</h1>
                <NavLink to = "/AboutUs"className={setActiveFooter}>About us</NavLink>
                <NavLink to = "/Testimonial"className={setActiveFooter}>Testimonial</NavLink>
                <NavLink to = "/Even"className={setActiveFooter}>Event</NavLink>
              </div>
              <div className='contacts'>
                <h1 className='footerH1'>Get in touch</h1>
                <p className='footerText'>3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat</p>
                <p className='footerText'>delizioso@gmail.com</p>
                <p className='footerText'>+123 4567 8901</p>
              </div>
            </footer>
        </>
    )
}

    

export default Layon