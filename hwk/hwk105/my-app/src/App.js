import React, { Component } from 'react';
import './App.css';
import Recipe from './Recipe';

class App extends Component {
  recipes = [
    { id: 1, name: "asparagus", ingredients: ["asparagus", "olive oil", "pinto beans"]},
    { id: 2, name: "brussels sprouts", ingredients: ["brussels sprouts", "olive oil"]},
    { id: 3, name: "kale", ingredients: ["kale", "olive oil", "cheese"]}
  ];
  
  render() {
    const recipeListComponents = this.recipes.map(recipe => <li key={recipe.id}><Recipe recipe={recipe} /></li>);

    return (
        <ul>
          {recipeListComponents}
        </ul>
    );
  }
}

export default App;
