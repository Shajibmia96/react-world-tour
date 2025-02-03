import '../country.css'

const Country = ({country}) => {

    console.log(country);
    
    const {name , flags, population, area} = country;
    const {common} = name;
    const Style = {
        color: 'purple'
    };
    const back = {
        backgroundColor: "white"
    }
    return (
        <div className="country" style={common === 'Bangladesh' ? back : {}} >
              <p style={common === "Bangladesh" ? Style : {}}>Name : {common}</p> 
              <img src={flags.png} alt="" />
              <p>Population : {population}</p>
              <p>Area : {area}</p>
        </div>
    );
};

export default Country;