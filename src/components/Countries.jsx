import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])

    const [visitedCountry, setvisitedCountry] = useState([])

     const handleVisitedCountry = country => {
           console.log('hello');   
           setvisitedCountry(country)
               
     }

      useEffect(()=>{
           fetch('https://restcountries.com/v3.1/all')
           .then(res => res.json())
           .then(data => setCountries(data))
      },[])
    return (
        <div>
            <h2>Total Countries : {countries.length}</h2>
            <div>
                 <h3>Visited Country List</h3>
                 <ul>
                      {
                        visitedCountry.map(country => <li key={country.ccn3}>{country.name.common}</li>)
                      }
                 </ul>
            </div>
            <div className="countries-container">
                {
                    countries.map(country => <Country 
                        key={country.ccn3} 
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;