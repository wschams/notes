import React, { Component } from 'react';
import AddRecipe from './AddRecipe';

export default class RecipeListData extends Component {
    handleSubmit = (event) => {
        this.props.addRecipe({
            name: this.state.name,
            instructions: this.state.instructions
        });
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
            </div>
        );
    }
}