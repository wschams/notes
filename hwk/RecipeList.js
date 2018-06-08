import React, { Component } from 'react';

const RecipeList = (props) => {
    const { name } = props.recipe;

    return (
            <ul>{name}</ul>
    );
}

export default RecipeList;