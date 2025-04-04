import { useState, useEffect} from 'react'
import './Dish.css'
import '../Menu.css'
import { Dishes } from './Dish'
import Countries from './Components/Countries.jsx'
import Pagination from './Components/Pagination.jsx'




function Dish( {category}){
    
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(6);

    useEffect(() => {
        const getCountries = async () => {
            setLoading(true);
            if (category !== 'All category') {
                const res = Dishes.filter(dish => dish.category === category);
                setCountries(res);
                setCurrentPage(1);
            } else {
                setCountries(Dishes);
                setCurrentPage(1);
            }
            setLoading(false);
        };
        getCountries();
    }, [category]); 

    const lastCountryIndex = currentPage * countriesPerPage;
    const firstCountryIndex = lastCountryIndex - countriesPerPage;
    const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className='dish-container'>
                <Countries countries={currentCountry} loading={loading} />
            </div>
            <div className='pagination'>
                <Pagination 
                    countriesPerPage={countriesPerPage} 
                    totalCounties={countries.length}
                    paginate={paginate}
                />
            </div>
        </div>
    );
}

export default Dish