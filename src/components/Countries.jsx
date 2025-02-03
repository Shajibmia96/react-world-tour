import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])

      useEffect(()=>{
           fetch('https://restcountries.com/v3.1/all')
           .then(res => res.json())
           .then(data => setCountries(data))
      },[])
    return (
        <div>
            <h2>Total Countries : {countries.length}</h2>
            <div className="countries-container">
                {
                    countries.map(country => <Country key={country.ccn3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;