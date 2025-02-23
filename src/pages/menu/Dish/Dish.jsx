import { useState } from 'react'
import './Dish.css'
function Dish(props){
    const {title, rating, description ,price, DishImg} = props
    
    return(
    <div className='dish'>
        <img className='dish-img' src={DishImg} alt='dish image'></img>
        <h2 >{title}</h2>
        <p>{rating}</p>
        <p>{description}</p>
        <div className='dish-footer'>
            <h2>${price}</h2>
            <button className='OrengeButton' id='OrderNowMenu'>Order now</button>
        </div>
    </div>)
}

export default Dish