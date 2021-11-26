import React from 'react';
import './App.css';
import homepage from './pages/homepage';
import shoppinglist from './pages/shoppinglist';
import storelist from './pages/storelist';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {  

  return (
  <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={homepage} />

        <Route path="/shoppinglist" component={shoppinglist} />

        <Route path="/storelist" component={storelist} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
