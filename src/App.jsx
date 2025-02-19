
import Home from "./pages/home/Home.jsx"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Routes, Route, Link } from 'react-router-dom'

import Menu from "./pages/menu/Menu.jsx"
import Layon from "./pages/elements/Layout.jsx"
function App(){
    return (
        <>
        
        <Routes>
            <Route path="/" element={<Layon />} >    
                <Route index element={<Home />} />
                <Route path="/Menu" element={<Menu />} /> 
            </Route>
        </Routes>


        </>
        
    )
}

export default App