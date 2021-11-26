import React from 'react';
import { Link } from 'react-router-dom';

function homepage(){

  return(
    <>
      <h1>Welcome to Beaver Mart!</h1>
      <Link to="/shoppinglist">Shop online</Link>
      <br/>
      <Link to="/storelist">See a list of Beaver Mart Stores</Link>
    </>

  );

}

export default homepage;
