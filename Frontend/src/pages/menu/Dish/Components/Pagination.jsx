import React, { useState } from 'react';

const Pagination = ({ countriesPerPage, totalCounties, paginate }) => {
    const [activePage, setActivePage] = useState(1);
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalCounties / countriesPerPage); i++) {
        pageNumber.push(i);
    }

    const handleClick = (number) => {
        setActivePage(number);
        paginate(number);
    };

   
    const prevPage = () => {
        if (activePage > 1) {
            setActivePage(prev => prev - 1);
            paginate(activePage - 1);
        }
    }

    const nextPage = () => {
        if (activePage < Math.ceil(totalCounties / countriesPerPage)) {
            setActivePage(prev => prev + 1);
            paginate(activePage + 1);
        }
    }
    return (
        <div className='container'>
            <button className='pag-nav' onClick={prevPage}>{'<'}</button>
            {pageNumber.map(number => (
                <div key={number}>
                    <button
                        className={number === activePage ? 'pag-numbActive' : 'pag-numb'}
                        onClick={() => handleClick(number)}
                    >
                        {number}
                    </button>
                </div>
            ))}
            <button  className='pag-nav' onClick={nextPage}>{'>'}</button>
        </div>
    );
};

export default Pagination;