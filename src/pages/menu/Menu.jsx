import './Menu.css'
import { Dishes } from './Dish/Dish'
import Dish from './Dish/Dish.jsx'
import { NavLink } from 'react-router-dom'

function Menu() {

    return (
    <>
        <div className='menu'>
          <h1>Our popular menu</h1>
          <div className='menu-category'>
            <button>All category</button>
            <button>Dinner</button>
            <button>Launch</button>
            <button>Dessert</button>
            <button>Drink</button>
          </div>
          
          <div className='dish-container'>
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
          <div className='pagination'>
            
            <button className='pag-nav'> {'<'}</button>
            <button className='pag-numb'>1</button>
            <button className='pag-numb'>2</button>
            <button className='pag-numb'>3</button>
            <h2>•••</h2>
            <button className='pag-nav'> {'>'}</button>
          </div>
        </div>
    </>
        
    )
}
export default Menu