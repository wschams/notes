import React, { Component } from 'react';
import './App.css';
import RecipeBook from './RecipeBook';
import AddRecipe from './AddRecipe';

class App extends Component {
  render() {
    return (
      <div>
        <RecipeBook />
        <AddRecipe />
      </div>
    );
  }
}

export default App;
