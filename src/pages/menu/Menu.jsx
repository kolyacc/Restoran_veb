import './Menu.css'
import { Dishes } from './Dish/Dish'
import Dish from './Dish/Dish.jsx'

function Menu() {

    return (
    <>
        <div>
          <h1>Our popular menu</h1>
          <button>All category</button>
          <button>Dinner</button>
          <button>Launch</button>
          <button>Dessert</button>
          <button>Drink</button>
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
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
        </div>
    </>
        
    )
}
export default Menu