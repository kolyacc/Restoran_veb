import { useState } from 'react'
import './Dish.css'
function Dish(props){
    const {title, rating, description ,price, DishImg} = props
    
    return(
    <div className='dish'>
        <img className='dish-img' src={DishImg} alt='dish image'></img>
        <p>{title}</p>
        <p>{rating}</p>
        <p>{description}</p>
        <div className='dish-footer'>
            <p>${price}</p>
            <button className='OrengeButton' id='OrderNowMenu'>Order now</button>
        </div>
    </div>)
}

export default Dish