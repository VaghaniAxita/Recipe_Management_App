import React from 'react';

const RecipeDetail = ({ recipe, onEdit, onDelete }) => {
    return (
        <div className="p-4">
            <h2>{recipe.title}</h2>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>
            <p>Cuisine: {recipe.cuisineType}</p>
            <p>Cooking Time: {recipe.cookingTime} mins</p>
            <button onClick={onEdit}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default RecipeDetail;
