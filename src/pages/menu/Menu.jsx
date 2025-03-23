import './Menu.css'

import Dish from './Dish/Dish.jsx'
import MenuCategory from './MenuCategory/MenuCategory.jsx'
import { NavLink } from 'react-router-dom'

function Menu() {

    return (
    <>
        <div className='menu'>
          <h1>Our popular menu</h1>
          <MenuCategory />

          <Dish />

        </div>
    </>
        
    )
}
export default Menu