import React from 'react';
import StoresTable from "../Stores/StoresTable.js"
import { Link } from 'react-router-dom';

function storelist() {
  return (
    <>
      <h1>List of Beaver Mart Stores</h1>
      <div>
        <StoresTable />
      </div>
      <Link to="/">Go to the Home Page</Link>
    </>
  );
}

export default storelist;
