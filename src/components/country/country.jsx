import React, { useState } from "react";
import "./country.css";

const Country = ({ data, alreadyVisited, }) => {
  //   console.log(data.name.common);
  const [visited, setVisited] = useState(false);
  const handelVisited = () => {
    if (visited) {
      setVisited(false);
    } else {
      setVisited(true);
    }
    // console.log(visited);
    alreadyVisited(data);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <h5>name: {data.name.common}</h5>
      <img src={data.flags.png} alt={data.flags.alt} />
      <p>population: {data.population}</p>

      <button onClick={handelVisited}>
        {visited ? "visited" : "Not visited"}
      </button>
    </div>
  );
};

export default Country;
