import { useState } from "react";
import "../country.css";

const Country = ({ country,handleVisitedCountry }) => {
  const [visited, setVisited] = useState(false);
//   console.log(country);
console.log(handleVisitedCountry);


  const { name, flags, population, area, cca3 } = country;
  const { common } = name;
  const Style = {
    color: "purple",
  };
  const back = {
    backgroundColor: "white",
    color : 'black'
  };

  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className="country" style={visited ? back : {}}>
      <p
        style={{
          ...(common === "Bangladesh" ? Style : {}),
          color: visited ? "purple" : "",
        }}
      >
        Name : {common}
      </p>
      <img className="flags" src={flags.png} alt="" />
      <p style={common === "Bangladesh" ? Style : {}}>
        Population : {population}
      </p>
      <p style={common === "Bangladesh" ? Style : {}}>Area : {area}</p>
      <p style={common === "Bangladesh" ? Style : {}}>
        <small>Code : {cca3}</small>
      </p>
      <button  className="visited-btn"
       onClick={()=>handleVisitedCountry(country)}
      >Mark To Visit
      </button>
      <br />
      <br />
      <button
        style={{ display: common === "Bangladesh" ? "none" : "" }}
        className="visited-btn"
        onClick={handleVisited}
      >
        {visited ? "Visited" : "Go there"}
      </button>
      <p className="visited">
        {common === "Bangladesh"
          ? "This is My MotherLand"
          : visited
          ? "Visited Done this one"
          : "I will go there early"}
      </p>
    </div>
  );
};

export default Country;
