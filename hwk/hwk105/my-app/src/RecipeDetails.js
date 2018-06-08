import React from 'react';

const RecipeDetails = (props) => {
    const { ingredients } = props.selectedRecipe;
    const ingredientsElements = ingredients ? ingredients.map((m, i) => <li key={i}>{m}</li>) : '';

    return (       
        <div>
            <ul>{ingredientsElements}</ul>
        </div>
    );
}

export default RecipeDetails;