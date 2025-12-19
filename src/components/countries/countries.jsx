import React, { use } from "react";
import Country from "../country/country";
import "./countries.css";

const Countries = ({ fetchCountry }) => {
  const country = use(fetchCountry);
  return (
    <div>
      <h1>countries: {country.length}</h1>
      <div className="countries">
        {country.map((data) => (
          <Country data={data}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
