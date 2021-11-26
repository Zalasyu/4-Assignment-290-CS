import React, { useState } from 'react'
import data from '../data/stores.js'
import '../App.css'


function StoresTable() {
  const [stores, setStores] = useState(data);
  const [zipCode, setZipCode] = useState('');

  const handleZipCodeChange = event => {
    setZipCode(event.target.value);

  };
  const handleSubmit = event => {
    event.preventDefault();
    alert(`You entered: ${zipCode}`);


  };

  return (
  <div>
    <table>
      <caption>List of Beaver stores</caption>
      <thead>
        <tr>
          <th>City</th>
          <th>State</th>
          <th>Zip Code</th>
        </tr>
      </thead>
      {stores.map((store) => (
        <tr>
          <td>{store.city}</td>
          <td>{store.state}</td>
          <td>{store.zipCode}</td>
        </tr>
      ))}
    </table>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Zip Code Input</legend>
        <label> Enter your 5 digit zip code: </label> 
        <input type="text" name="zipCode" value={zipCode} onChange={handleZipCodeChange} 
                 placeholder="Enter a 5 digit zip code..." maxlength="5"/>
        <br/>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
   </div>
  );
}

export default StoresTable;
