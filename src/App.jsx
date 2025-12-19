import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/countries";

const fetchCountry = fetch(
  "https://studies.cs.helsinki.fi/restcountries/api/all"
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<p>loading data...</p>}>
        <Countries fetchCountry={fetchCountry}></Countries>
      </Suspense>
    </>
  );
}

export default App;
