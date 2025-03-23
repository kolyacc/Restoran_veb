import React from 'react';
import '../../Menu.css'
import '../Dish.css'
const Countries = ({ countries,loading }) => {
    if(loading){
        return <h2>Loading...</h2>
    }
    return (
        <div className='dish-container'>
            {
                countries.map((country,i) => (
                    

                    <div className='dish'>
                        <img className='dish-img' src={country.dishImg} alt='dish image'></img>
                        <h2 >{country.title}</h2>
                        
                        <p>{country.description}</p>
                        <div className='dish-footer'>
                            <h2>${country.price}</h2>
                            <button className='OrengeButton' id='OrderNowMenu'>Order now</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Countries;