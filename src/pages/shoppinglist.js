import React from 'react';
import ItemsTable from '../Items/ItemsTable.js'
import { Link } from 'react-router-dom';


function shoppinglist() {
  return (
    <div>
      <h1>Select the quantity of the items you want to buy</h1>
      <ItemsTable />
      <p>
      <Link to="/">Go to the Home Page</Link>
      </p>
    </div>
  );
}

export default shoppinglist;
