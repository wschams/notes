import React, { Component } from 'react';
import RecipeDetails from './RecipeDetails';

export default class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedRecipe: {} };
    }

    handleClick = () => {
        this.setState({ selectedRecipe: this.props.recipe});
    }

    render () {
    return (
            <div>
            <RecipeDetails selectedRecipe = {this.state.selectedRecipe} />
            <div onClick={this.handleClick} > {this.props.recipe.name}  </div >  
            </div>  
    );
}
}