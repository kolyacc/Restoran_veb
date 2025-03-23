import { useState, useEffect} from 'react'
import './Dish.css'
import '../Menu.css'
import { Dishes } from './Dish'
import Countries from './Components/Countries.jsx'
import Pagination from './Components/Pagination.jsx'




function Dish(){
    
    const[countries, setCountries] = useState([])
    const[loading, setLoading] = useState(false)
    const[carrentPage, setCarrentPage] = useState(1)
    const[countriesPerPage] = useState(6)

    
    useEffect(()=>{
        const getCountries = async () =>{
            setLoading(true)
            const res = Dishes
            setCountries(res)
            setLoading(false)
            
        }
        getCountries()
    },[])

    const lastCountryIndex = carrentPage * countriesPerPage
    const firstCountryIndex = lastCountryIndex - countriesPerPage
    const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex)

    const paginate = (pageNumber) => setCarrentPage(pageNumber)

    
    
    return(
        
        <div >
            <div className='dish-container'>
                <Countries countries={currentCountry} loading={loading}/>
            </div>
            <div className='pagination'>
                
                
                <Pagination 
                    countriesPerPage={countriesPerPage} 
                    totalCounties={countries.length}
                    paginate={paginate}
                />
                
                
            </div>
            
            
        </div>)
}

export default Dish