import { useState, useEffect } from 'react';
import './Dish.css';
import '../Menu.css';

import Countries from './Components/Countries.jsx';
import Pagination from './Components/Pagination.jsx';

function Dish({ category }) {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(6);
    const [totalCount, setTotalCount] = useState(0);

    useEffect(() => {
        setCurrentPage(1);
    }, [category]);
    useEffect(() => {
        const getCountries = async () => {
            setLoading(true);
            const url = `http://localhost:3001/Dishes/category/${category}?page=${currentPage}&limit=${countriesPerPage}`;
            //const url = `http://localhost:3001/Dishes`;
            const response = await fetch(url);
            const res = await response.json();

            setCountries(res.data);
            setTotalCount(res.total);
            //setTotalCount(30);
            
            setLoading(false);
        };
        getCountries();
    }, [category, currentPage]);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className='dish-container'>
                <Countries countries={countries} loading={loading} />
            </div>
            <div className='pagination'>
                <Pagination
                    countriesPerPage={countriesPerPage}
                    totalCounties={totalCount}
                    paginate={paginate}
                />
            </div>
        </div>
    );
}

export default Dish;
