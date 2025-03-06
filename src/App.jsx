
import Home from "./pages/home/Home.jsx"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Routes, Route, Link } from 'react-router-dom'

import Menu from "./pages/menu/Menu.jsx"
import AboutUs from "./pages/aboutus/aboutus.jsx"
import Layon from "./pages/elements/Layout.jsx"
import Reservation from "./pages/reservation/reservation.jsx"
import ContactUs from "./pages/ContactUs/ContactUs.jsx"
import OrderOnline from "./pages/OrderOnline/OrderOnline.jsx"
import Authorization from "./pages/Authorization/Authorization.jsx"
function App(){
    return (
        <>
        
        <Routes>
            <Route path="/" element={<Layon />} >    
                <Route index element={<Home />} />
                <Route path="/Menu" element={<Menu />} /> 
                <Route path="/Aboutus" element={<AboutUs />} /> 
                <Route path="/Reservation" element={<Reservation />} /> 
                <Route path="/ContactUs" element={<ContactUs />} /> 
                <Route path="/OrderOnline" element={<OrderOnline />} /> 
                

            </Route>
            <Route path="/Authorization" element={<Authorization />} /> 
        </Routes>


        </>
        
    )
}

export default App