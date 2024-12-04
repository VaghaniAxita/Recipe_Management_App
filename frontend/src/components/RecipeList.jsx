import React, { useState, useEffect } from 'react';
import axios from '../api/recipeApi';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get('/recipes')
            .then(res => setRecipes(res.data))
            .catch(err => console.error(err));
    }, []);

    const filteredRecipes = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-2 mb-4"
            />
            <ul>
                {filteredRecipes.map(recipe => (
                    <li key={recipe._id} className="p-4 border mb-2">
                        <h3>{recipe.title}</h3>
                        <p>Cuisine: {recipe.cuisineType}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
