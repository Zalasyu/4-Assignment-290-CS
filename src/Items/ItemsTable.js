import React, { useState } from 'react'
import data from '../data/items.js'
import Incrementor from '../components/incrementor'
import '../App.css'


function ItemsTable() {
  const [items, setItems] = useState(data);

  return (
    <table>
      <thead>
      <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
      </tr>
      </thead>
      {items.map((item) => (
        <tr>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td><Incrementor /></td>
        </tr>
      ))}
    </table>
  );
}

export default ItemsTable;
