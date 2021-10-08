import React from 'react';
import { useState } from "react";

const Ifelsecomp = () => {
  const [cityName, setCityName] = useState("");
  const [filtercity, setFilterCity] = useState([]);
  const arrCity = ["Delhi", "Noida", "Chennai", "Gurugram"];
  const eventChange = (event) => {
    setCityName(event.target.value);
    let city = arrCity.filter((value) =>
      value.toLowerCase().includes(event.target.value)
    );
    setFilterCity(city);
  }
  const Condinal = () => {
    if (cityName !== ''){
        return (<ul>
            {filtercity.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>);
      }
      else {
          return (
              <h2>Add something</h2>
          )
      }
  }

  return (
    <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <input type="text" value={cityName} onChange={eventChange} />
        <Condinal />
    </div>
  );
};

export default Ifelsecomp;
