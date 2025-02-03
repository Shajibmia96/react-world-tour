import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])

    const [visitedCountry, setVisitedCountry] = useState([]);

     const handleVisitedCountry = country => {
           console.log('hello');   
           if(visitedCountry.includes(country)){
              alert('This country already in list')
           }else{
            const newVisitedCountry = [...visitedCountry, country];
            setVisitedCountry(newVisitedCountry)
           }
          
     }

     const handleRemove = country =>{
          
            if(visitedCountry.includes(country)){
                const removeCountry = visitedCountry.filter(item => item !== country)

                setVisitedCountry(removeCountry)
            }else{
                alert('This item already remove')
            }
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
                 <h3>Visited Country {visitedCountry.length}</h3>
                 <ul style={{listStyle:"none", padding:0, display:'flex', gap:'15px'}}>
                      {
                        visitedCountry.map((country, index) => <div key={index} >
                             <li key={index}><strong>{index+1} .</strong> {country.name.common}</li>
                             <img style={{width:'100px', marginTop:'20px'}} src={country.flags.png} alt="" />
                        </div> )
                      }
                 </ul>
            </div>
            <div className="countries-container">
                {
                    countries.map(country => <Country 
                        key={country.ccn3} 
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                        handleRemove ={handleRemove}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;