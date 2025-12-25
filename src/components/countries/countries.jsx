import React, { use, useState } from "react";
import Country from "../country/country";
import "./countries.css";

const Countries = ({ fetchCountry }) => {
  const [visitCountry, setVisitCountry] = useState([]);

  const alreadyVisited = (data) => {
    const newVisitCountry = data;
    setVisitCountry([...visitCountry, newVisitCountry]);
  };

  const country = use(fetchCountry);
  return (
    <div>
      <h1>countries: {country.length}</h1>
      <div className="countries">
        {visitCountry.map((data) => (
          <Country key={data.cca2} data={data}></Country>
        ))}
      </div>
      <h3>already visited country: {visitCountry.length}</h3>
      <ol>
        {visitCountry.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ol>
      <div className="countries">
        {country.map((data) => (
          <Country
            key={data.cca2}
            data={data}
            alreadyVisited={alreadyVisited}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
