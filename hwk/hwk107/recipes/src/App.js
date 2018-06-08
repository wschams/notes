import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h1>PCS Recipes</h1>
        <Link to="/recipes">Recipes</Link> | <Link to="/addRecipe">Add Recipe</Link> 
        <hr />
        {Routes}
      </div>
    );
  }
}


export default App;
