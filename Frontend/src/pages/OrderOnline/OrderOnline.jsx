import { useState } from 'react';
import './OrderOnline.css';
import { NavLink } from 'react-router-dom';
import Dish from '../menu/Dish/Dish.jsx'
import MenuCategory from '../menu/MenuCategory/MenuCategory.jsx';
import OrderList from './OrderList.jsx';
const OrderOnline = () => {
    const [selectedCategory, setSelectedCategory] = useState('All category');
    return (
        <div className='OrderOnline'>
            <div className='container-Menu'><h1>Menu</h1></div>
            <MenuCategory activeCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
          
            <div className='OrderOnline-container'>
                <div className='dish-containerOrder' id='OrderOnline'>
                    <Dish category={selectedCategory} />
                </div>
            <div className='OrderPhone'><OrderList/></div>
            
            </div>
            <div className='PhoneVershinOrder'>
                <div>
                    <h2>6 items</h2>
                    <h3>22$</h3>
                </div>
                <div><NavLink to={"/OrderOnline/OrderNow"}>Order now</NavLink></div>
                

            </div>
        </div>
    );
};

export default OrderOnline;