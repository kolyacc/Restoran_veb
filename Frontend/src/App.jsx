
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
import LogIn from "./pages/Authorization/LogIn.jsx"
import SingUp from "./pages/Authorization/SignUp.jsx"
import Checkout from "./pages/OrderOnline/Checkout/Checkout.jsx"
import OrderList from "./pages/OrderOnline/OrderList.jsx"
import PasswordRecovery from "./pages/passwordRecovery/recovery.jsx"
import FinishRecovery from "./pages/passwordRecovery/finishRecovery.jsx"
import AdminMenu from "./pages/admin/admin.jsx"
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
                <Route path="/OrderOnline/Checkout" element={<Checkout />} /> 
                <Route path="/OrderOnline/OrderNow" element={<OrderList />} /> 
                

            </Route>
            <Route path="/LogIn" element={<LogIn />} /> 
            <Route path="/LogIn/PasswordRecovery" element={<PasswordRecovery />} /> 
            <Route path="/LogIn/PasswordRecovery/Finish" element={<FinishRecovery />} /> 
            <Route path="/SignUp" element={<SingUp />} /> 
            <Route path="/admin" element={<AdminMenu/>} />
        </Routes>


        </>
        
    )
}

export default App