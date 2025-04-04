import './Menu.css'
import { useState, useEffect} from 'react'
import Dish from './Dish/Dish.jsx'
import MenuCategory from './MenuCategory/MenuCategory.jsx'
import { NavLink } from 'react-router-dom'

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All category');
    return (
    <>
        <div className='menu'>
          <h1>Our popular menu</h1>
          <MenuCategory activeCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          <Dish category={selectedCategory} />

        </div>
    </>
        
    )
}
export default Menu